import Serverless from 'serverless';
import prompt from 'prompt';
import _ from 'lodash';

import { Logging } from 'serverless/classes/Plugin';

import Logger from '../utils/logger';

import {
  getMonitorClient,
  getActionClient,
  getProposalClient,
  getRelayClient,
  constructNotification,
  getTeamAPIkeysOrThrow,
  getStackName,
  getResourceID,
  getEquivalentResource,
  isSSOT,
  getEquivalentResourceByKey,
  getConsolidatedSecrets,
  validateTypesAndSanitise,
  constructNotificationCategory,
  validateAdditionalPermissionsOrThrow,
  getDeployClient,
  formatABI,
  constructMonitor,
} from '../utils';
import {
  PlatformAction,
  PlatformContract,
  PlatformNotification,
  PlatformRelayer,
  PlatformMonitor,
  PlatformRelayerApiKey,
  TeamKey,
  YAction,
  YContract,
  YNotification,
  YRelayer,
  YSecret,
  YMonitor,
  YCategory,
  YBlockExplorerApiKey,
  YDeploymentConfig,
  DeployOutput,
  DeployResponse,
  ResourceType,
  ListPlatformResources,
  PlatformNotificationReference,
  PlatformWebhookTrigger,
  PlatformScheduleTrigger,
  PlatformMonitorTrigger,
  PlatformMonitorFilterTrigger,
  PlatformDeploymentConfig,
  PlatformBlockExplorerApiKey,
  PlatformCategory,
  PlatformFortaMonitorResponse,
  PlatformBlockMonitorResponse,
} from '../types';
import keccak256 from 'keccak256';

export default class PlatformDeploy {
  serverless: Serverless;
  options: Serverless.Options;
  logging: Logging;
  log: Logger;
  hooks: any;
  teamKey?: TeamKey;
  ssotDifference?: ListPlatformResources;

  constructor(serverless: Serverless, options: Serverless.Options, logging: Logging) {
    this.serverless = serverless;
    this.options = options;
    this.logging = logging;

    this.log = Logger.getInstance();

    this.hooks = {
      'before:deploy:deploy': () => this.validateKeys(),
      'deploy:deploy': this.requestConfirmation.bind(this),
    };
  }

  validateKeys() {
    this.teamKey = getTeamAPIkeysOrThrow(this.serverless);
  }

