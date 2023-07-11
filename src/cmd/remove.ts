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
  PlatformAction,
  PlatformCategory,
  PlatformContract,
  PlatformNotification,
  PlatformRelayer,
  PlatformRelayerApiKey,
  PlatformMonitor,
  ResourceType,
  TeamKey,
  YAction,
  YContract,
  YNotification,
  YRelayer,
  YSecret,
  YMonitor,
} from '../types';

export default class PlatformRemove {
  serverless: Serverless;
  options: Serverless.Options;
  logging: Logging;
  log: Logger;
  hooks: any;
  teamKey?: TeamKey;

  constructor(serverless: Serverless, options: Serverless.Options, logging: Logging) {
    this.serverless = serverless;
    this.options = options;
    this.logging = logging;

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
    resources: Y[] | undefined,
    retrieveExistingResources: () => Promise<D[]>,
    onRemove: (resources: D[]) => Promise<void>,
    output: any[] = [],
  ) {
    try {
      this.log.progress('component-info', `Retrieving ${resourceType}`);
      const existing = (await retrieveExistingResources()).filter((e) =>
        isTemplateResource<Y, D>(context, e, resourceType, resources ?? []),
      );
      this.log.progress('component-remove', `Removing ${resourceType} from Platform`);
      await onRemove(existing);
      output.push(...existing);
    } catch (e) {
      this.log.tryLogPlatformError(e);
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
          'This action will remove your resources from Platform permanently. Are you sure you wish to continue [y/n]?',
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
    this.log.progress('remove', `Running Platform Remove on stack: ${stackName}`);
    const stdOut: {
      stack: string;
      monitors: PlatformMonitor[];
      actions: PlatformAction[];
      contracts: PlatformContract[];
      relayers: {
        relayerId: string;
        relayerApiKeys: PlatformRelayerApiKey[];
      }[];
      notifications: PlatformNotification[];
      categories: PlatformCategory[];
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
    await this.wrapper<YMonitor, PlatformMonitor>(
      this.serverless,
      'Monitors',
      this.serverless.service.resources?.Resources?.monitors,
      listMonitors,
      async (monitors: PlatformMonitor[]) => {
        await Promise.all(
          monitors.map(async (e) => {
            this.log.progress(
              'component-remove-extra',
              `Removing ${e.stackResourceId} (${e.subscriberId}) from Platform`,
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
    await this.wrapper<YAction, PlatformAction>(
      this.serverless,
      'Actions',
      this.serverless.service.functions as any,
      listActions,
      async (actions: PlatformAction[]) => {
        await Promise.all(
          actions.map(async (e) => {
            this.log.progress('component-remove-extra', `Removing ${e.stackResourceId} (${e.actionkId}) from Platform`);
            await actionClient.delete({ actionId: e.actionkId });
            this.log.success(`Removed ${e.stackResourceId} (${e.actionkId})`);
          }),
        );
      },
      stdOut.actions,
    );

    // Contracts
    const adminClient = getProposalClient(this.teamKey!);
    const listContracts = () => adminClient.listContracts();
    await this.wrapper<Omit<YContract, 'abi'> & { abi?: string }, PlatformContract>(
      this.serverless,
      'Contracts',
      this.serverless.service.resources?.Resources?.contracts,
      listContracts,
      async (contracts: PlatformContract[]) => {
        await Promise.all(
          contracts.map(async (e) => {
            const id = `${e.network}-${e.address}`;
            this.log.progress('component-remove-extra', `Removing ${id} (${e.name}) from Platform`);
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
        isTemplateResource<YRelayer, PlatformRelayer>(
          this.serverless,
          e,
          'Relayers',
          this.serverless.service.resources?.Resources?.relayers ?? [],
        ),
      );
      this.log.error('Deleting Relayers is currently only possible via the Platform UI.');
      this.log.progress('component-info', `Retrieving Relayer API Keys`);
      await Promise.all(
        existingRelayers.map(async (relayer) => {
          this.log.progress('component-info', `Retrieving API Keys for relayer ${relayer.stackResourceId}`);
          const relayerApiKeys = await relayClient.listKeys({ relayerId: relayer.relayerId });
          await Promise.all(
            relayerApiKeys.map(async (e) => {
              this.log.progress('component-remove-extra', `Removing ${e.stackResourceId} (${e.keyId}) from Platform`);
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
      this.log.tryLogPlatformError(e);
    }

    // Notifications
    const listNotifications = () => monitorClient.listNotificationChannels();
    await this.wrapper<YNotification, PlatformNotification>(
      this.serverless,
      'Notifications',
      this.serverless.service.resources?.Resources?.notifications,
      listNotifications,
      async (notifications: PlatformNotification[]) => {
        await Promise.all(
          notifications.map(async (e) => {
            this.log.progress(
              'component-remove-extra',
              `Removing ${e.stackResourceId} (${e.notificationId}) from Platform`,
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
    // await this.wrapper<YCategory, PlatformCategory>(
    //   this.serverless,
    //   'Categories',
    //   this.serverless.service.resources?.Resources?.categories,
    //   listNotificationCategories,
    //   async (categories: PlatformCategory[]) => {
    //     await Promise.all(
    //       categories.map(async (e) => {
    //         this.log.progress(
    //           'component-remove-extra',
    //           `Removing ${e.stackResourceId} (${e.categoryId}) from Platform`,
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

    const allSecrets = getConsolidatedSecrets(this.serverless);

    await this.wrapper<YSecret, string>(
      this.serverless,
      'Secrets',
      allSecrets,
      listSecrets,
      async (secrets: string[]) => {
        this.log.progress('component-remove-extra', `Removing (${secrets.join(', ')}) from Platform`);
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
