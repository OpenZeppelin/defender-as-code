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
  getStackName,
  getTeamAPIkeysOrThrow,
  isTemplateResource,
} from '../utils';
import {
  PlatformAction,
  DefenderCategory,
  DefenderContract,
  DefenderNotification,
  DefenderRelayer,
  DefenderRelayerApiKey,
  PlatformMonitor,
  ResourceType,
  TeamKey,
  YAction,
  YCategory,
  YContract,
  YNotification,
  YRelayer,
  YSecret,
  YMonitor,
} from '../types';

export default class DefenderInfo {
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
    resources: Y[] | undefined,
    retrieveExistingResources: () => Promise<D[]>,
    format: (resource: D) => string,
    output: any[],
  ) {
    try {
      this.log.progress('component-info', `Retrieving ${resourceType}`);
      this.log.notice(`${resourceType}`);
      const existing = (await retrieveExistingResources()).filter((e) =>
        isTemplateResource<Y, D>(context, e, resourceType, resources ?? []),
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
      notifications: [],
      categories: [],
      secrets: [],
    };
    // Monitors
    const listMonitors = () =>
      getMonitorClient(this.teamKey!)
        .list()
        .then((i) => i.items);

    await this.wrapper<YMonitor, PlatformMonitor>(
      this.serverless,
      'Monitors',
      this.serverless.service.resources?.Resources?.monitors,
      listMonitors,
      (resource: PlatformMonitor) => `${resource.stackResourceId}: ${resource.subscriberId}`,
      stdOut.monitors,
    );

    // Actions
    const listActions = () =>
      getActionClient(this.teamKey!)
        .list()
        .then((r) => r.items);
    await this.wrapper<YAction, PlatformAction>(
      this.serverless,
      'Autotasks',
      this.serverless.service.functions as unknown as YAction[],
      listActions,
      (resource: PlatformAction) => `${resource.stackResourceId}: ${resource.actionkId}`,
      stdOut.actions,
    );

    // Contracts
    const listContracts = () => getProposalClient(this.teamKey!).listContracts();
    await this.wrapper<YContract, DefenderContract>(
      this.serverless,
      'Contracts',
      this.serverless.service.resources?.Resources?.contracts,
      listContracts,
      (resource: DefenderContract) => `${resource.network}-${resource.address}: ${resource.name}`,
      stdOut.contracts,
    );

    // Relayers
    const listRelayers = () =>
      getRelayClient(this.teamKey!)
        .list()
        .then((r) => r.items);
    await this.wrapper<YRelayer, DefenderRelayer>(
      this.serverless,
      'Relayers',
      this.serverless.service.resources?.Resources?.relayers,
      listRelayers,
      (resource: DefenderRelayer) => `${resource.stackResourceId}: ${resource.relayerId}`,
      stdOut.relayers,
    );

    // Notifications
    const listNotifications = () => getMonitorClient(this.teamKey!).listNotificationChannels();
    await this.wrapper<YNotification, DefenderNotification>(
      this.serverless,
      'Notifications',
      this.serverless.service.resources?.Resources?.notifications,
      listNotifications,
      (resource: DefenderNotification) => `${resource.stackResourceId}: ${resource.notificationId}`,
      stdOut.notifications,
    );

    // Categories
    const listNotificationCategories = () => getMonitorClient(this.teamKey!).listNotificationCategories();
    await this.wrapper<YCategory, DefenderCategory>(
      this.serverless,
      'Categories',
      this.serverless.service.resources?.Resources?.categories,
      listNotificationCategories,
      (resource: DefenderCategory) => `${resource.stackResourceId}: ${resource.categoryId}`,
      stdOut.categories,
    );

    // Secrets
    const listSecrets = () =>
      getActionClient(this.teamKey!)
        .listSecrets()
        .then((r) => r.secretNames ?? []);

    const allSecrets = getConsolidatedSecrets(this.serverless);

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