  private async getSSOTDifference(): Promise<ListPlatformResources> {
    const difference: ListPlatformResources = {
      monitors: [],
      actions: [],
      notifications: [],
      categories: [],
      contracts: [],
      relayerApiKeys: [],
      secrets: [],
      deploymentConfigs: [],
      blockExplorerApiKeys: [],
    };
    // Contracts
    const contracts: YContract[] = this.serverless.service.resources?.Resources?.contracts ?? [];
    const adminClient = getProposalClient(this.teamKey!);
    const dContracts = await adminClient.listContracts();
    const contractDifference = _.differenceWith(
      dContracts,
      Object.entries(contracts ?? []),
      (a: PlatformContract, b: [string, YContract]) =>
        `${a.network}-${a.address}` === `${b[1].network}-${b[1].address}`,
    );

    // Monitors
    const monitors: YMonitor[] = this.serverless.service.resources?.Resources?.monitors ?? [];
    const monitorClient = getMonitorClient(this.teamKey!);
    const monitorItems = (await monitorClient.list()).items;
    const monitorDifference = _.differenceWith(
      monitorItems,
      Object.entries(monitors ?? []),
      (a: PlatformMonitor, b: [string, YMonitor]) =>
        a.stackResourceId === getResourceID(getStackName(this.serverless), b[0]),
    );

    // Relayers
    const relayers: YRelayer[] = this.serverless.service.resources?.Resources?.relayers ?? [];
    const relayerClient = getRelayClient(this.teamKey!);
    const dRelayers = (await relayerClient.list()).items;

    // Relayers API keys
    await Promise.all(
      Object.entries(relayers).map(async ([id, relayer]) => {
        const dRelayer = getEquivalentResourceByKey<PlatformRelayer>(
          getResourceID(getStackName(this.serverless), id),
          dRelayers,
        );
        if (dRelayer) {
          const dRelayerApiKeys = await relayerClient.listKeys({ relayerId: dRelayer.relayerId });
          const configuredKeys = relayer['api-keys'];
          const relayerApiKeyDifference = _.differenceWith(
            dRelayerApiKeys,
            configuredKeys,
            (a: PlatformRelayerApiKey, b: string) => a.stackResourceId === getResourceID(dRelayer.stackResourceId!, b),
          );
          difference.relayerApiKeys.push(...relayerApiKeyDifference);
        }
      }),
    );

    // Notifications
    const notifications: YNotification[] = this.serverless.service.resources?.Resources?.notifications ?? [];
    const dNotifications = await monitorClient.listNotificationChannels();
    const notificationDifference = _.differenceWith(
      dNotifications,
      Object.entries(notifications ?? []),
      (a: PlatformNotification, b: [string, YNotification]) =>
        a.stackResourceId === getResourceID(getStackName(this.serverless), b[0]),
    );

    // Notification Categories
    const categories: YCategory[] = this.serverless.service.resources?.Resources?.categories ?? [];
    const dCategories = await monitorClient.listNotificationCategories();
    const categoryDifference = _.differenceWith(
      dCategories,
      Object.entries(categories ?? []),
      (a: PlatformCategory, b: [string, YCategory]) =>
        a.stackResourceId === getResourceID(getStackName(this.serverless), b[0]),
    );

    // Actions
    const actions: YAction[] = this.serverless.service.functions as any;
    const actionClient = getActionClient(this.teamKey!);
    const dActions = (await actionClient.list()).items;
    const actionDifference = _.differenceWith(
      dActions,
      Object.entries(actions ?? []),
      (a: PlatformAction, b: [string, YAction]) =>
        a.stackResourceId === getResourceID(getStackName(this.serverless), b[0]),
    );

    // Secrets
    const allSecrets = getConsolidatedSecrets(this.serverless);
    const dSecrets = (await actionClient.listSecrets()).secretNames ?? [];
    const secretsDifference = _.differenceWith(
      dSecrets,
      Object.values(allSecrets).map((k, _) => Object.keys(k)[0] ?? ''),
      (a: string, b: string) => a === b,
    );

    // Deployment Configs
    const deploymentConfigs: YDeploymentConfig[] =
      this.serverless.service.resources?.Resources?.['deployment-configs'] ?? [];
    const deployClient = getDeployClient(this.teamKey!);
    const dDeploymentConfigs = await deployClient.listConfig();
    const deploymentConfigDifference = _.differenceWith(
      dDeploymentConfigs,
      Object.entries(deploymentConfigs ?? []),
      (a: PlatformDeploymentConfig, b: [string, YDeploymentConfig]) =>
        a.stackResourceId === getResourceID(getStackName(this.serverless), b[0]),
    );

    // Block Explorer Api Keys
    const blockExplorerApiKeys: YBlockExplorerApiKey[] =
      this.serverless.service.resources?.Resources?.['block-explorer-api-keys'] ?? [];
    const dBlockExplorerApiKeys = await deployClient.listBlockExplorerApiKeys();
    const blockExplorerApiKeyDifference = _.differenceWith(
      dBlockExplorerApiKeys,
      Object.entries(blockExplorerApiKeys ?? []),
      (a: PlatformBlockExplorerApiKey, b: [string, YBlockExplorerApiKey]) =>
        a.stackResourceId === getResourceID(getStackName(this.serverless), b[0]),
    );

    difference.contracts = contractDifference;
    difference.monitors = monitorDifference;
    difference.notifications = notificationDifference;
    difference.categories = categoryDifference;
    difference.actions = actionDifference;
    difference.secrets = secretsDifference;
    difference.deploymentConfigs = deploymentConfigDifference;
    difference.blockExplorerApiKeys = blockExplorerApiKeyDifference;

    return difference;
  }
  private async constructConfirmationMessage(withResources: ListPlatformResources): Promise<string> {
    const start = `You have SSOT enabled. This might remove resources from Platform permanently.\nHaving SSOT enabled will interpret the resources defined in the serverless.yml file as the Single Source Of Truth, and will remove any existing Platform resource which is not defined in the YAML file (with the exception of Relayers).\nIf you continue, the following resources will be removed from Platform:`;
    const end = `Are you sure you wish to continue [y/n]?`;

    const formattedResources = {
      actions:
        withResources.actions.length > 0
          ? withResources.actions.map((a) => `${a.stackResourceId ?? a.name} (${a.actionkId})`)
          : undefined,
      monitors:
        withResources.monitors.length > 0
          ? withResources.monitors.map((a) => `${a.stackResourceId ?? a.name} (${a.subscriberId})`)
          : undefined,
      notifications:
        withResources.notifications.length > 0
          ? withResources.notifications.map((a) => `${a.stackResourceId ?? a.name} (${a.notificationId})`)
          : undefined,
      contracts:
        withResources.contracts.length > 0
          ? withResources.contracts.map((a) => `${a.network}-${a.address} (${a.name})`)
          : undefined,
      relayerApiKeys:
        withResources.relayerApiKeys.length > 0
          ? withResources.relayerApiKeys.map((a) => `${a.stackResourceId ?? a.apiKey} (${a.keyId})`)
          : undefined,
      secrets: withResources.secrets.length > 0 ? withResources.secrets.map((a) => `${a}`) : undefined,
    };
    return `${start}\n${
      _.isEmpty(validateTypesAndSanitise(formattedResources))
        ? 'None. No differences found.'
        : JSON.stringify(formattedResources, null, 2)
    }\n\n${end}`;
  }

  private async requestConfirmation() {
    if (isSSOT(this.serverless) && process.stdout.isTTY) {
      const properties = [
        {
          name: 'confirm',
          validator: /^(y|n){1}$/i,
          warning: 'Confirmation must be `y` (yes) or `n` (no)',
        },
      ];

      this.log.progress('component-deploy', `Retrieving list of resources`);

      this.ssotDifference = await this.getSSOTDifference();

      this.log.progress('component-deploy', `Awaiting confirmation from user`);
      prompt.start({
        message: await this.constructConfirmationMessage(this.ssotDifference),
      });
      const { confirm } = await prompt.get(properties);

      if (confirm!.toString().toLowerCase() !== 'y') {
        this.log.error('Confirmation not acquired. Terminating command');
        return;
      }
      this.log.success('Confirmation acquired');
    }

    await this.deploy();
  }

  private async deploySecrets(output: DeployOutput<string>) {
    const allSecrets = getConsolidatedSecrets(this.serverless);
    const client = getActionClient(this.teamKey!);
    const retrieveExisting = () => client.listSecrets().then((r) => r.secretNames ?? []);
    await this.wrapper<YSecret, string>(
      this.serverless,
      'Secrets',
      allSecrets,
      retrieveExisting,
      // on update
      async (secret: YSecret, match: string) => {
        await client.createSecrets({
          deletes: [],
          secrets: secret as any,
        });
        return {
          name: `Secret`,
          id: `${match}`,
          success: true,
          response: secret,
        };
      },
      // on create
      async (secret: YSecret, _: string) => {
        await client.createSecrets({
          deletes: [],
          secrets: secret as any,
        });
        return {
          name: `Secret`,
          id: `${Object.keys(secret)[0]}`,
          success: true,
          response: secret,
        };
      },
      // on remove
      async (secrets: string[]) => {
        await client.createSecrets({
          deletes: secrets,
          secrets: {},
        });
      },
      // overrideMatchDefinition
      (a: string, b: YSecret) => !!b[a],
      output,
      this.ssotDifference?.secrets,
    );
  }

