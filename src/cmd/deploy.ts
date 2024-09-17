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
  validateAdditionalPermissionsOrThrow,
  getDeployClient,
  formatABI,
  constructMonitor,
  getNetworkClient,
  isDefenderId,
  removeDefenderIdReferences,
  isTenantNetwork,
  getRelayGroupClient,
} from '../utils';
import {
  DefenderAction,
  DefenderContract,
  DefenderNotification,
  DefenderRelayer,
  DefenderMonitor,
  DefenderRelayerApiKey,
  TeamKey,
  YSecret,
  DeployOutput,
  DeployResponse,
  ResourceType,
  ListDefenderResources,
  DefenderNotificationReference,
  DefenderWebhookTrigger,
  DefenderScheduleTrigger,
  DefenderMonitorTrigger,
  DefenderMonitorFilterTrigger,
  DefenderBlockExplorerApiKey,
  DefenderFortaMonitorResponse,
  DefenderBlockMonitorResponse,
  Resources,
  DefenderTenantNetwork,
  DefenderBlockWatcher,
  DefenderRelayerGroup,
} from '../types';
import keccak256 from 'keccak256';
import {
  Action,
  ActionOrDefenderID,
  Actions,
  BlockExplorerApiKey,
  BlockExplorerApiKeys,
  Contract,
  Contracts,
  DefenderID,
  ForkedNetworkRequest,
  ForkedNetworks,
  Monitor,
  Monitors,
  Notification,
  Notifications,
  PrivateNetworkRequest,
  PrivateNetworks,
  Relayer,
  RelayerGroup,
  RelayerGroups,
  RelayerOrDefenderID,
  Relayers,
  SupportedNetwork,
} from '../types/types/resources.schema';

export default class DefenderDeploy {
  serverless: Serverless;
  options: Serverless.Options;
  logging: Logging;
  log: Logger;
  hooks: any;
  teamKey?: TeamKey;
  ssotDifference?: ListDefenderResources;
  resources: Resources;

  constructor(serverless: Serverless, options: Serverless.Options, logging: Logging) {
    this.serverless = serverless;
    this.options = options;
    this.logging = logging;

    this.resources = this.serverless.service.resources as Resources;

    this.log = Logger.getInstance();

    this.hooks = {
      'before:deploy:deploy': () => this.validateKeys(),
      'deploy:deploy': this.requestConfirmation.bind(this),
    };
  }

  validateKeys() {
    this.teamKey = getTeamAPIkeysOrThrow(this.serverless);
  }

