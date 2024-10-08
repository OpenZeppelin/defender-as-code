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
  getNetworkClient,
  getStackName,
  getTeamAPIkeysOrThrow,
  isTemplateResource,
  removeDefenderIdReferences,
  getRelayGroupClient,
} from '../utils';
import {
  DefenderAction,
  DefenderContract,
  DefenderNotification,
  DefenderRelayer,
  DefenderRelayerApiKey,
  DefenderMonitor,
  ResourceType,
  TeamKey,
  YSecret,
  Resources,
  DefenderTenantNetwork,
  DefenderRelayerGroup,
} from '../types';
import {
  Action,
  Contract,
  Monitor,
  Relayer,
  Notification,
  ForkedNetworkRequest,
  PrivateNetworkRequest,
  RelayerGroup,
} from '../types/types/resources.schema';

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
      relayerGroups: {
        relayerGroupId: string;
        relayerGroupApiKeys: DefenderRelayerApiKey[];
      }[];
      notifications: DefenderNotification[];
      secrets: string[];
      forkedNetworks: DefenderTenantNetwork[];
      privateNetworks: DefenderTenantNetwork[];
    } = {
      stack: stackName,
      monitors: [],
      actions: [],
      contracts: [],
      relayers: [],
      relayerGroups: [],
      notifications: [],
      secrets: [],
      forkedNetworks: [],
      privateNetworks: [],
    };

    // Forked Networks
    const forkedNetworkClient = getNetworkClient(this.teamKey!);
    const listForkedNetworks = () => forkedNetworkClient.listForkedNetworks();
    await this.wrapper<ForkedNetworkRequest, DefenderTenantNetwork>(
      this.serverless,
      'Forked Networks',
      removeDefenderIdReferences(this.resources?.['forked-networks']),
      listForkedNetworks,
      async (forkedNetworks: DefenderTenantNetwork[]) => {
        await Promise.all(
          forkedNetworks.map(async (e) => {
            this.log.progress(
              'component-remove-extra',
              `Removing ${e.stackResourceId} (${e.tenantNetworkId}) from Defender`,
            );
            await forkedNetworkClient.deleteForkedNetwork(e.tenantNetworkId);
            this.log.success(`Removed ${e.stackResourceId} (${e.tenantNetworkId})`);
          }),
        );
      },
      stdOut.forkedNetworks,
    );

    // Private Networks
    const privateNetworkClient = getNetworkClient(this.teamKey!);
    const listPrivateNetworks = () => privateNetworkClient.listPrivateNetworks();
    await this.wrapper<PrivateNetworkRequest, DefenderTenantNetwork>(
      this.serverless,
      'Private Networks',
      removeDefenderIdReferences(this.resources?.['private-networks']),
      listPrivateNetworks,
      async (privateNetworks: DefenderTenantNetwork[]) => {
        await Promise.all(
          privateNetworks.map(async (e) => {
            this.log.progress(
              'component-remove-extra',
              `Removing ${e.stackResourceId} (${e.tenantNetworkId}) from Defender`,
            );
            await privateNetworkClient.deletePrivateNetwork(e.tenantNetworkId);
            this.log.success(`Removed ${e.stackResourceId} (${e.tenantNetworkId})`);
          }),
        );
      },
      stdOut.privateNetworks,
    );

    // Monitors
    const monitorClient = getMonitorClient(this.teamKey!);
    const listMonitors = () => monitorClient.list().then((i) => i.items);
    await this.wrapper<Monitor, DefenderMonitor>(
      this.serverless,
      'Monitors',
      removeDefenderIdReferences(this.resources?.monitors),
      listMonitors,
      async (monitors: DefenderMonitor[]) => {
        await Promise.all(
          monitors.map(async (e) => {
            this.log.progress('component-remove-extra', `Removing ${e.stackResourceId} (${e.monitorId}) from Defender`);
            await monitorClient.delete(e.monitorId);
            this.log.success(`Removed ${e.stackResourceId} (${e.monitorId})`);
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
      removeDefenderIdReferences(this.resources.actions),
      listActions,
      async (actions: DefenderAction[]) => {
        await Promise.all(
          actions.map(async (e) => {
            this.log.progress('component-remove-extra', `Removing ${e.stackResourceId} (${e.actionId}) from Defender`);
            await actionClient.delete(e.actionId);
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
      removeDefenderIdReferences(this.resources?.contracts),
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
        isTemplateResource<Relayer, DefenderRelayer>(
          this.serverless,
          e,
          'Relayers',
          removeDefenderIdReferences(this.resources?.relayers) ?? {},
        ),
      );
      this.log.error('Deleting Relayers is currently only possible via the Defender UI.');
      this.log.progress('component-info', `Retrieving Relayer API Keys`);
      await Promise.all(
        existingRelayers.map(async (relayer) => {
          this.log.progress('component-info', `Retrieving API Keys for relayer ${relayer.stackResourceId}`);
          const relayerApiKeys = await relayClient.listKeys(relayer.relayerId);
          await Promise.all(
            relayerApiKeys.map(async (e) => {
              this.log.progress('component-remove-extra', `Removing ${e.stackResourceId} (${e.keyId}) from Defender`);
              await relayClient.deleteKey(e.relayerId, e.keyId);
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

    try {
      // Relayer Group API keys
      const relayGroupClient = getRelayGroupClient(this.teamKey!);
      const listRelayerGroups = await relayGroupClient.list();
      const existingRelayerGroups = listRelayerGroups.filter((e) =>
        isTemplateResource<RelayerGroup, DefenderRelayerGroup>(
          this.serverless,
          e,
          'Relayer Groups',
          removeDefenderIdReferences(this.resources?.['relayer-groups']) ?? {},
        ),
      );
      this.log.error('Deleting Relayer Groups is currently only possible via the Defender UI.');
      this.log.progress('component-info', `Retrieving Relayer Group API Keys`);
      await Promise.all(
        existingRelayerGroups.map(async (relayerGroup) => {
          this.log.progress('component-info', `Retrieving API Keys for relayer group ${relayerGroup.stackResourceId}`);
          const relayerGroupApiKeys = await relayGroupClient.listKeys(relayerGroup.relayerGroupId);
          await Promise.all(
            relayerGroupApiKeys.map(async (e) => {
              this.log.progress('component-remove-extra', `Removing ${e.stackResourceId} (${e.keyId}) from Defender`);
              await relayGroupClient.deleteKey(e.relayerId, e.keyId);
              this.log.success(`Removed ${e.stackResourceId} (${e.keyId})`);
            }),
          );
          stdOut.relayerGroups.push({
            relayerGroupId: relayerGroup.relayerGroupId,
            relayerGroupApiKeys,
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
      removeDefenderIdReferences(this.resources?.notifications),
      listNotifications,
      async (notifications: DefenderNotification[]) => {
        await Promise.all(
          notifications.map(async (e) => {
            this.log.progress(
              'component-remove-extra',
              `Removing ${e.stackResourceId} (${e.notificationId}) from Defender`,
            );
            await monitorClient.deleteNotificationChannel(e.notificationId, e.type);
            this.log.success(`Removed ${e.stackResourceId} (${e.notificationId})`);
          }),
        );
      },
      stdOut.notifications,
    );

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
        if (secrets.length) this.log.success(`Removed (${secrets.join(', ')})`);
      },
      stdOut.secrets,
    );
    this.log.notice('========================================================');
    if (!process.stdout.isTTY) this.log.stdOut(JSON.stringify(stdOut, null, 2));
  }
}