  private async deployContracts(output: DeployOutput<PlatformContract>) {
    const contracts: YContract[] = this.serverless.service.resources?.Resources?.contracts ?? [];
    const client = getProposalClient(this.teamKey!);
    const retrieveExisting = () => client.listContracts();

    await this.wrapper<YContract, PlatformContract>(
      this.serverless,
      'Contracts',
      contracts,
      retrieveExisting,
      // on update
      async (contract: YContract, match: PlatformContract) => {
        const mappedMatch = {
          'name': match.name,
          'network': match.network,
          'address': match.address,
          'abi': match.abi && JSON.stringify(JSON.parse(match.abi)),
          'nat-spec': match.natSpec ? match.natSpec : undefined,
        };

        // in reality this will never be called as long as platform-sdk does not return ABI as part of the list response
        if (_.isEqual(validateTypesAndSanitise(contract), validateTypesAndSanitise(mappedMatch))) {
          return {
            name: match.name,
            id: `${match.network}-${match.address}`,
            success: false,
            response: match,
            notice: `Skipped import - contract ${match.address} already exists on ${match.network}`,
          };
        }

        this.log.notice(
          `Contracts will always update regardless of changes due to certain limitations in Platform SDK.`,
        );

        const updatedContract = await client.addContract({
          name: contract.name,
          network: match.network,
          address: match.address,
          abi: formatABI(contract.abi),
          natSpec: contract['nat-spec'] ? contract['nat-spec'] : undefined,
        });

        return {
          name: updatedContract.name,
          id: `${match.network}-${match.address}`,
          success: true,
          response: updatedContract,
        };
      },
      // on create
      async (contract: YContract, _: string) => {
        const importedContract = await client.addContract({
          name: contract.name,
          network: contract.network,
          address: contract.address,
          abi: formatABI(contract.abi),
          natSpec: contract['nat-spec'] ? contract['nat-spec'] : undefined,
        });
        return {
          name: importedContract.name,
          id: `${importedContract.network}-${importedContract.address}`,
          success: true,
          response: importedContract,
        };
      },
      // on remove
      async (contracts: PlatformContract[]) => {
        await Promise.all(contracts.map(async (c) => await client.deleteContract(`${c.network}-${c.address}`)));
      },
      // overrideMatchDefinition
      (a: PlatformContract, b: YContract) => {
        return a.address === b.address && a.network === b.network;
      },
      output,
      this.ssotDifference?.contracts,
    );
  }

  private async deployRelayers(
    output: DeployOutput<PlatformRelayer> & {
      relayerKeys: DeployOutput<PlatformRelayerApiKey>;
    },
  ) {
    const relayers: YRelayer[] = this.serverless.service.resources?.Resources?.relayers ?? [];
    const client = getRelayClient(this.teamKey!);
    const retrieveExisting = () => client.list().then((r) => r.items);
    await this.wrapper<YRelayer, PlatformRelayer>(
      this.serverless,
      'Relayers',
      relayers,
      retrieveExisting,
      // on update
      async (relayer: YRelayer, match: PlatformRelayer) => {
        // Warn users when they try to change the relayer network
        if (match.network !== relayer.network) {
          this.log.warn(
            `Detected a network change from ${match.network} to ${relayer.network} for Relayer: ${match.stackResourceId}. Platform does not currently allow updates to the network once a Relayer is created. This change will be ignored. To enforce this change, remove this relayer and create a new one. Alternatively, you can change the unique identifier (stack resource ID), to force a new creation of the relayer. Note that this change might cause errors further in the deployment process for resources that have any dependencies to this relayer.`,
          );
          relayer.network = match.network!;
        }

        const mappedMatch = {
          'name': match.name,
          'network': match.network,
          'min-balance': parseInt(match.minBalance.toString()),
          'policy': {
            'gas-price-cap': match.policies.gasPriceCap,
            'whitelist-receivers': match.policies.whitelistReceivers,
            'eip1559-pricing': match.policies.EIP1559Pricing,
            'private-transactions': match.policies.privateTransactions,
          },
          // currently not supported by platform-sdk-client
          // paused: match.paused
        };
        let updatedRelayer = undefined;
        if (
          !_.isEqual(
            validateTypesAndSanitise(_.omit(relayer, ['api-keys', 'address-from-relayer'])),
            validateTypesAndSanitise(mappedMatch),
          )
        ) {
          updatedRelayer = await client.update({
            relayerId: match.relayerId,
            relayerUpdateParams: {
              name: relayer.name,
              minBalance: relayer['min-balance'],
              policies: relayer.policy && {
                whitelistReceivers: relayer.policy['whitelist-receivers'],
                gasPriceCap: relayer.policy['gas-price-cap'],
                EIP1559Pricing: relayer.policy['eip1559-pricing'],
                privateTransactions: relayer.policy['private-transactions'],
              },
            },
          });
        }

        // check existing keys and remove / create accordingly
        const existingRelayerKeys = await client.listKeys({ relayerId: match.relayerId });
        const configuredKeys = relayer['api-keys'];
        const inPlatform = _.differenceWith(
          existingRelayerKeys,
          configuredKeys,
          (a: PlatformRelayerApiKey, b: string) => a.stackResourceId === getResourceID(match.stackResourceId!, b),
        );

        // delete key in Platform thats not defined in template
        if (isSSOT(this.serverless) && inPlatform.length > 0) {
          this.log.info(`Unused resources found on Platform:`);
          this.log.info(JSON.stringify(inPlatform, null, 2));
          this.log.progress('component-deploy-extra', `Removing resources from Platform`);
          await Promise.all(
            inPlatform.map(async (key) => await client.deleteKey({ relayerId: match.relayerId, keyId: key.keyId })),
          );
          this.log.success(`Removed resources from Platform`);
          output.relayerKeys.removed.push(...inPlatform);
        }

        const inTemplate = _.differenceWith(
          configuredKeys,
          existingRelayerKeys,
          (a: string, b: PlatformRelayerApiKey) => getResourceID(match.stackResourceId!, a) === b.stackResourceId,
        );

        // create key in Platform thats defined in template
        if (inTemplate) {
          await Promise.all(
            inTemplate.map(async (key) => {
              const keyStackResource = getResourceID(match.stackResourceId!, key);
              const createdKey = await client.createKey({
                relayerId: match.relayerId,
                stackResourceId: keyStackResource,
              });
              this.log.success(`Created API Key (${keyStackResource}) for Relayer (${match.relayerId})`);
              const keyPath = `${process.cwd()}/.platform/relayer-keys/${keyStackResource}.json`;
              await this.serverless.utils.writeFile(keyPath, JSON.stringify({ ...createdKey }, null, 2));
              this.log.info(`API Key details stored in ${keyPath}`, 1);
              output.relayerKeys.created.push(createdKey);
            }),
          );
        }

        return {
          name: match.stackResourceId!,
          id: match.relayerId,
          success: !!updatedRelayer,
          response: updatedRelayer ?? match,
          notice: !updatedRelayer ? `Skipped ${match.stackResourceId} - no changes detected` : undefined,
        };
      },
      // on create
      async (relayer: YRelayer, stackResourceId: string) => {
        const relayers: YRelayer[] = this.serverless.service.resources?.Resources?.relayers ?? [];
        const existingRelayers = (await getRelayClient(this.teamKey!).list()).items;
        const maybeRelayer = getEquivalentResource<YRelayer | undefined, PlatformRelayer>(
          this.serverless,
          relayer['address-from-relayer'],
          relayers,
          existingRelayers,
        );

        const createdRelayer = await client.create({
          relayer: {
            name: relayer.name,
            network: relayer.network,
            minBalance: relayer['min-balance'],
            useAddressFromRelayerId: maybeRelayer?.relayerId,
            policies: relayer.policy && {
              whitelistReceivers: relayer.policy['whitelist-receivers'],
              gasPriceCap: relayer.policy['gas-price-cap'],
              EIP1559Pricing: relayer.policy['eip1559-pricing'],
              privateTransactions: relayer.policy['private-transactions'],
            },
            stackResourceId,
          },
        });

        const relayerKeys = relayer['api-keys'];
        if (relayerKeys) {
          await Promise.all(
            relayerKeys.map(async (key) => {
              const keyStackResource = getResourceID(stackResourceId, key);
              const createdKey = await client.createKey({
                relayerId: createdRelayer.relayerId,
                stackResourceId: keyStackResource,
              });
              this.log.success(`Created API Key (${keyStackResource}) for Relayer (${createdRelayer.relayerId})`);
              const keyPath = `${process.cwd()}/.platform/relayer-keys/${keyStackResource}.json`;
              await this.serverless.utils.writeFile(keyPath, JSON.stringify({ ...createdKey }, null, 2));
              this.log.info(`API Key details stored in ${keyPath}`, 1);
              output.relayerKeys.created.push(createdKey);
            }),
          );
        }

        return {
          name: stackResourceId,
          id: createdRelayer.relayerId,
          success: true,
          response: createdRelayer,
        };
      },
      // on remove requires manual interaction
      undefined,
      undefined,
      output,
    );
  }