  private async getSSOTDifference(): Promise<ListDefenderResources> {
    const difference: ListDefenderResources = {
      monitors: [],
      actions: [],
      notifications: [],
      contracts: [],
      relayerApiKeys: [],
      relayerGroupApiKeys: [],
      secrets: [],
      blockExplorerApiKeys: [],
      forkedNetworks: [],
      privateNetworks: [],
    };
    // Contracts
    const contracts: Contracts = this.resources?.contracts ?? {};
    const adminClient = getProposalClient(this.teamKey!);
    const dContracts = await adminClient.listContracts();
    const contractDifference = _.differenceWith(
      dContracts,
      Object.entries(contracts),
      (a: DefenderContract, b: [string, Contract | DefenderID]) => {
        const contractId = `${a.network}-${a.address}`;
        if (isDefenderId(b[1])) {
          return contractId === b[1];
        }
        return contractId === `${b[1].network}-${b[1].address}`;
      },
    );

    // Forked Networks
    const forkedNetworks: ForkedNetworks = this.resources?.['forked-networks'] ?? {};
    const networkClient = getNetworkClient(this.teamKey!);
    const forkedNetworkItems = await networkClient.listForkedNetworks();
    const forkedNetworkDifference = _.differenceWith(
      forkedNetworkItems,
      Object.entries(forkedNetworks),
      (a: DefenderTenantNetwork, b: [string, ForkedNetworkRequest | DefenderID]) => {
        if (isDefenderId(b[1])) {
          return a.tenantNetworkId === b[1];
        }
        return a.stackResourceId === getResourceID(getStackName(this.serverless), b[0]);
      },
    );

    // Private Networks
    const privateNetworks: PrivateNetworks = this.resources?.['private-networks'] ?? {};
    const privateNetworkItems = await networkClient.listPrivateNetworks();
    const privateNetworkDifference = _.differenceWith(
      privateNetworkItems,
      Object.entries(privateNetworks),
      (a: DefenderTenantNetwork, b: [string, PrivateNetworkRequest | DefenderID]) => {
        if (isDefenderId(b[1])) {
          return a.tenantNetworkId === b[1];
        }
        return a.stackResourceId === getResourceID(getStackName(this.serverless), b[0]);
      },
    );

    // Monitors
    const monitors: Monitors = this.resources?.monitors ?? {};
    const monitorClient = getMonitorClient(this.teamKey!);
    const monitorItems = (await monitorClient.list()).items;
    const monitorDifference = _.differenceWith(
      monitorItems,
      Object.entries(monitors),
      (a: DefenderMonitor, b: [string, Monitor | DefenderID]) => {
        if (isDefenderId(b[1])) {
          return a.monitorId === b[1];
        }
        return a.stackResourceId === getResourceID(getStackName(this.serverless), b[0]);
      },
    );

    // Relayers
    const relayers: Relayers = this.resources?.relayers ?? {};
    const relayerClient = getRelayClient(this.teamKey!);
    const dRelayers = (await relayerClient.list()).items;

    // Relayers API keys
    await Promise.all(
      Object.entries(relayers).map(async ([id, relayer]: [string, Relayer | DefenderID]) => {
        if (isDefenderId(relayer)) return;
        const dRelayer = getEquivalentResourceByKey<DefenderRelayer>(
          getResourceID(getStackName(this.serverless), id),
          dRelayers,
        );
        if (dRelayer) {
          const dRelayerApiKeys = await relayerClient.listKeys(dRelayer.relayerId);
          const configuredKeys = relayer['api-keys'] ?? [];
          const relayerApiKeyDifference = _.differenceWith(
            dRelayerApiKeys,
            configuredKeys,
            (a: DefenderRelayerApiKey, b: string) => a.stackResourceId === getResourceID(dRelayer.stackResourceId!, b),
          );
          difference.relayerApiKeys.push(...relayerApiKeyDifference);
        }
      }),
    );

    // Relayer Groups
    const relayerGroups: RelayerGroups = this.resources?.['relayer-groups'] ?? {};
    const relayerGroupClient = getRelayGroupClient(this.teamKey!);
    const dRelayerGroups = await relayerGroupClient.list();

    // Relayer Group API keys
    await Promise.all(
      Object.entries(relayerGroups).map(async ([id, relayerGroup]: [string, RelayerGroup | DefenderID]) => {
        if (isDefenderId(relayerGroup)) return;
        const dRelayerGroup = getEquivalentResourceByKey<DefenderRelayerGroup>(
          getResourceID(getStackName(this.serverless), id),
          dRelayerGroups,
        );
        if (dRelayerGroup) {
          const dRelayerGroupApiKeys = await relayerGroupClient.listKeys(dRelayerGroup.relayerGroupId);
          const configuredKeys = relayerGroup['api-keys'] ?? [];
          const relayerGroupApiKeyDifference = _.differenceWith(
            dRelayerGroupApiKeys,
            configuredKeys,
            (a: DefenderRelayerApiKey, b: string) =>
              a.stackResourceId === getResourceID(dRelayerGroup.stackResourceId!, b),
          );
          difference.relayerGroupApiKeys.push(...relayerGroupApiKeyDifference);
        }
      }),
    );

    // Notifications
    const notifications: Notifications = this.resources?.notifications ?? {};
    const dNotifications = await monitorClient.listNotificationChannels();
    const notificationDifference = _.differenceWith(
      dNotifications,
      Object.entries(notifications),
      (a: DefenderNotification, b: [string, Notification | DefenderID]) => {
        if (isDefenderId(b[1])) {
          return a.notificationId === b[1];
        }
        return a.stackResourceId === getResourceID(getStackName(this.serverless), b[0]);
      },
    );

    // Actions
    const actions: Actions = this.resources.actions ?? {};
    const actionClient = getActionClient(this.teamKey!);
    const dActions = (await actionClient.list()).items;
    const actionDifference = _.differenceWith(
      dActions,
      Object.entries(actions),
      (a: DefenderAction, b: [string, ActionOrDefenderID]) => {
        if (isDefenderId(b[1])) {
          return a.actionId === b[1];
        }
        return a.stackResourceId === getResourceID(getStackName(this.serverless), b[0]);
      },
    );

    // Secrets
    const allSecrets = getConsolidatedSecrets(this.serverless, this.resources);
    const dSecrets = (await actionClient.listSecrets()).secretNames ?? [];
    const secretsDifference = _.differenceWith(
      dSecrets,
      Object.values(allSecrets).map((k, _) => Object.keys(k)[0] ?? ''),
      (a: string, b: string) => a === b,
    );

    // Block Explorer Api Keys
    const blockExplorerApiKeys: BlockExplorerApiKeys = this.resources?.['block-explorer-api-keys'] ?? {};
    const deployClient = getDeployClient(this.teamKey!);
    const dBlockExplorerApiKeys = await deployClient.listBlockExplorerApiKeys();
    const blockExplorerApiKeyDifference = _.differenceWith(
      dBlockExplorerApiKeys,
      Object.entries(blockExplorerApiKeys ?? []),
      (a: DefenderBlockExplorerApiKey, b: [string, BlockExplorerApiKey | DefenderID]) => {
        if (isDefenderId(b[1])) {
          return a.blockExplorerApiKeyId === b[1];
        }
        return a.stackResourceId === getResourceID(getStackName(this.serverless), b[0]);
      },
    );

    difference.forkedNetworks = forkedNetworkDifference;
    difference.privateNetworks = privateNetworkDifference;
    difference.contracts = contractDifference;
    difference.monitors = monitorDifference;
    difference.notifications = notificationDifference;
    difference.actions = actionDifference;
    difference.secrets = secretsDifference;
    difference.blockExplorerApiKeys = blockExplorerApiKeyDifference;

    return difference;
  }
  private async constructConfirmationMessage(withResources: ListDefenderResources): Promise<string> {
    const start = `You have SSOT enabled. This might remove resources from Defender permanently.\nHaving SSOT enabled will interpret the resources defined in the serverless.yml file as the Single Source Of Truth, and will remove any existing Defender resource which is not defined in the YAML file (with the exception of Relayers).\nIf you continue, the following resources will be removed from Defender:`;
    const end = `Are you sure you wish to continue [y/n]?`;

    const formattedResources = {
      actions:
        withResources.actions.length > 0
          ? withResources.actions.map((a) => `${a.stackResourceId ?? a.name} (${a.actionId})`)
          : undefined,
      monitors:
        withResources.monitors.length > 0
          ? withResources.monitors.map((a) => `${a.stackResourceId ?? a.name} (${a.monitorId})`)
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
      relayerGroupApiKeys:
        withResources.relayerGroupApiKeys.length > 0
          ? withResources.relayerGroupApiKeys.map((a) => `${a.stackResourceId ?? a.apiKey} (${a.keyId})`)
          : undefined,
      secrets: withResources.secrets.length > 0 ? withResources.secrets.map((a) => `${a}`) : undefined,
      forkedNetworks:
        withResources.forkedNetworks.length > 0
          ? withResources.forkedNetworks.map((a) => `${a.stackResourceId ?? a.name} (${a.tenantNetworkId})`)
          : undefined,
      privateNetworks:
        withResources.privateNetworks.length > 0
          ? withResources.privateNetworks.map((a) => `${a.stackResourceId ?? a.name} (${a.tenantNetworkId})`)
          : undefined,
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
    const allSecrets = getConsolidatedSecrets(this.serverless, this.resources);
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

  private async deployContracts(output: DeployOutput<DefenderContract>) {
    const contracts: Contracts = this.resources?.contracts ?? {};
    const client = getProposalClient(this.teamKey!);
    const retrieveExisting = () => client.listContracts();

    await this.wrapper<Contract, DefenderContract>(
      this.serverless,
      'Contracts',
      removeDefenderIdReferences(contracts),
      retrieveExisting,
      // on update
      async (contract: Contract, match: DefenderContract) => {
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
          `Contracts will always update regardless of changes due to certain limitations in Defender SDK.`,
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
      async (contract: Contract, _stackResourceId: string) => {
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
      async (contracts: DefenderContract[]) => {
        await Promise.all(contracts.map(async (c) => await client.deleteContract(`${c.network}-${c.address}`)));
      },
      // overrideMatchDefinition
      (a: DefenderContract, b: Contract) => {
        return a.address === b.address && a.network === b.network;
      },
      output,
      this.ssotDifference?.contracts,
    );
  }

  private async deployRelayers(
    output: DeployOutput<DefenderRelayer> & {
      relayerKeys: DeployOutput<DefenderRelayerApiKey>;
    },
  ) {
    const relayers: Relayers = this.resources?.relayers ?? {};
    const client = getRelayClient(this.teamKey!);
    const retrieveExisting = () => client.list().then((r) => r.items);
    await this.wrapper<Relayer, DefenderRelayer>(
      this.serverless,
      'Relayers',
      removeDefenderIdReferences(relayers),
      retrieveExisting,
      // on update
      async (relayer: Relayer, match: DefenderRelayer) => {
        // Warn users when they try to change the relayer network
        if (match.network !== relayer.network) {
          this.log.warn(
            `Detected a network change from ${match.network} to ${relayer.network} for Relayer: ${match.stackResourceId}. Defender does not currently allow updates to the network once a Relayer is created. This change will be ignored. To enforce this change, remove this relayer and create a new one. Alternatively, you can change the unique identifier (stack resource ID), to force a new creation of the relayer. Note that this change might cause errors further in the deployment process for resources that have any dependencies to this relayer.`,
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
          // currently not supported by defender-sdk
          // paused: match.paused
        };
        let updatedRelayer = undefined;
        if (
          !_.isEqual(
            validateTypesAndSanitise(_.omit(relayer, ['api-keys', 'address-from-relayer'])),
            validateTypesAndSanitise(mappedMatch),
          )
        ) {
          updatedRelayer = await client.update(match.relayerId, {
            name: relayer.name,
            minBalance: relayer['min-balance'],
            policies: relayer.policy && {
              whitelistReceivers: relayer.policy['whitelist-receivers'],
              gasPriceCap: relayer.policy['gas-price-cap'],
              EIP1559Pricing: relayer.policy['eip1559-pricing'],
              privateTransactions: relayer.policy['private-transactions'],
            },
          });
        }

        // check existing keys and remove / create accordingly
        const existingRelayerKeys = await client.listKeys(match.relayerId);
        const configuredKeys = relayer['api-keys'] ?? [];
        const inDefender = _.differenceWith(
          existingRelayerKeys,
          configuredKeys,
          (a: DefenderRelayerApiKey, b: string) => a.stackResourceId === getResourceID(match.stackResourceId!, b),
        );

        // delete key in Defender thats not defined in template
        if (isSSOT(this.serverless) && inDefender.length > 0) {
          this.log.info(`Unused resources found on Defender:`);
          this.log.info(JSON.stringify(inDefender, null, 2));
          this.log.progress('component-deploy-extra', `Removing resources from Defender`);
          await Promise.all(inDefender.map(async (key) => await client.deleteKey(match.relayerId, key.keyId)));
          this.log.success(`Removed resources from Defender`);
          output.relayerKeys.removed.push(...inDefender);
        }

        const inTemplate = _.differenceWith(
          configuredKeys,
          existingRelayerKeys,
          (a: string, b: DefenderRelayerApiKey) => getResourceID(match.stackResourceId!, a) === b.stackResourceId,
        );

        // create key in Defender thats defined in template
        if (inTemplate) {
          await Promise.all(
            inTemplate.map(async (key) => {
              const keyStackResource = getResourceID(match.stackResourceId!, key);
              const createdKey = await client.createKey(match.relayerId, {
                stackResourceId: keyStackResource,
              });
              this.log.success(`Created API Key (${keyStackResource}) for Relayer (${match.relayerId})`);
              const keyPath = `${process.cwd()}/.defender/relayer-keys/${keyStackResource}.json`;
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
      async (relayer: Relayer, stackResourceId: string) => {
        const relayers: Relayers = this.resources?.relayers ?? {};
        const existingRelayers = (await getRelayClient(this.teamKey!).list()).items;
        const maybeRelayer = getEquivalentResource<RelayerOrDefenderID | undefined, DefenderRelayer>(
          this.serverless,
          relayer['address-from-relayer'] as RelayerOrDefenderID | undefined, // typing address-from-relayer causes issues with schema generation due to circular dependancies so we cast it
          relayers,
          existingRelayers,
          'Relayers',
        );

        const createdRelayer = await client.create({
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
        });

        const relayerKeys = relayer['api-keys'];
        if (relayerKeys) {
          await Promise.all(
            relayerKeys.map(async (key) => {
              const keyStackResource = getResourceID(stackResourceId, key);
              const createdKey = await client.createKey(createdRelayer.relayerId, {
                stackResourceId: keyStackResource,
              });
              this.log.success(`Created API Key (${keyStackResource}) for Relayer (${createdRelayer.relayerId})`);
              const keyPath = `${process.cwd()}/.defender/relayer-keys/${keyStackResource}.json`;
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

  private async deployRelayerGroups(
    output: DeployOutput<DefenderRelayerGroup> & {
      relayerGroupKeys: DeployOutput<DefenderRelayerApiKey>;
    },
  ) {
    const relayerGroups: RelayerGroups = this.resources?.['relayer-groups'] ?? {};
    const client = getRelayGroupClient(this.teamKey!);
    const retrieveExisting = () => client.list();
    await this.wrapper<RelayerGroup, DefenderRelayerGroup>(
      this.serverless,
      'Relayer Groups',
      removeDefenderIdReferences(relayerGroups),
      retrieveExisting,
      // on update
      async (relayerGroup: RelayerGroup, match: DefenderRelayerGroup) => {
        // Warn users when they try to change the relayer group network
        if (match.network !== relayerGroup.network) {
          this.log.warn(
            `Detected a network change from ${match.network} to ${relayerGroup.network} for Relayer Group: ${match.stackResourceId}. Defender does not currently allow updates to the network once a Relayer Group is created. This change will be ignored. To enforce this change, remove this relayer group and create a new one. Alternatively, you can change the unique identifier (stack resource ID), to force a new creation of the relayer group. Note that this change might cause errors further in the deployment process for resources that have any dependencies to this relayer group.`,
          );
          relayerGroup.network = match.network!;
        }
        const mappedMatch = {
          'name': match.name,
          'network': match.network,
          'min-balance': parseInt(match.minBalance.toString()),
          'policies': {
            'gas-price-cap': match.policies.gasPriceCap,
            'whitelist-receivers': match.policies.whitelistReceivers,
            'eip1559-pricing': match.policies.EIP1559Pricing,
            'private-transactions': match.policies.privateTransactions,
          },
          'relayers': match.relayers,
          'notification-channels': match.notificationChannels && {
            'events': match.notificationChannels.events,
            'notification-ids': match.notificationChannels.notificationIds,
          },
        };
        let updatedRelayerGroup = undefined;
        if (
          !_.isEqual(
            validateTypesAndSanitise(_.omit(relayerGroup, ['api-keys'])),
            validateTypesAndSanitise(mappedMatch),
          )
        ) {
          updatedRelayerGroup = await client.update(match.relayerGroupId, {
            name: relayerGroup.name,
            minBalance: relayerGroup['min-balance'],
            policies: relayerGroup.policies && {
              whitelistReceivers: relayerGroup.policies['whitelist-receivers'],
              gasPriceCap: relayerGroup.policies['gas-price-cap'],
              EIP1559Pricing: relayerGroup.policies['eip1559-pricing'],
              privateTransactions: relayerGroup.policies['private-transactions'],
            },
            notificationChannels: relayerGroup['notification-channels'] && {
              events: relayerGroup['notification-channels'].events,
              notificationIds: relayerGroup['notification-channels']['notification-ids'],
            },
          });
        }

        // check existing keys and remove / create accordingly
        const existingRelayerGroupKeys = await client.listKeys(match.relayerGroupId);
        const configuredKeys = relayerGroup['api-keys'] ?? [];
        const inDefender = _.differenceWith(
          existingRelayerGroupKeys,
          configuredKeys,
          (a: DefenderRelayerApiKey, b: string) => a.stackResourceId === getResourceID(match.stackResourceId!, b),
        );

        // delete key in Defender thats not defined in template
        if (isSSOT(this.serverless) && inDefender.length > 0) {
          this.log.info(`Unused resources found on Defender:`);
          this.log.info(JSON.stringify(inDefender, null, 2));
          this.log.progress('component-deploy-extra', `Removing resources from Defender`);
          await Promise.all(inDefender.map(async (key) => await client.deleteKey(match.relayerGroupId, key.keyId)));
          this.log.success(`Removed resources from Defender`);
          output.relayerGroupKeys.removed.push(...inDefender);
        }

        const inTemplate = _.differenceWith(
          configuredKeys,
          existingRelayerGroupKeys,
          (a: string, b: DefenderRelayerApiKey) => getResourceID(match.stackResourceId!, a) === b.stackResourceId,
        );

        // create key in Defender thats defined in template
        if (inTemplate) {
          await Promise.all(
            inTemplate.map(async (key) => {
              const keyStackResource = getResourceID(match.stackResourceId!, key);
              const createdKey = await client.createKey(match.relayerGroupId, {
                stackResourceId: keyStackResource,
              });
              this.log.success(`Created API Key (${keyStackResource}) for Relayer Group (${match.relayerGroupId})`);
              const keyPath = `${process.cwd()}/.defender/relayer-group-keys/${keyStackResource}.json`;
              await this.serverless.utils.writeFile(keyPath, JSON.stringify({ ...createdKey }, null, 2));
              this.log.info(`API Key details stored in ${keyPath}`, 1);
              output.relayerGroupKeys.created.push(createdKey);
            }),
          );
        }

        return {
          name: match.stackResourceId!,
          id: match.relayerGroupId,
          success: !!updatedRelayerGroup,
          response: updatedRelayerGroup ?? match,
          notice: !updatedRelayerGroup ? `Skipped ${match.stackResourceId} - no changes detected` : undefined,
        };
      },
      // on create
      async (relayerGroup: RelayerGroup, stackResourceId: string) => {
        const createdRelayerGroup = await client.create({
          name: relayerGroup.name,
          network: relayerGroup.network,
          minBalance: relayerGroup['min-balance'],
          policies: relayerGroup.policies && {
            whitelistReceivers: relayerGroup.policies['whitelist-receivers'],
            gasPriceCap: relayerGroup.policies['gas-price-cap'],
            EIP1559Pricing: relayerGroup.policies['eip1559-pricing'],
            privateTransactions: relayerGroup.policies['private-transactions'],
          },
          relayers: relayerGroup.relayers?.length,
          stackResourceId,
        });

        const relayerGroupKeys = relayerGroup['api-keys'];
        if (relayerGroupKeys) {
          await Promise.all(
            relayerGroupKeys.map(async (key) => {
              const keyStackResource = getResourceID(stackResourceId, key);
              const createdKey = await client.createKey(createdRelayerGroup.relayerGroupId, {
                stackResourceId: keyStackResource,
              });
              this.log.success(
                `Created API Key (${keyStackResource}) for Relayer Group (${createdRelayerGroup.relayerGroupId})`,
              );
              const keyPath = `${process.cwd()}/.defender/relayer-group-keys/${keyStackResource}.json`;
              await this.serverless.utils.writeFile(keyPath, JSON.stringify({ ...createdKey }, null, 2));
              this.log.info(`API Key details stored in ${keyPath}`, 1);
              output.relayerGroupKeys.created.push(createdKey);
            }),
          );
        }

        return {
          name: stackResourceId,
          id: createdRelayerGroup.relayerGroupId,
          success: true,
          response: createdRelayerGroup,
        };
      },
      // on remove requires manual interaction
      undefined,
      undefined,
      output,
    );
  }

  private async deployNotifications(output: DeployOutput<DefenderNotification>) {
    const notifications: Notifications = this.resources?.notifications ?? {};
    const client = getMonitorClient(this.teamKey!);
    const retrieveExisting = () => client.listNotificationChannels();

    await this.wrapper<Notification, DefenderNotification>(
      this.serverless,
      'Notifications',
      removeDefenderIdReferences(notifications),
      retrieveExisting,
      // on update
      async (notification: Notification, match: DefenderNotification) => {
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

        const updatedNotification = await client.updateNotificationChannel(match.notificationId, {
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
      async (notification: Notification, stackResourceId: string) => {
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
      async (notifications: DefenderNotification[]) => {
        await Promise.all(
          notifications.map(async (n) => await client.deleteNotificationChannel(n.notificationId, n.type)),
        );
      },
      undefined,
      output,
      this.ssotDifference?.notifications,
    );
  }

  private async deployMonitors(output: DeployOutput<DefenderMonitor>) {
    try {
      const monitors: Monitors = this.resources?.monitors ?? {};
      const client = getMonitorClient(this.teamKey!);
      const actions = await getActionClient(this.teamKey!).list();
      const notifications = await client.listNotificationChannels();

      const contracts = await getProposalClient(this.teamKey!).listContracts({ includeAbi: true });

      const retrieveExisting = () => client.list().then((r) => r.items);

      await this.wrapper<Monitor, DefenderMonitor>(
        this.serverless,
        'Monitors',
        removeDefenderIdReferences(monitors),
        retrieveExisting,
        // on update
        async (monitor: Monitor, match: DefenderMonitor) => {
          const isForta = (o: DefenderMonitor): o is DefenderFortaMonitorResponse => o.type === 'FORTA';
          const isBlock = (o: DefenderMonitor): o is DefenderBlockMonitorResponse => o.type === 'BLOCK';

          // Warn users when they try to change the monitor network
          if (match.network !== monitor.network) {
            this.log.warn(
              `Detected a network change from ${match.network} to ${monitor.network} for Monitor: ${match.stackResourceId}. Defender does not currently allow updates to the network once a Monitor is created. This change will be ignored. To enforce this change, remove this monitor and create a new one. Alternatively, you can change the unique identifier (stack resource ID), to force a new creation of the monitor. Note that this change might cause errors further in the deployment process for resources that have any dependencies to this monitor.`,
            );
            monitor.network = match.network!;
          }

          // Warn users when they try to change the monitor type
          if (monitor.type !== match.type) {
            this.log.warn(
              `Detected a type change from ${match.type} to ${monitor.type} for Monitor: ${match.stackResourceId}. Defender does not currently allow updates to the type once a Monitor is created. This change will be ignored. To enforce this change, remove this monitor and create a new one. Alternatively, you can change the unique identifier (stack resource ID), to force a new creation of the monitor. Note that this change might cause errors further in the deployment process for resources that have any dependencies to this monitor.`,
            );
            monitor.type = match.type;
          }

          let blockwatchersForNetwork: DefenderBlockWatcher[] = [];

          // Check if network is forked network
          if (isTenantNetwork(monitor.network)) {
            blockwatchersForNetwork = (await client.listTenantBlockwatchers()).filter(
              (b) => b.network === monitor.network,
            );
          } else {
            blockwatchersForNetwork = (await client.listBlockwatchers()).filter((b) => b.network === monitor.network);
          }

          const newMonitor = constructMonitor(
            this.serverless,
            this.resources,
            match.stackResourceId!,
            monitor,
            notifications,
            actions.items,
            blockwatchersForNetwork,
            contracts,
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
            skipABIValidation: match.skipABIValidation,
            alertThreshold: match.alertThreshold,
            actionTrigger: match.notifyConfig?.actionId,
            alertTimeoutMs: match.notifyConfig?.timeoutMs,
            alertMessageBody: match.notifyConfig?.messageBody,
            alertMessageSubject: match.notifyConfig?.messageSubject,
            notificationChannels: match.notifyConfig?.notifications.map(
              (n: DefenderNotificationReference) => n.notificationId,
            ),
            severityLevel: match.notifyConfig?.severityLevel,
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
            actionCondition: isBlock(match)
              ? addressRule && addressRule.actionCondition?.actionId
              : match.fortaRule?.actionCondition?.actionId,
            fortaLastProcessedTime: (isForta(match) && match.fortaLastProcessedTime) || undefined,
            agentIDs: (isForta(match) && match.fortaRule?.agentIDs) || undefined,
            fortaConditions: (isForta(match) && match.fortaRule.conditions) || undefined,
            riskCategory: match.riskCategory,
          };

          if (_.isEqual(validateTypesAndSanitise(newMonitor), validateTypesAndSanitise(mappedMatch))) {
            return {
              name: match.stackResourceId!,
              id: match.monitorId,
              success: false,
              response: match,
              notice: `Skipped ${match.stackResourceId} - no changes detected`,
            };
          }

          const updatedMonitor = await client.update(match.monitorId, {
            // Do not allow to update network of (existing) monitors
            ..._.omit(newMonitor, ['network']),
            monitorId: match.monitorId,
          });

          return {
            name: updatedMonitor.stackResourceId!,
            id: updatedMonitor.monitorId,
            success: true,
            response: updatedMonitor,
          };
        },
        // on create
        async (monitor: Monitor, stackResourceId: string) => {
          let blockwatchersForNetwork: DefenderBlockWatcher[] = [];

          // Check if network is forked network
          if (isTenantNetwork(monitor.network)) {
            blockwatchersForNetwork = (await client.listTenantBlockwatchers()).filter(
              (b) => b.network === monitor.network,
            );
          } else {
            blockwatchersForNetwork = (await client.listBlockwatchers()).filter((b) => b.network === monitor.network);
          }

          const createdMonitor = await client.create(
            constructMonitor(
              this.serverless,
              this.resources,
              stackResourceId,
              monitor,
              notifications,
              actions.items,
              blockwatchersForNetwork,
              contracts,
            ),
          );
          return {
            name: stackResourceId,
            id: createdMonitor.monitorId,
            success: true,
            response: createdMonitor,
          };
        },
        // on remove
        async (monitors: DefenderMonitor[]) => {
          await Promise.all(monitors.map(async (s) => await client.delete(s.monitorId)));
        },
        undefined,
        output,
        this.ssotDifference?.monitors,
      );
    } catch (e) {
      this.log.tryLogDefenderError(e);
    }
  }

  private async deployActions(output: DeployOutput<DefenderAction>) {
    const actions: Actions = this.resources.actions ?? {};
    const client = getActionClient(this.teamKey!);
    const retrieveExisting = () => client.list().then((r) => r.items);

    await this.wrapper<Action, DefenderAction>(
      this.serverless,
      'Actions',
      removeDefenderIdReferences(actions),
      retrieveExisting,
      // on update
      async (action: Action, match: DefenderAction) => {
        const relayers: Relayers = this.resources?.relayers ?? {};
        const existingRelayers = (await getRelayClient(this.teamKey!).list()).items;
        const maybeRelayer = getEquivalentResource<RelayerOrDefenderID | undefined, DefenderRelayer>(
          this.serverless,
          action.relayer,
          relayers,
          existingRelayers,
          'Relayers',
        );
        // Get new code digest
        const code = await client.getEncodedZippedCodeFromFolder(action.path);
        const newDigest = client.getCodeDigest({
          encodedZippedCode: code,
        });
        const { codeDigest } = await client.get(match.actionId);
        const environmentVariables = await client.getEnvironmentVariables(match.actionId);

        const isSchedule = (
          o: DefenderWebhookTrigger | DefenderScheduleTrigger | DefenderMonitorTrigger | DefenderMonitorFilterTrigger,
        ): o is DefenderScheduleTrigger => o.type === 'schedule';

        const mappedMatch = {
          'name': match.name,
          'trigger': {
            type: match.trigger.type,
            frequency: (isSchedule(match.trigger) && match.trigger.frequencyMinutes) || undefined,
            cron: (isSchedule(match.trigger) && match.trigger.cron) || undefined,
          },
          'paused': match.paused,
          'relayerId': match.relayerId,
          'codeDigest': match.codeDigest,
          'environment-variables': environmentVariables,
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
            id: match.actionId,
            success: false,
            response: match,
            notice: `Skipped ${match.stackResourceId} - no changes detected`,
          };
        }

        const updatesAction = await client.update({
          actionId: match.actionId,
          name: action.name,
          paused: action.paused,
          trigger: {
            type: action.trigger.type,
            frequencyMinutes: action.trigger.frequency ?? undefined,
            cron: action.trigger.cron ?? undefined,
          },
          relayerId: maybeRelayer?.relayerId,
        });

        await client.updateEnvironmentVariables(match.actionId, { variables: action['environment-variables'] ?? {} });

        if (newDigest === codeDigest) {
          return {
            name: match.stackResourceId!,
            id: match.actionId,
            success: true,
            notice: `Skipped code upload - no code changes detected for ${match.stackResourceId}`,
            response: updatesAction,
          };
        } else {
          await client.updateCodeFromFolder(match.actionId, {
            path: action.path,
          });
          return {
            name: match.stackResourceId!,
            id: match.actionId,
            success: true,
            response: updatesAction,
          };
        }
      },
      // on create
      async (action: Action, stackResourceId: string) => {
        const actionRelayer = action.relayer;
        const relayers: Relayers = this.resources?.relayers ?? {};
        const existingRelayers = (await getRelayClient(this.teamKey!).list()).items;
        const maybeRelayer = getEquivalentResource<RelayerOrDefenderID | undefined, DefenderRelayer>(
          this.serverless,
          actionRelayer,
          relayers,
          existingRelayers,
          'Relayers',
        );

        const createdAction = await client.create({
          name: action.name,
          trigger: {
            type: action.trigger.type,
            frequencyMinutes: action.trigger.frequency ?? undefined,
            cron: action.trigger.cron ?? undefined,
          },
          encodedZippedCode: await client.getEncodedZippedCodeFromFolder(action.path),
          paused: action.paused,
          relayerId: maybeRelayer?.relayerId,
          stackResourceId: stackResourceId,
          environmentVariables: action['environment-variables'],
        });
        return {
          name: stackResourceId,
          id: createdAction.actionId,
          success: true,
          response: createdAction,
        };
      },
      // on remove
      async (actions: DefenderAction[]) => {
        await Promise.all(actions.map(async (a) => await client.delete(a.actionId)));
      },
      undefined,
      output,
      this.ssotDifference?.actions,
    );
  }

  private async deployBlockExplorerApiKey(output: DeployOutput<DefenderBlockExplorerApiKey>) {
    const blockExplorerApiKeys: BlockExplorerApiKeys = this.resources?.['block-explorer-api-keys'] ?? {};
    const client = getDeployClient(this.teamKey!);
    const retrieveExisting = () => client.listBlockExplorerApiKeys();

    await this.wrapper<BlockExplorerApiKey, DefenderBlockExplorerApiKey>(
      this.serverless,
      'Block Explorer Api Keys',
      removeDefenderIdReferences(blockExplorerApiKeys),
      retrieveExisting,
      // on update
      async (blockExplorerApiKey: BlockExplorerApiKey, match: DefenderBlockExplorerApiKey) => {
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
      async (blockExplorerApiKey: BlockExplorerApiKey, stackResourceId: string) => {
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
      async (blockExplorerApiKeys: DefenderBlockExplorerApiKey[]) => {
        await Promise.all(
          blockExplorerApiKeys.map(async (c) => await client.removeBlockExplorerApiKey(c.blockExplorerApiKeyId)),
        );
      },
      undefined,
      output,
      this.ssotDifference?.blockExplorerApiKeys,
    );
  }

  private async deployForkedNetworks(output: DeployOutput<DefenderTenantNetwork>) {
    const forkedNetworks: ForkedNetworks = this.resources?.['forked-networks'] ?? {};
    const client = getNetworkClient(this.teamKey!);
    const retrieveExisting = () => client.listForkedNetworks();

    await this.wrapper<ForkedNetworkRequest, DefenderTenantNetwork>(
      this.serverless,
      'Forked Networks',
      removeDefenderIdReferences(forkedNetworks),
      retrieveExisting,
      // on update
      async (forkedNetwork: ForkedNetworkRequest, match: DefenderTenantNetwork) => {
        // Warn users when they try to change fields that are not allowed to be updated
        if (match.name !== forkedNetwork.name) {
          this.log.warn(
            `Detected a name change from ${match.name} to ${forkedNetwork.name} for Forked Network: ${match.stackResourceId}. Defender does not currently allow updates to the name once a Forked Network is created. This change will be ignored. To enforce this change, remove this Forked Network and create a new one. Alternatively, you can change the unique identifier (stack resource ID), to force a new creation of the Forked Network. Note that this change might cause errors further in the deployment process for resources that have any dependencies to this network.`,
          );
          forkedNetwork.name = match.name;
        }

        if (match.supportedNetwork !== forkedNetwork['supported-network']) {
          this.log.warn(
            `Detected a change from ${match.supportedNetwork} to ${forkedNetwork['supported-network']} for Forked Network: ${match.stackResourceId}. Defender does not currently allow updates to the fork source once a Forked Network is created. This change will be ignored. To enforce this change, remove this Forked Network and create a new one. Alternatively, you can change the unique identifier (stack resource ID), to force a new creation of the Forked Network. Note that this change might cause errors further in the deployment process for resources that have any dependencies to this network.`,
          );
          forkedNetwork['supported-network'] = match.supportedNetwork as SupportedNetwork;
        }

        if (match.rpcUrl !== forkedNetwork['rpc-url']) {
          this.log.warn(
            `Detected a change from ${match.rpcUrl} to ${forkedNetwork['rpc-url']} for Forked Network: ${match.stackResourceId}. Defender does not currently allow updates to the RPC URL once a Forked Network is created. This change will be ignored. To enforce this change, remove this Forked Network and create a new one. Alternatively, you can change the unique identifier (stack resource ID), to force a new creation of the Forked Network. Note that this change might cause errors further in the deployment process for resources that have any dependencies to this network.`,
          );
          forkedNetwork['rpc-url'] = match.rpcUrl;
        }

        const mappedMatch = {
          'name': match.name,
          'supported-network': match.supportedNetwork,
          'rpc-url': match.rpcUrl,
          'api-key': match.apiKey === null || !!match.apiKey ? match.apiKey : undefined,
          'block-explorer-url':
            match.blockExplorerUrl === null || !!match.blockExplorerUrl ? match.blockExplorerUrl : undefined,
        };

        if (_.isEqual(validateTypesAndSanitise(forkedNetwork), validateTypesAndSanitise(mappedMatch))) {
          return {
            name: match.stackResourceId!,
            id: match.tenantNetworkId,
            success: false,
            response: match,
            notice: `Skipped ${match.stackResourceId} - no changes detected`,
          };
        }

        const updatedForkedNetwork = await client.updateForkedNetwork(match.tenantNetworkId, {
          apiKey: forkedNetwork['api-key'] ?? undefined,
          blockExplorerUrl: forkedNetwork['block-explorer-url'],
          stackResourceId: match.stackResourceId!,
        });

        return {
          name: updatedForkedNetwork.stackResourceId!,
          id: updatedForkedNetwork.tenantNetworkId,
          success: true,
          response: updatedForkedNetwork,
        };
      },
      // on create
      async (forkedNetwork: ForkedNetworkRequest, stackResourceId: string) => {
        const createdForkedNetwork = await client.createForkedNetwork({
          name: forkedNetwork.name,
          supportedNetwork: forkedNetwork['supported-network'] as any, // cast to prevent typing errors in deploy when networks in SDK are not aligned,
          rpcUrl: forkedNetwork['rpc-url'],
          blockExplorerUrl: forkedNetwork['block-explorer-url'] ?? undefined,
          apiKey: forkedNetwork['api-key'] ?? undefined,
          stackResourceId,
        });
        return {
          name: stackResourceId,
          id: createdForkedNetwork.tenantNetworkId,
          success: true,
          response: createdForkedNetwork,
        };
      },
      // on remove
      async (forkedNetworks: DefenderTenantNetwork[]) => {
        await Promise.all(forkedNetworks.map(async (c) => await client.deleteForkedNetwork(c.tenantNetworkId)));
      },
      undefined,
      output,
      this.ssotDifference?.forkedNetworks,
    );
  }

  private async deployPrivateNetworks(output: DeployOutput<DefenderTenantNetwork>) {
    const privateNetworks: PrivateNetworks = this.resources?.['private-networks'] ?? {};
    const client = getNetworkClient(this.teamKey!);
    const retrieveExisting = () => client.listPrivateNetworks();

    await this.wrapper<PrivateNetworkRequest, DefenderTenantNetwork>(
      this.serverless,
      'Private Networks',
      removeDefenderIdReferences(privateNetworks),
      retrieveExisting,
      // on update
      async (privateNetwork: PrivateNetworkRequest, match: DefenderTenantNetwork) => {
        // Warn users when they try to change fields that are not allowed to be updated
        if (match.name !== privateNetwork.name) {
          this.log.warn(
            `Detected a name change from ${match.name} to ${privateNetwork.name} for Private Network: ${match.stackResourceId}. Defender does not currently allow updates to the name once a Private Network is created. This change will be ignored. To enforce this change, remove this Private Network and create a new one. Alternatively, you can change the unique identifier (stack resource ID), to force a new creation of the Private Network. Note that this change might cause errors further in the deployment process for resources that have any dependencies to this network.`,
          );
          privateNetwork.name = match.name;
        }

        if (match.rpcUrl !== privateNetwork['rpc-url']) {
          this.log.warn(
            `Detected a change from ${match.rpcUrl} to ${privateNetwork['rpc-url']} for Private Network: ${match.stackResourceId}. Defender does not currently allow updates to the RPC URL once a Private Network is created. This change will be ignored. To enforce this change, remove this Private Network and create a new one. Alternatively, you can change the unique identifier (stack resource ID), to force a new creation of the Private Network. Note that this change might cause errors further in the deployment process for resources that have any dependencies to this network.`,
          );
          privateNetwork['rpc-url'] = match.rpcUrl;
        }

        const mappedMatch = {
          'name': match.name,
          'configuration': match.configuration
            ? {
                'symbol': match.configuration?.symbol,
                'safe-contracts': match.configuration?.safeContracts
                  ? {
                      'master': match.configuration?.safeContracts?.master,
                      'proxy-factory': match.configuration?.safeContracts?.proxyFactory,
                      'multi-send-call-only': match.configuration?.safeContracts?.multisendCallOnly,
                      'create-call': match.configuration?.safeContracts?.createCall,
                    }
                  : undefined,
                'subgraph-url':
                  match.configuration?.subgraphURL === null || !!match.configuration?.subgraphURL
                    ? match.configuration.subgraphURL
                    : undefined,
                'eips': match.configuration?.eips
                  ? {
                      isEIP1559: match.configuration?.eips?.isEIP1559,
                    }
                  : undefined,
              }
            : undefined,
          'rpc-url': match.rpcUrl,
          'api-key': match.apiKey === null || !!match.apiKey ? match.apiKey : undefined,
          'block-explorer-url':
            match.blockExplorerUrl === null || !!match.blockExplorerUrl ? match.blockExplorerUrl : undefined,
        };

        if (_.isEqual(validateTypesAndSanitise(privateNetwork), validateTypesAndSanitise(mappedMatch))) {
          return {
            name: match.stackResourceId!,
            id: match.tenantNetworkId,
            success: false,
            response: match,
            notice: `Skipped ${match.stackResourceId} - no changes detected`,
          };
        }

        const updatedPrivateNetwork = await client.updatePrivateNetwork(match.tenantNetworkId, {
          apiKey: privateNetwork['api-key'] ?? undefined,
          blockExplorerUrl: privateNetwork['block-explorer-url'] ?? undefined,
          configuration: privateNetwork['configuration']
            ? {
                symbol: privateNetwork['configuration']['symbol'],
                subgraphURL: privateNetwork['configuration']['subgraph-url'] ?? undefined,
                eips: privateNetwork['configuration']['eips']
                  ? {
                      isEIP1559: privateNetwork['configuration']['eips']['isEIP1559'],
                    }
                  : undefined,
                safeContracts: privateNetwork['configuration']['safe-contracts']
                  ? {
                      master: privateNetwork['configuration']['safe-contracts']?.master,
                      proxyFactory: privateNetwork['configuration']['safe-contracts']?.['proxy-factory'],
                      multisendCallOnly: privateNetwork['configuration']['safe-contracts']?.['multi-send-call-only'],
                      createCall: privateNetwork['configuration']['safe-contracts']?.['create-call'],
                    }
                  : undefined,
              }
            : undefined,
          stackResourceId: match.stackResourceId!,
        });

        return {
          name: updatedPrivateNetwork.stackResourceId!,
          id: updatedPrivateNetwork.tenantNetworkId,
          success: true,
          response: updatedPrivateNetwork,
        };
      },
      // on create
      async (privateNetwork: PrivateNetworkRequest, stackResourceId: string) => {
        const createdPrivateNetwork = await client.createPrivateNetwork({
          name: privateNetwork.name,
          rpcUrl: privateNetwork['rpc-url'],
          blockExplorerUrl: privateNetwork['block-explorer-url'] ?? undefined,
          configuration: privateNetwork['configuration']
            ? {
                symbol: privateNetwork['configuration']['symbol'],
                subgraphURL: privateNetwork['configuration']['subgraph-url'] ?? undefined,
                eips: privateNetwork['configuration']['eips']
                  ? {
                      isEIP1559: privateNetwork['configuration']['eips']['isEIP1559'],
                    }
                  : undefined,
                safeContracts: privateNetwork['configuration']['safe-contracts']
                  ? {
                      master: privateNetwork['configuration']['safe-contracts']?.master,
                      proxyFactory: privateNetwork['configuration']['safe-contracts']?.['proxy-factory'],
                      multisendCallOnly: privateNetwork['configuration']['safe-contracts']?.['multi-send-call-only'],
                      createCall: privateNetwork['configuration']['safe-contracts']?.['create-call'],
                    }
                  : undefined,
              }
            : undefined,
          apiKey: privateNetwork['api-key'] ?? undefined,
          stackResourceId,
        });
        return {
          name: stackResourceId,
          id: createdPrivateNetwork.tenantNetworkId,
          success: true,
          response: createdPrivateNetwork,
        };
      },
      // on remove
      async (privateNetworks: DefenderTenantNetwork[]) => {
        await Promise.all(privateNetworks.map(async (c) => await client.deletePrivateNetwork(c.tenantNetworkId)));
      },
      undefined,
      output,
      this.ssotDifference?.privateNetworks,
    );
  }

  private async wrapper<Y, D>(
    context: Serverless,
    resourceType: ResourceType,
    resources: { [k: string]: Y } | Y[] | undefined,
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
          this.log.info(`Unused resources found on Defender:`);
          this.log.info(JSON.stringify(ssotDifference, null, 2));
          this.log.progress('component-deploy-extra', `Removing resources from Defender`);
          await onRemove(ssotDifference);
          this.log.success(`Removed resources from Defender`);
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
                ? (match as unknown as DefenderContract).name
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
            this.log.tryLogDefenderError(e);
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
            this.log.tryLogDefenderError(e);
          }
        }
      }
    } catch (e) {
      this.log.tryLogDefenderError(e);
    }
  }

  public async deploy() {
    this.log.notice('========================================================');
    const stackName = getStackName(this.serverless);
    this.log.progress('deploy', `Running Defender Deploy on stack: ${stackName}`);

    const monitors: DeployOutput<DefenderMonitor> = {
      removed: [],
      created: [],
      updated: [],
    };
    const actions: DeployOutput<DefenderAction> = {
      removed: [],
      created: [],
      updated: [],
    };
    const contracts: DeployOutput<DefenderContract> = {
      removed: [],
      created: [],
      updated: [],
    };
    const notifications: DeployOutput<DefenderNotification> = {
      removed: [],
      created: [],
      updated: [],
    };
    const secrets: DeployOutput<string> = {
      removed: [],
      created: [],
      updated: [],
    };
    const relayers: DeployOutput<DefenderRelayer> & {
      relayerKeys: DeployOutput<DefenderRelayerApiKey>;
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
    const relayerGroups: DeployOutput<DefenderRelayerGroup> & {
      relayerGroupKeys: DeployOutput<DefenderRelayerApiKey>;
    } = {
      removed: [],
      created: [],
      updated: [],
      relayerGroupKeys: {
        removed: [],
        created: [],
        updated: [],
      },
    };
    const blockExplorerApiKeys: DeployOutput<DefenderBlockExplorerApiKey> = {
      removed: [],
      created: [],
      updated: [],
    };
    const forkedNetworks: DeployOutput<DefenderTenantNetwork> = {
      removed: [],
      created: [],
      updated: [],
    };

    const privateNetworks: DeployOutput<DefenderTenantNetwork> = {
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
      relayerGroups,
      notifications,
      secrets,
      blockExplorerApiKeys,
      forkedNetworks,
      privateNetworks,
    };

    await this.deployForkedNetworks(stdOut.forkedNetworks);
    await this.deployPrivateNetworks(stdOut.privateNetworks);
    await this.deploySecrets(stdOut.secrets);
    await this.deployContracts(stdOut.contracts);
    // Always deploy relayers before actions
    await this.deployRelayers(stdOut.relayers);
    await this.deployRelayerGroups(stdOut.relayerGroups);
    await this.deployActions(stdOut.actions);
    // Deploy notifications before monitors
    await this.deployNotifications(stdOut.notifications);
    await this.deployMonitors(stdOut.monitors);
    await this.deployBlockExplorerApiKey(stdOut.blockExplorerApiKeys);

    this.log.notice('========================================================');

    if (!process.stdout.isTTY) this.log.stdOut(JSON.stringify(stdOut, null, 2));

    const keyDir = `${process.cwd()}/.defender`;
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
