import Serverless from 'serverless';
import prompt from 'prompt';
import _ from 'lodash';

import { Logging } from 'serverless/classes/Plugin';

import Logger from '../utils/logger';

import {
  getProposalClient,
  getActionClient,
  getConsolidatedSecrets,
  getRelayClient,
  getMonitorClient,
  getStackName,
  getTeamAPIkeysOrThrow,
  isTemplateResource,
} from '../utils';
import {
  DefenderAction,
  DefenderCategory,
  DefenderContract,
  DefenderNotification,
  DefenderRelayer,
  DefenderRelayerApiKey,
  DefenderMonitor,
  ResourceType,
  TeamKey,
  YSecret,
  Resources,
} from '../types';
import { Action, Contract, Monitor, Relayer, Notification } from '../types/types/resources.schema';

export default class DefenderRemove {
  serverless: Serverless;
  options: Serverless.Options;
  logging: Logging;
  log: Logger;
  hooks: any;
  teamKey?: TeamKey;
  resources: Resources;

  constructor(serverless: Serverless, options: Serverless.Options, logging: Logging) {
    this.serverless = serverless;
    this.options = options;
    this.logging = logging;

    this.resources = this.serverless.service.resources as Resources;

    this.log = Logger.getInstance();

    this.hooks = {
      'before:remove:remove': () => this.validateKeys(),
      'remove:remove': this.requestConfirmation.bind(this),
    };
  }

  validateKeys() {
    this.teamKey = getTeamAPIkeysOrThrow(this.serverless);
  }

  private async wrapper<Y, D>(
    context: Serverless,
    resourceType: ResourceType,
    resources: { [k: string]: Y } | Y[] | undefined,
    retrieveExistingResources: () => Promise<D[]>,
    onRemove: (resources: D[]) => Promise<void>,
    output: any[] = [],
  ) {
    try {
      this.log.progress('component-info', `Retrieving ${resourceType}`);
      const existing = (await retrieveExistingResources()).filter((e) =>
        isTemplateResource<Y, D>(context, e, resourceType, resources ?? []),
      );
      this.log.progress('component-remove', `Removing ${resourceType} from Defender`);
      await onRemove(existing);
      output.push(...existing);
    } catch (e) {
      this.log.tryLogDefenderError(e);
    }
  }

  private async requestConfirmation() {
    if (process.stdout.isTTY) {
      const properties = [
        {
          name: 'confirm',
          validator: /^(y|n){1}$/i,
          warning: 'Confirmation must be `y` (yes) or `n` (no)',
        },
      ];
      prompt.start({
        message:
          'This action will remove your resources from Defender permanently. Are you sure you wish to continue [y/n]?',
      });
      const { confirm } = await prompt.get(properties);

      if (confirm!.toString().toLowerCase() !== 'y') {
        this.log.error('Confirmation not acquired. Terminating command');
        return;
      }
      this.log.success('Confirmation acquired');
    }

    await this.remove();
  }