  private async deployNotifications(output: DeployOutput<PlatformNotification>) {
    const notifications: YNotification[] = this.serverless.service.resources?.Resources?.notifications ?? [];
    const client = getMonitorClient(this.teamKey!);
    const retrieveExisting = () => client.listNotificationChannels();

    await this.wrapper<YNotification, PlatformNotification>(
      this.serverless,
      'Notifications',
      notifications,
      retrieveExisting,
      // on update
      async (notification: YNotification, match: PlatformNotification) => {
        const mappedMatch = {
          type: match.type,
          name: match.name,
          config: match.config,
          paused: match.paused,
        };
        if (_.isEqual(validateTypesAndSanitise(notification), validateTypesAndSanitise(mappedMatch))) {
          return {
            name: match.stackResourceId!,
            id: match.notificationId,
            success: false,
            response: match,
            notice: `Skipped ${match.stackResourceId} - no changes detected`,
          };
        }

        const updatedNotification = await client.updateNotificationChannel({
          ...constructNotification(notification, match.stackResourceId!),
          notificationId: match.notificationId,
        });
        return {
          name: updatedNotification.stackResourceId!,
          id: updatedNotification.notificationId,
          success: true,
          response: updatedNotification,
        };
      },
      // on create
      async (notification: YNotification, stackResourceId: string) => {
        const createdNotification = await client.createNotificationChannel(
          constructNotification(notification, stackResourceId),
        );
        return {
          name: stackResourceId,
          id: createdNotification.notificationId,
          success: true,
          response: createdNotification,
        };
      },
      // on remove
      async (notifications: PlatformNotification[]) => {
        await Promise.all(notifications.map(async (n) => await client.deleteNotificationChannel(n)));
      },
      undefined,
      output,
      this.ssotDifference?.notifications,
    );
  }

