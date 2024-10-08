import Serverless from 'serverless';
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

export default class DefenderInfo {
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
      'before:info:info': () => this.validateKeys(),
      'info:info': this.info.bind(this),
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
    format: (resource: D) => string,
    output: any[],
  ) {
    try {
      this.log.progress('component-info', `Retrieving ${resourceType}`);
      this.log.notice(`${resourceType}`);
      const existing = (await retrieveExistingResources()).filter((e) =>
        isTemplateResource<Y, D>(context, e, resourceType, resources ?? {}),
      );

      await Promise.all(
        existing.map(async (e) => {
          this.log.notice(`${format(e)}`, 1);
          let keys: DefenderRelayerApiKey[] = [];
          // Also print relayer API keys
          if (resourceType === 'Relayers') {
            const listRelayerAPIKeys = await getRelayClient(getTeamAPIkeysOrThrow(context)).listKeys(
              (e as unknown as DefenderRelayer).relayerId,
            );
            listRelayerAPIKeys.map((k) => {
              this.log.notice(`${k.stackResourceId}: ${k.keyId}`, 2);
            });
            keys = listRelayerAPIKeys;
          }
          if (resourceType === 'Relayers') output.push({ ...e, relayerKeys: keys });
          else output.push(e);
        }),
      );
    } catch (e) {
      this.log.tryLogDefenderError(e);
    }
  }

  async info() {
    this.log.notice('========================================================');
    const stackName = getStackName(this.serverless);
    this.log.progress('info', `Running Defender Info on stack: ${stackName}`);
    const stdOut = {
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
    const listForkedNetworks = () => getNetworkClient(this.teamKey!).listForkedNetworks();

    await this.wrapper<ForkedNetworkRequest, DefenderTenantNetwork>(
      this.serverless,
      'Forked Networks',
      removeDefenderIdReferences(this.resources?.['forked-networks']),
      listForkedNetworks,
      (resource: DefenderTenantNetwork) => `${resource.stackResourceId}: ${resource.tenantNetworkId}`,
      stdOut.forkedNetworks,
    );

    // Private Networks
    const listPrivateNetworks = () => getNetworkClient(this.teamKey!).listPrivateNetworks();

    await this.wrapper<PrivateNetworkRequest, DefenderTenantNetwork>(
      this.serverless,
      'Private Networks',
      removeDefenderIdReferences(this.resources?.['private-networks']),
      listPrivateNetworks,
      (resource: DefenderTenantNetwork) => `${resource.stackResourceId}: ${resource.tenantNetworkId}`,
      stdOut.privateNetworks,
    );

    // Monitors
    const listMonitors = () =>
      getMonitorClient(this.teamKey!)
        .list()
        .then((i) => i.items);

    await this.wrapper<Monitor, DefenderMonitor>(
      this.serverless,
      'Monitors',
      removeDefenderIdReferences(this.resources?.monitors),
      listMonitors,
      (resource: DefenderMonitor) => `${resource.stackResourceId}: ${resource.monitorId}`,
      stdOut.monitors,
    );

    // Actions
    const listActions = () =>
      getActionClient(this.teamKey!)
        .list()
        .then((r) => r.items);
    await this.wrapper<Action, DefenderAction>(
      this.serverless,
      'Actions',
      removeDefenderIdReferences(this.resources.actions),
      listActions,
      (resource: DefenderAction) => `${resource.stackResourceId}: ${resource.actionId}`,
      stdOut.actions,
    );

    // Contracts
    const listContracts = () => getProposalClient(this.teamKey!).listContracts();
    await this.wrapper<Contract, DefenderContract>(
      this.serverless,
      'Contracts',
      removeDefenderIdReferences(this.resources?.contracts),
      listContracts,
      (resource: DefenderContract) => `${resource.network}-${resource.address}: ${resource.name}`,
      stdOut.contracts,
    );

    // Relayers
    const listRelayers = () =>
      getRelayClient(this.teamKey!)
        .list()
        .then((r) => r.items);
    await this.wrapper<Relayer, DefenderRelayer>(
      this.serverless,
      'Relayers',
      removeDefenderIdReferences(this.resources?.relayers),
      listRelayers,
      (resource: DefenderRelayer) => `${resource.stackResourceId}: ${resource.relayerId}`,
      stdOut.relayers,
    );

    // Relayer Groups
    const listRelayerGroups = () => getRelayGroupClient(this.teamKey!).list();
    await this.wrapper<RelayerGroup, DefenderRelayerGroup>(
      this.serverless,
      'Relayer Groups',
      removeDefenderIdReferences(this.resources?.['relayer-groups']),
      listRelayerGroups,
      (resource: DefenderRelayerGroup) => `${resource.stackResourceId}: ${resource.relayerGroupId}`,
      stdOut.relayerGroups,
    );

    // Notifications
    const listNotifications = () => getMonitorClient(this.teamKey!).listNotificationChannels();
    await this.wrapper<Notification, DefenderNotification>(
      this.serverless,
      'Notifications',
      removeDefenderIdReferences(this.resources?.notifications),
      listNotifications,
      (resource: DefenderNotification) => `${resource.stackResourceId}: ${resource.notificationId}`,
      stdOut.notifications,
    );

    // Secrets
    const listSecrets = () =>
      getActionClient(this.teamKey!)
        .listSecrets()
        .then((r) => r.secretNames ?? []);

    const allSecrets = getConsolidatedSecrets(this.serverless, this.resources);

    await this.wrapper<YSecret, string>(
      this.serverless,
      'Secrets',
      allSecrets,
      listSecrets,
      (resource: string) => `${resource}`,
      stdOut.secrets,
    );
    this.log.notice('========================================================');
    if (!process.stdout.isTTY) this.log.stdOut(JSON.stringify(stdOut, null, 2));
  }
}