  private async remove() {
    this.log.notice('========================================================');
    const stackName = getStackName(this.serverless);
    this.log.progress('remove', `Running Defender Remove on stack: ${stackName}`);
    const stdOut: {
      stack: string;
      monitors: DefenderMonitor[];
      actions: DefenderAction[];
      contracts: DefenderContract[];
      relayers: {
        relayerId: string;
        relayerApiKeys: DefenderRelayerApiKey[];
      }[];
      notifications: DefenderNotification[];
      categories: DefenderCategory[];
      secrets: string[];
    } = {
      stack: stackName,
      monitors: [],
      actions: [],
      contracts: [],
      relayers: [],
      notifications: [],
      categories: [],
      secrets: [],
    };
    // Monitors
    const monitorClient = getMonitorClient(this.teamKey!);
    const listMonitors = () => monitorClient.list().then((i) => i.items);
    await this.wrapper<Monitor, DefenderMonitor>(
      this.serverless,
      'Monitors',
      this.resources?.monitors,
      listMonitors,
      async (monitors: DefenderMonitor[]) => {
        await Promise.all(
          monitors.map(async (e) => {
            this.log.progress(
              'component-remove-extra',
              `Removing ${e.stackResourceId} (${e.subscriberId}) from Defender`,
            );
            await monitorClient.delete({ monitorId: e.subscriberId });
            this.log.success(`Removed ${e.stackResourceId} (${e.subscriberId})`);
          }),
        );
      },
      stdOut.monitors,
    );

    // Actions
    const actionClient = getActionClient(this.teamKey!);
    const listActions = () => actionClient.list().then((i) => i.items);
    await this.wrapper<Action, DefenderAction>(
      this.serverless,
      'Actions',
      this.resources.actions,
      listActions,
      async (actions: DefenderAction[]) => {
        await Promise.all(
          actions.map(async (e) => {
            this.log.progress('component-remove-extra', `Removing ${e.stackResourceId} (${e.actionId}) from Defender`);
            await actionClient.delete({ actionId: e.actionId });
            this.log.success(`Removed ${e.stackResourceId} (${e.actionId})`);
          }),
        );
      },
      stdOut.actions,
    );

    // Contracts
    const adminClient = getProposalClient(this.teamKey!);
    const listContracts = () => adminClient.listContracts();
    await this.wrapper<Contract, DefenderContract>(
      this.serverless,
      'Contracts',
      this.resources?.contracts,
      listContracts,
      async (contracts: DefenderContract[]) => {
        await Promise.all(
          contracts.map(async (e) => {
            const id = `${e.network}-${e.address}`;
            this.log.progress('component-remove-extra', `Removing ${id} (${e.name}) from Defender`);
            await adminClient.deleteContract(id);
            this.log.success(`Removed ${id} (${e.name})`);
          }),
        );
      },
      stdOut.contracts,
    );

    try {
      // Relayer API keys
      const relayClient = getRelayClient(this.teamKey!);
      const listRelayers = (await relayClient.list()).items;
      const existingRelayers = listRelayers.filter((e) =>
        isTemplateResource<Relayer, DefenderRelayer>(this.serverless, e, 'Relayers', this.resources?.relayers ?? {}),
      );
      this.log.error('Deleting Relayers is currently only possible via the Defender UI.');
      this.log.progress('component-info', `Retrieving Relayer API Keys`);
      await Promise.all(
        existingRelayers.map(async (relayer) => {
          this.log.progress('component-info', `Retrieving API Keys for relayer ${relayer.stackResourceId}`);
          const relayerApiKeys = await relayClient.listKeys({ relayerId: relayer.relayerId });
          await Promise.all(
            relayerApiKeys.map(async (e) => {
              this.log.progress('component-remove-extra', `Removing ${e.stackResourceId} (${e.keyId}) from Defender`);
              await relayClient.deleteKey({ relayerId: e.relayerId, keyId: e.keyId });
              this.log.success(`Removed ${e.stackResourceId} (${e.keyId})`);
            }),
          );
          stdOut.relayers.push({
            relayerId: relayer.relayerId,
            relayerApiKeys,
          });
        }),
      );
    } catch (e) {
      this.log.tryLogDefenderError(e);
    }

    // Notifications
    const listNotifications = () => monitorClient.listNotificationChannels();
    await this.wrapper<Notification, DefenderNotification>(
      this.serverless,
      'Notifications',
      this.resources?.notifications,
      listNotifications,
      async (notifications: DefenderNotification[]) => {
        await Promise.all(
          notifications.map(async (e) => {
            this.log.progress(
              'component-remove-extra',
              `Removing ${e.stackResourceId} (${e.notificationId}) from Defender`,
            );
            await monitorClient.deleteNotificationChannel(e);
            this.log.success(`Removed ${e.stackResourceId} (${e.notificationId})`);
          }),
        );
      },
      stdOut.notifications,
    );

    // Categories

    // Temporarily Disabled
    // const listNotificationCategories = () => monitorClient.listNotificationCategories();
    // await this.wrapper<Category, DefenderCategory>(
    //   this.serverless,
    //   'Categories',
    //   this.resources??.categories,
    //   listNotificationCategories,
    //   async (categories: DefenderCategory[]) => {
    //     await Promise.all(
    //       categories.map(async (e) => {
    //         this.log.progress(
    //           'component-remove-extra',
    //           `Removing ${e.stackResourceId} (${e.categoryId}) from Defender`,
    //         );
    //         await monitorClient.deleteNotificationCategory(e.categoryId);
    //         this.log.success(`Removed ${e.stackResourceId} (${e.categoryId})`);
    //       }),
    //     );
    //   },
    //   stdOut.categories,
    // );

    // Secrets
    const listSecrets = () => actionClient.listSecrets().then((r) => r.secretNames ?? []);

    const allSecrets = getConsolidatedSecrets(this.serverless, this.resources);

    await this.wrapper<YSecret, string>(
      this.serverless,
      'Secrets',
      allSecrets,
      listSecrets,
      async (secrets: string[]) => {
        this.log.progress('component-remove-extra', `Removing (${secrets.join(', ')}) from Defender`);
        await actionClient.createSecrets({
          deletes: secrets,
          secrets: {},
        });
        this.log.success(`Removed (${secrets.join(', ')})`);
      },
      stdOut.secrets,
    );
    this.log.notice('========================================================');
    if (!process.stdout.isTTY) this.log.stdOut(JSON.stringify(stdOut, null, 2));
  }
}