  private async deployCategories(output: DeployOutput<PlatformCategory>) {
    const categories: YCategory[] = this.serverless.service.resources?.Resources?.categories ?? [];
    const client = getMonitorClient(this.teamKey!);
    const notifications = await client.listNotificationChannels();
    const retrieveExisting = () => client.listNotificationCategories();

    await this.wrapper<YCategory, PlatformCategory>(
      this.serverless,
      'Categories',
      categories,
      retrieveExisting,
      // on update
      async (category: YCategory, match: PlatformCategory) => {
        const newCategory = constructNotificationCategory(
          this.serverless,
          category,
          match.stackResourceId!,
          notifications,
        );
        const mappedMatch = {
          name: match.name,
          description: match.description,
          notificationIds: match.notificationIds,
          stackResourceId: match.stackResourceId,
        };
        if (_.isEqual(validateTypesAndSanitise(newCategory), validateTypesAndSanitise(mappedMatch))) {
          return {
            name: match.stackResourceId!,
            id: match.categoryId,
            success: false,
            response: match,
            notice: `Skipped ${match.stackResourceId} - no changes detected`,
          };
        }

        const updatedCategory = await client.updateNotificationCategory({
          ...newCategory,
          categoryId: match.categoryId,
        });
        return {
          name: updatedCategory.stackResourceId!,
          id: updatedCategory.categoryId,
          success: true,
          response: updatedCategory,
        };
      },
      // on create
      async (category: YCategory, stackResourceId: string) => {
        return {
          name: stackResourceId,
          id: '',
          success: false,
          notice: 'Creating custom notification categories is not yet supported',
        };
        // const createdCategory = await client.createNotificationCategory(
        //   constructNotificationCategory(this.serverless, category, stackResourceId, notifications),
        // );
        // return {
        //   name: stackResourceId,
        //   id: createdCategory.categoryId,
        //   success: true,
        //   response: createdCategory,
        // };
      },
      // on remove
      async (categories: PlatformCategory[]) => {
        this.log.warn(`Deleting notification categories is not yet supported.`);
        // await Promise.all(categories.map(async (n) => await client.deleteNotificationCategory(n.categoryId)));
      },
      // overrideMatchDefinition
      // TODO: remove this when we allow creating new categories
      (a: PlatformCategory, b: YCategory) => {
        return a.name === b.name;
      },
      output,
      this.ssotDifference?.categories,
    );
  }

  private async deployMonitors(output: DeployOutput<PlatformMonitor>) {
    try {
      const monitors: YMonitor[] = this.serverless.service.resources?.Resources?.monitors ?? [];
      const client = getMonitorClient(this.teamKey!);
      const actions = await getActionClient(this.teamKey!).list();
      const notifications = await client.listNotificationChannels();
      const categories = await client.listNotificationCategories();
      const retrieveExisting = () => client.list().then((r) => r.items);

      await this.wrapper<YMonitor, PlatformMonitor>(
        this.serverless,
        'Monitors',
        monitors,
        retrieveExisting,
        // on update
        async (monitor: YMonitor, match: PlatformMonitor) => {
          const isForta = (o: PlatformMonitor): o is PlatformFortaMonitorResponse => o.type === 'FORTA';
          const isBlock = (o: PlatformMonitor): o is PlatformBlockMonitorResponse => o.type === 'BLOCK';

          // Warn users when they try to change the monitor network
          if (match.network !== monitor.network) {
            this.log.warn(
              `Detected a network change from ${match.network} to ${monitor.network} for Monitor: ${match.stackResourceId}. Platform does not currently allow updates to the network once a Monitor is created. This change will be ignored. To enforce this change, remove this monitor and create a new one. Alternatively, you can change the unique identifier (stack resource ID), to force a new creation of the monitor. Note that this change might cause errors further in the deployment process for resources that have any dependencies to this monitor.`,
            );
            monitor.network = match.network!;
          }

          // Warn users when they try to change the monitor type
          if (monitor.type !== match.type) {
            this.log.warn(
              `Detected a type change from ${match.type} to ${monitor.type} for Monitor: ${match.stackResourceId}. Platform does not currently allow updates to the type once a Monitor is created. This change will be ignored. To enforce this change, remove this monitor and create a new one. Alternatively, you can change the unique identifier (stack resource ID), to force a new creation of the monitor. Note that this change might cause errors further in the deployment process for resources that have any dependencies to this monitor.`,
            );
            monitor.type = match.type;
          }

          const blockwatchersForNetwork = (await client.listBlockwatchers()).filter(
            (b) => b.network === monitor.network,
          );

          const newMonitor = constructMonitor(
            this.serverless,
            match.stackResourceId!,
            monitor,
            notifications,
            actions.items,
            blockwatchersForNetwork,
            categories,
          );

          // Map match "response" object to that of a "create" object
          const addressRule =
            (isBlock(match) && match.addressRules.length > 0 && _.first(match.addressRules)) || undefined;
          const blockConditions =
            (addressRule && addressRule.conditions.length > 0 && addressRule.conditions) || undefined;
          const confirmLevel =
            (isBlock(match) && match.blockWatcherId.split('-').length > 0 && _.last(match.blockWatcherId.split('-'))) ||
            undefined;

          const mappedMatch = {
            name: match.name,
            abi: addressRule && addressRule.abi,
            paused: match.paused,
            alertThreshold: match.alertThreshold,
            autotaskTrigger: match.notifyConfig?.autotaskId,
            alertTimeoutMs: match.notifyConfig?.timeoutMs,
            alertMessageBody: match.notifyConfig?.messageBody,
            alertMessageSubject: match.notifyConfig?.messageSubject,
            notificationChannels: match.notifyConfig?.notifications.map(
              (n: PlatformNotificationReference) => n.notificationId,
            ),
            notificationCategoryId: _.isEmpty(match.notifyConfig?.notifications)
              ? match.notifyConfig?.notificationCategoryId
              : undefined,
            type: match.type,
            stackResourceId: match.stackResourceId,
            network: match.network,
            confirmLevel: (confirmLevel && parseInt(confirmLevel)) || confirmLevel,
            eventConditions: blockConditions && blockConditions.flatMap((c: any) => c.eventConditions),
            functionConditions: blockConditions && blockConditions.flatMap((c: any) => c.functionConditions),
            txCondition:
              blockConditions &&
              blockConditions[0]!.txConditions.length > 0 &&
              blockConditions[0]!.txConditions[0]!.expression,
            privateFortaNodeId: (isForta(match) && match.privateFortaNodeId) || undefined,
            addresses: isBlock(match) ? addressRule && addressRule.addresses : match.fortaRule?.addresses,
            autotaskCondition: isBlock(match)
              ? addressRule && addressRule.autotaskCondition?.autotaskId
              : match.fortaRule?.autotaskCondition?.autotaskId,
            fortaLastProcessedTime: (isForta(match) && match.fortaLastProcessedTime) || undefined,
            agentIDs: (isForta(match) && match.fortaRule?.agentIDs) || undefined,
            fortaConditions: (isForta(match) && match.fortaRule.conditions) || undefined,
            riskCategory: match.riskCategory,
          };

          if (_.isEqual(validateTypesAndSanitise(newMonitor), validateTypesAndSanitise(mappedMatch))) {
            return {
              name: match.stackResourceId!,
              id: match.subscriberId,
              success: false,
              response: match,
              notice: `Skipped ${match.stackResourceId} - no changes detected`,
            };
          }

          const updatedMonitor = await client.update({
            monitorId: match.subscriberId,
            // Do not allow to update network of (existing) monitors
            ..._.omit(newMonitor, ['network']),
          });

          return {
            name: updatedMonitor.stackResourceId!,
            id: updatedMonitor.subscriberId,
            success: true,
            response: updatedMonitor,
          };
        },
        // on create
        async (monitor: YMonitor, stackResourceId: string) => {
          const blockwatchersForNetwork = (await client.listBlockwatchers()).filter(
            (b) => b.network === monitor.network,
          );
          const createdMonitor = await client.create(
            constructMonitor(
              this.serverless,
              stackResourceId,
              monitor,
              notifications,
              actions.items,
              blockwatchersForNetwork,
              categories,
            ),
          );
          return {
            name: stackResourceId,
            id: createdMonitor.subscriberId,
            success: true,
            response: createdMonitor,
          };
        },
        // on remove
        async (monitors: PlatformMonitor[]) => {
          await Promise.all(monitors.map(async (s) => await client.delete({ monitorId: s.subscriberId })));
        },
        undefined,
        output,
        this.ssotDifference?.monitors,
      );
    } catch (e) {
      this.log.tryLogPlatformError(e);
    }
  }

  private async deployActions(output: DeployOutput<PlatformAction>) {
    const actions: YAction[] = this.serverless.service.functions as any;
    const client = getActionClient(this.teamKey!);
    const retrieveExisting = () => client.list().then((r) => r.items);

    await this.wrapper<YAction, PlatformAction>(
      this.serverless,
      'Actions',
      actions,
      retrieveExisting,
      // on update
      async (action: YAction, match: PlatformAction) => {
        const relayers: YRelayer[] = this.serverless.service.resources?.Resources?.relayers ?? [];
        const existingRelayers = (await getRelayClient(this.teamKey!).list()).items;
        const maybeRelayer = getEquivalentResource<YRelayer | undefined, PlatformRelayer>(
          this.serverless,
          action.relayer,
          relayers,
          existingRelayers,
        );
        // Get new code digest
        const code = await client.getEncodedZippedCodeFromFolder({
          path: action.path,
        });
        const newDigest = client.getCodeDigest({
          encodedZippedCode: code,
        });
        const { codeDigest } = await client.get({
          actionId: match.actionkId,
        });

        const isSchedule = (
          o: PlatformWebhookTrigger | PlatformScheduleTrigger | PlatformMonitorTrigger | PlatformMonitorFilterTrigger,
        ): o is PlatformScheduleTrigger => o.type === 'schedule';

        const mappedMatch = {
          name: match.name,
          trigger: {
            type: match.trigger.type,
            frequency: (isSchedule(match.trigger) && match.trigger.frequencyMinutes) || undefined,
            cron: (isSchedule(match.trigger) && match.trigger.cron) || undefined,
          },
          paused: match.paused,
          relayerId: match.relayerId,
          codeDigest: match.codeDigest,
        };

        if (
          _.isEqual(
            validateTypesAndSanitise({
              ..._.omit(action, ['events', 'package', 'relayer', 'path']),
              relayerId: maybeRelayer?.relayerId,
              codeDigest: newDigest,
            }),
            validateTypesAndSanitise(mappedMatch),
          )
        ) {
          return {
            name: match.stackResourceId!,
            id: match.actionkId,
            success: false,
            response: match,
            notice: `Skipped ${match.stackResourceId} - no changes detected`,
          };
        }

        const updatesAction = await client.update({
          actionId: match.actionkId,
          name: action.name,
          paused: action.paused,
          trigger: {
            type: action.trigger.type,
            frequencyMinutes: action.trigger.frequency ?? undefined,
            cron: action.trigger.cron ?? undefined,
          },
          relayerId: maybeRelayer?.relayerId,
        });

        if (newDigest === codeDigest) {
          return {
            name: match.stackResourceId!,
            id: match.actionkId,
            success: true,
            notice: `Skipped code upload - no changes detected for ${match.stackResourceId}`,
            response: updatesAction,
          };
        } else {
          await client.updateCodeFromFolder({
            actionId: match.actionkId,
            path: action.path,
          });
          return {
            name: match.stackResourceId!,
            id: match.actionkId,
            success: true,
            response: updatesAction,
          };
        }
      },
      // on create
      async (action: YAction, stackResourceId: string) => {
        const actionRelayer = action.relayer;
        const relayers: YRelayer[] = this.serverless.service.resources?.Resources?.relayers ?? [];
        const existingRelayers = (await getRelayClient(this.teamKey!).list()).items;
        const maybeRelayer = getEquivalentResource<YRelayer | undefined, PlatformRelayer>(
          this.serverless,
          actionRelayer,
          relayers,
          existingRelayers,
        );

        const createdAction = await client.create({
          name: action.name,
          trigger: {
            type: action.trigger.type,
            frequencyMinutes: action.trigger.frequency ?? undefined,
            cron: action.trigger.cron ?? undefined,
          },
          encodedZippedCode: await client.getEncodedZippedCodeFromFolder({
            path: action.path,
          }),
          paused: action.paused,
          relayerId: maybeRelayer?.relayerId,
          stackResourceId: stackResourceId,
        });
        return {
          name: stackResourceId,
          id: createdAction.actionkId,
          success: true,
          response: createdAction,
        };
      },
      // on remove
      async (actions: PlatformAction[]) => {
        await Promise.all(actions.map(async (a) => await client.delete({ actionId: a.actionkId })));
      },
      undefined,
      output,
      this.ssotDifference?.actions,
    );
  }

  private async deployDeploymentConfig(output: DeployOutput<PlatformDeploymentConfig>) {
    const deploymentConfigs: YDeploymentConfig[] =
      this.serverless.service.resources?.Resources?.['deployment-configs'] ?? [];
    const client = getDeployClient(this.teamKey!);
    const retrieveExisting = () => client.listConfig();

    await this.wrapper<YDeploymentConfig, PlatformDeploymentConfig>(
      this.serverless,
      'Deployment Configs',
      deploymentConfigs,
      retrieveExisting,
      // on update
      async (deploymentConfig: YDeploymentConfig, match: PlatformDeploymentConfig) => {
        const deploymentConfigRelayer = deploymentConfig.relayer;
        const relayers: YRelayer[] = this.serverless.service.resources?.Resources?.relayers ?? [];

        const existingRelayers = (await getRelayClient(this.teamKey!).list()).items;
        const maybeRelayer = getEquivalentResource<YRelayer | undefined, PlatformRelayer>(
          this.serverless,
          deploymentConfigRelayer,
          relayers,
          existingRelayers,
        );

        if (!maybeRelayer)
          throw new Error(`Cannot find relayer ${deploymentConfigRelayer} in ${match.stackResourceId!}`);

        if (_.isEqual(maybeRelayer.relayerId, match.relayerId)) {
          return {
            name: match.stackResourceId!,
            id: match.deploymentConfigId,
            success: false,
            response: match,
            notice: `Skipped ${match.stackResourceId} - no changes detected`,
          };
        }

        const updatedDeploymentConfig = await client.updateConfig(match.deploymentConfigId, {
          relayerId: maybeRelayer.relayerId,
          stackResourceId: match.stackResourceId!,
        });
        return {
          name: updatedDeploymentConfig.stackResourceId!,
          id: updatedDeploymentConfig.deploymentConfigId,
          success: true,
          response: updatedDeploymentConfig,
        };
      },
      // on create
      async (deploymentConfig: YDeploymentConfig, stackResourceId: string) => {
        const deploymentConfigRelayer = deploymentConfig.relayer;
        const relayers: YRelayer[] = this.serverless.service.resources?.Resources?.relayers ?? [];
        const existingRelayers = (await getRelayClient(this.teamKey!).list()).items;

        const maybeRelayer = getEquivalentResource<YRelayer | undefined, PlatformRelayer>(
          this.serverless,
          deploymentConfigRelayer,
          relayers,
          existingRelayers,
        );

        if (!maybeRelayer) throw new Error(`Cannot find relayer ${deploymentConfigRelayer} in ${stackResourceId}`);

        const importedDeployment = await client.createConfig({
          relayerId: maybeRelayer.relayerId,
          stackResourceId,
        });

        return {
          name: stackResourceId,
          id: importedDeployment.deploymentConfigId,
          success: true,
          response: importedDeployment,
        };
      },
      // on remove
      async (deploymentConfigs: PlatformDeploymentConfig[]) => {
        await Promise.all(deploymentConfigs.map(async (c) => await client.removeConfig(c.deploymentConfigId)));
      },
      undefined,
      output,
      this.ssotDifference?.deploymentConfigs,
    );
  }

  private async deployBlockExplorerApiKey(output: DeployOutput<PlatformBlockExplorerApiKey>) {
    const blockExplorerApiKeys: YBlockExplorerApiKey[] =
      this.serverless.service.resources?.Resources?.['block-explorer-api-keys'] ?? [];
    const client = getDeployClient(this.teamKey!);
    const retrieveExisting = () => client.listBlockExplorerApiKeys();

    await this.wrapper<YBlockExplorerApiKey, PlatformBlockExplorerApiKey>(
      this.serverless,
      'Block Explorer Api Keys',
      blockExplorerApiKeys,
      retrieveExisting,
      // on update
      async (blockExplorerApiKey: YBlockExplorerApiKey, match: PlatformBlockExplorerApiKey) => {
        if (_.isEqual(keccak256(blockExplorerApiKey.key).toString('hex'), match.keyHash)) {
          return {
            name: match.stackResourceId!,
            id: match.blockExplorerApiKeyId,
            success: false,
            response: match,
            notice: `Skipped ${match.stackResourceId} - no changes detected`,
          };
        }

        const updatedBlockExplorerApiKey = await client.updateBlockExplorerApiKey(match.blockExplorerApiKeyId, {
          ...blockExplorerApiKey,
          stackResourceId: match.stackResourceId!,
        });
        return {
          name: updatedBlockExplorerApiKey.stackResourceId!,
          id: updatedBlockExplorerApiKey.blockExplorerApiKeyId,
          success: true,
          response: updatedBlockExplorerApiKey,
        };
      },
      // on create
      async (blockExplorerApiKey: YBlockExplorerApiKey, stackResourceId: string) => {
        const importedBlockExplorerApiKey = await client.createBlockExplorerApiKey({
          ...blockExplorerApiKey,
          stackResourceId,
        });
        return {
          name: stackResourceId,
          id: importedBlockExplorerApiKey.blockExplorerApiKeyId,
          success: true,
          response: importedBlockExplorerApiKey,
        };
      },
      // on remove
      async (blockExplorerApiKeys: PlatformBlockExplorerApiKey[]) => {
        await Promise.all(
          blockExplorerApiKeys.map(async (c) => await client.removeBlockExplorerApiKey(c.blockExplorerApiKeyId)),
        );
      },
      undefined,
      output,
      this.ssotDifference?.blockExplorerApiKeys,
    );
  }

  private async wrapper<Y, D>(
    context: Serverless,
    resourceType: ResourceType,
    resources: Y[] | undefined,
    retrieveExistingResources: () => Promise<D[]>,
    onUpdate: (resource: Y, match: D) => Promise<DeployResponse>,
    onCreate: (resource: Y, stackResourceId: string) => Promise<DeployResponse>,
    onRemove?: (resources: D[]) => Promise<void>,
    overrideMatchDefinition?: (a: D, b: Y) => boolean,
    output: DeployOutput<any> = { removed: [], created: [], updated: [] },
    ssotDifference: D[] = [],
  ) {
    try {
      const stackName = getStackName(context);
      this.log.notice(`${resourceType}`);
      this.log.progress('component-deploy', `Validating permissions for ${resourceType}`);
      await validateAdditionalPermissionsOrThrow<Y>(context, resources, resourceType);
      this.log.progress('component-deploy', `Initialising deployment of ${resourceType}`);

      // only remove if template is considered single source of truth
      if (isSSOT(context) && onRemove) {
        if (ssotDifference.length > 0) {
          this.log.info(`Unused resources found on Platform:`);
          this.log.info(JSON.stringify(ssotDifference, null, 2));
          this.log.progress('component-deploy-extra', `Removing resources from Platform`);
          await onRemove(ssotDifference);
          this.log.success(`Removed resources from Platform`);
          output.removed.push(...ssotDifference);
        }
      }

      for (const [id, resource] of Object.entries(resources ?? [])) {
        // always refresh list after each addition as some resources rely on the previous one
        const existing = await retrieveExistingResources();
        const entryStackResourceId = getResourceID(stackName, id);
        let match;
        if (overrideMatchDefinition) {
          match = existing.find((e: D) => overrideMatchDefinition(e, resource));
        } else {
          match = existing.find((e: any) => e.stackResourceId === entryStackResourceId);
        }

        if (match) {
          this.log.progress(
            'component-deploy-extra',
            `Updating ${
              resourceType === 'Contracts'
                ? (match as unknown as PlatformContract).name
                : resourceType === 'Secrets'
                ? match
                : (match as D & { stackResourceId: string }).stackResourceId
            }`,
          );
          try {
            const result = await onUpdate(resource, match);
            if (result.success) {
              this.log.success(`Updated ${result.name} (${result.id})`);
              output.updated.push(result.response);
            }
            // notice logs requires the --verbose flag
            if (result.notice) this.log.info(`${result.notice}`, 1);
            if (result.error) this.log.error(`${result.error}`);
          } catch (e) {
            this.log.tryLogPlatformError(e);
          }
        } else {
          this.log.progress(
            'component-deploy-extra',
            `Creating ${
              resourceType === 'Secrets' ? Object.keys(resource as unknown as YSecret)[0] : entryStackResourceId
            }`,
          );
          try {
            const result = await onCreate(resource, entryStackResourceId);
            if (result.success) {
              this.log.success(`Created ${result.name} (${result.id})`);
              output.created.push(result.response);
            }
            if (result.notice) this.log.info(`${result.notice}`, 1);
            if (result.error) this.log.error(`${result.error}`);
          } catch (e) {
            this.log.tryLogPlatformError(e);
          }
        }
      }
    } catch (e) {
      this.log.tryLogPlatformError(e);
    }
  }

  public async deploy() {
    this.log.notice('========================================================');
    const stackName = getStackName(this.serverless);
    this.log.progress('deploy', `Running Platform Deploy on stack: ${stackName}`);

    const monitors: DeployOutput<PlatformMonitor> = {
      removed: [],
      created: [],
      updated: [],
    };
    const actions: DeployOutput<PlatformAction> = {
      removed: [],
      created: [],
      updated: [],
    };
    const contracts: DeployOutput<PlatformContract> = {
      removed: [],
      created: [],
      updated: [],
    };
    const notifications: DeployOutput<PlatformNotification> = {
      removed: [],
      created: [],
      updated: [],
    };
    const categories: DeployOutput<PlatformCategory> = {
      removed: [],
      created: [],
      updated: [],
    };
    const secrets: DeployOutput<string> = {
      removed: [],
      created: [],
      updated: [],
    };
    const relayers: DeployOutput<PlatformRelayer> & {
      relayerKeys: DeployOutput<PlatformRelayerApiKey>;
    } = {
      removed: [],
      created: [],
      updated: [],
      relayerKeys: {
        removed: [],
        created: [],
        updated: [],
      },
    };

    const deploymentConfigs: DeployOutput<PlatformDeploymentConfig> = {
      removed: [],
      created: [],
      updated: [],
    };

    const blockExplorerApiKeys: DeployOutput<PlatformBlockExplorerApiKey> = {
      removed: [],
      created: [],
      updated: [],
    };

    const stdOut = {
      stack: stackName,
      timestamp: new Date().toISOString(),
      monitors,
      actions: actions,
      contracts,
      relayers,
      notifications,
      categories,
      secrets,
      deploymentConfigs,
      blockExplorerApiKeys,
    };
    await this.deploySecrets(stdOut.secrets);
    await this.deployContracts(stdOut.contracts);
    // Always deploy relayers before actions
    await this.deployRelayers(stdOut.relayers);
    await this.deployActions(stdOut.actions);
    // Deploy notifications before monitors and categories
    await this.deployNotifications(stdOut.notifications);
    await this.deployCategories(stdOut.categories);
    await this.deployMonitors(stdOut.monitors);

    await this.deployDeploymentConfig(stdOut.deploymentConfigs);
    await this.deployBlockExplorerApiKey(stdOut.blockExplorerApiKeys);

    this.log.notice('========================================================');

    if (!process.stdout.isTTY) this.log.stdOut(JSON.stringify(stdOut, null, 2));

    const keyDir = `${process.cwd()}/.platform`;
    if (!this.serverless.utils.dirExistsSync(keyDir)) {
      await this.serverless.utils.writeFile(
        `${keyDir}/deployment-log.${stackName}.json`,
        JSON.stringify(stdOut, null, 0) + '\r\n',
      );
    } else {
      await this.serverless.utils.appendFileSync(
        `${keyDir}/deployment-log.${stackName}.json`,
        JSON.stringify(stdOut, null, 0) + '\r\n',
      );
    }
  }
}
