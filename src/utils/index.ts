import Serverless from 'serverless';

import _ from 'lodash';

import { TenantNetwork, Network, isValidNetwork } from '@openzeppelin/defender-sdk-base-client';
import { ActionClient } from '@openzeppelin/defender-sdk-action-client';
import { MonitorClient } from '@openzeppelin/defender-sdk-monitor-client';
import { RelayClient } from '@openzeppelin/defender-sdk-relay-client';
import { ProposalClient } from '@openzeppelin/defender-sdk-proposal-client';
import { DeployClient } from '@openzeppelin/defender-sdk-deploy-client';
import { NetworkClient } from '@openzeppelin/defender-sdk-network-client';

import {
  YSecret,
  YTelegramConfig,
  YSlackConfig,
  YEmailConfig,
  YDiscordConfig,
  YDatadogConfig,
  YOpsgenieConfig,
  YPagerdutyConfig,
  DefenderAction,
  DefenderNotification,
  TeamKey,
  DefenderContract,
  ResourceType,
  DefenderBlockWatcher,
  DefenderCategory,
  DefenderNotificationReference,
  DefenderFortaMonitor,
  DefenderBlockMonitor,
  DefenderAPIError,
  Resources,
  DefenderMonitor,
  DefenderRelayer,
  DefenderBlockExplorerApiKey,
  DefenderTenantNetwork,
} from '../types';
import { sanitise } from './sanitise';
import {
  AbiType,
  Action,
  ActionOrDefenderID,
  ActionSecrets,
  AlertThreshold,
  Category,
  CategoryOrDefenderID,
  Contract,
  ContractOrDefenderID,
  DefenderID,
  Monitor,
  Notification,
  NotificationOrDefenderID,
  NotifyConfig,
} from '../types/types/resources.schema';

const getDefenderIdFromResource = <Y>(resource: Y, resourceType: ResourceType): DefenderID => {
  switch (resourceType) {
    case 'Actions':
      return (resource as DefenderAction).actionId;
    case 'Monitors':
      return (resource as DefenderMonitor).monitorId;
    case 'Relayers':
      return (resource as DefenderRelayer).relayerId;
    case 'Notifications':
      return (resource as DefenderNotification).notificationId;
    case 'Categories':
      return (resource as DefenderCategory).categoryId;
    case 'Block Explorer Api Keys':
      return (resource as DefenderBlockExplorerApiKey).blockExplorerApiKeyId;
    case 'Private Networks':
    case 'Forked Networks':
      return (resource as DefenderTenantNetwork).tenantNetworkId;
    case 'Contracts':
      const contract = resource as DefenderContract;
      return `${contract.network}-${contract.address}`;
    default:
      throw new Error(`Incompatible resource type ${resourceType}`);
  }
};

/**
 * @dev this function retrieves the Defender equivalent object of the provided template resource
 * This will not work for resources that do not have the stackResourceId property, ie. secrets and contracts
 */
export const getEquivalentResource = <Y, D>(
  context: Serverless,
  resource: Y,
  resources: { [k: string]: Y } | undefined,
  currentResources: D[],
  type: ResourceType,
) => {
  if (resource) {
    if (isDefenderId(resource)) {
      return currentResources.find((e) => getDefenderIdFromResource(e, type) === resource);
    }
    const [key, value] = Object.entries(resources ?? {}).find((a) => _.isEqual(a[1], resource))!;
    return currentResources.find((e) => (e as any).stackResourceId === getResourceID(getStackName(context), key));
  }
};

export const validateTypesAndSanitise = (o: object): object => {
  return sanitise(o) as object;
};

export const getEquivalentResourceByKey = <D>(resourceKey: string, currentResources: D[]) => {
  return currentResources.find((e: D) => (e as any).stackResourceId === resourceKey);
};

/**
 * @dev returns both a list of consolidated secrets for both global and stack, where the latter will be preceded with the stack name.
 * */
export const getConsolidatedSecrets = (context: Serverless, resources: Resources): YSecret[] => {
  const secrets: ActionSecrets = resources?.secrets ?? {};
  const globalSecrets = secrets.global ?? {};
  const stackSecrets = secrets.stack ?? {};

  const stackSecretsPrecededWithStackName = Object.entries(stackSecrets).map(([ssk, ssv]) => {
    return {
      [`${getStackName(context)}_${ssk}`]: ssv,
    };
  });
  return _.map(_.entries(Object.assign(globalSecrets, ...stackSecretsPrecededWithStackName)), ([k, v]) => ({
    [k]: v as string,
  }));
};

export const isTemplateResource = <Y, D>(
  context: Serverless,
  resource: D,
  resourceType: ResourceType,
  resources: { [k: string]: Y } | Y[],
): boolean => {
  return !!Object.entries(resources).find((a) =>
    resourceType === 'Secrets'
      ? // if secret, just compare key
        Object.keys(a[1] as unknown as YSecret)[0] === (resource as unknown as string)
      : resourceType === 'Contracts'
      ? // if contracts, compare network and address
        (a[1] as unknown as Contract).network === (resource as unknown as DefenderContract).network &&
        (a[1] as unknown as Contract).address === (resource as unknown as DefenderContract).address
      : // anything else, compare stackResourceId
        getResourceID(getStackName(context), a[0]) === (resource as D & { stackResourceId: string }).stackResourceId,
  );
};

export const getResourceID = (stackName: string, resourceName: string): string => {
  return `${stackName}.${resourceName}`;
};

export const getStackName = (context: Serverless): string => {
  if ((context.service.provider as any).stackName && typeof (context.service.provider as any).stackName === 'string') {
    return (context.service.provider as any).stackName;
  }
  if (context.service.provider.stage) return `${context.service.service}-${context.service.provider.stage}`;
  throw new Error(
    `Unable to get stack name. Missing "provider.stage" property. Alternatively, define "stackName" under "provider" in your serverless.yaml file.`,
  );
};

export const isSSOT = (context: Serverless): boolean => {
  return !!(context.service.provider as any).ssot;
};

export const getTeamAPIkeysOrThrow = (context: Serverless): TeamKey => {
  const defenderConfig: { key: string; secret: string } = context.service.initialServerlessConfig.defender;
  if (!defenderConfig)
    throw new Error(
      `Missing "defender" top-level property in configuration. Please define "defender" with the "key" and "secret" properties in your serverless.yaml file.`,
    );
  if (!defenderConfig.key || !defenderConfig.secret)
    throw new Error(
      `Missing "defender" key or secret properties in configuration. Please define a "key" and "secret" property under "defender" in your serverless.yaml file.`,
    );
  return { apiKey: defenderConfig.key, apiSecret: defenderConfig.secret };
};

export const getMonitorClient = (key: TeamKey): MonitorClient => {
  return new MonitorClient(key);
};

export const getActionClient = (key: TeamKey): ActionClient => {
  return new ActionClient(key);
};

export const getRelayClient = (key: TeamKey): RelayClient => {
  return new RelayClient(key);
};

export const getProposalClient = (key: TeamKey): ProposalClient => {
  return new ProposalClient(key);
};

export const getDeployClient = (key: TeamKey): DeployClient => {
  return new DeployClient(key);
};

export const getNetworkClient = (key: TeamKey): NetworkClient => {
  return new NetworkClient(key);
};

export const constructNotification = (notification: Notification, stackResourceId: string) => {
  const commonNotification = {
    type: notification.type,
    name: notification.name,
    paused: notification.paused,
    stackResourceId,
  };

  let currentConfig;
  let config;

  switch (notification.type) {
    case 'datadog':
      currentConfig = notification.config as YDatadogConfig;
      config = {
        apiKey: currentConfig['api-key'],
        metricPrefix: currentConfig['metric-prefix'],
      };
      return { ...commonNotification, config };
    case 'discord':
      currentConfig = notification.config as YDiscordConfig;
      config = {
        url: currentConfig.url,
      };
      return { ...commonNotification, config };
    case 'email':
      currentConfig = notification.config as YEmailConfig;
      config = {
        emails: currentConfig.emails,
      };
      return { ...commonNotification, config };
    case 'slack':
      currentConfig = notification.config as YSlackConfig;
      config = {
        url: currentConfig.url,
      };
      return { ...commonNotification, config };
    case 'telegram':
      currentConfig = notification.config as YTelegramConfig;
      config = {
        botToken: currentConfig['bot-token'],
        chatId: currentConfig['chat-id'],
      };
      return { ...commonNotification, config };
    case 'opsgenie':
      currentConfig = notification.config as YOpsgenieConfig;
      config = currentConfig;
      return { ...commonNotification, config };
    case 'pager-duty':
      currentConfig = notification.config as YPagerdutyConfig;
      config = currentConfig;
      return { ...commonNotification, config };
    default:
      throw new Error(`Incompatible notification type ${notification.type}`);
  }
};

export const constructNotificationCategory = (
  context: Serverless,
  resources: Resources,
  category: Category,
  stackResourceId: string,
  notifications: DefenderNotification[],
) => {
  return {
    name: category.name,
    description: category.description,
    notificationIds: (category['notification-ids']
      ? category['notification-ids']
          .map((notification) => {
            const maybeNotification = getEquivalentResource<NotificationOrDefenderID | undefined, DefenderNotification>(
              context,
              notification,
              resources?.notifications,
              notifications,
              'Notifications',
            );
            if (maybeNotification)
              return {
                notificationId: maybeNotification.notificationId,
                type: maybeNotification.type,
              } as DefenderNotificationReference;
          })
          .filter(isResource)
      : []) as [] | [DefenderNotificationReference] | [DefenderNotificationReference, DefenderNotificationReference],
    stackResourceId,
  };
};
const isResource = <T>(item: T | undefined): item is T => {
  return !!item;
};

const getDefenderAction = (
  resource: ActionOrDefenderID | undefined,
  actions: DefenderAction[],
): DefenderAction | undefined => {
  if (!resource) return undefined;
  if (isDefenderId(resource)) return actions.find((a) => a.actionId === resource);
  return actions.find((a) => a.name === resource.name);
};

const getDefenderCategory = (
  resource: CategoryOrDefenderID | undefined,
  categories: DefenderCategory[],
): DefenderCategory | undefined => {
  if (!resource) return undefined;
  if (isDefenderId(resource)) return categories.find((a) => a.categoryId === resource);
  return categories.find((a) => a.name === resource.name);
};

const getDefenderContract = (
  resource: ContractOrDefenderID | undefined,
  contracts: DefenderContract[],
): DefenderContract | undefined => {
  if (!resource) return undefined;
  if (isDefenderId(resource)) return contracts.find((a) => `${a.network}-${a.address}` === resource);
  return contracts.find((a) => `${a.network}-${a.address}` === `${resource.network}-${resource.address}`);
};

const parseMonitorAbi = (abi: AbiType | undefined) => {
  // Because the way AbiType is typed (string | string[]), a list with 1 string item is interpreted as a string rather than string[]
  // Therefore, JSON.parse may fail if the string is not a valid JSON
  try {
    return abi && JSON.stringify(typeof abi === 'string' ? JSON.parse(abi) : abi);
  } catch (e) {
    return abi && JSON.stringify([abi]);
  }
};

export const constructMonitor = (
  context: Serverless,
  resources: Resources,
  stackResourceId: string,
  monitor: Monitor,
  notifications: DefenderNotification[],
  actions: DefenderAction[],
  blockwatchers: DefenderBlockWatcher[],
  categories: DefenderCategory[],
  contracts: DefenderContract[],
): DefenderBlockMonitor | DefenderFortaMonitor => {
  const actionCondition = getDefenderAction(monitor['action-condition'], actions);
  const actionTrigger = getDefenderAction(monitor['action-trigger'], actions);

  const notifyConfig = monitor['notify-config'] as NotifyConfig;
  const threshold = monitor['alert-threshold'] as AlertThreshold;
  const notificationChannels = notifyConfig.channels
    .map((notification) => {
      const maybeNotification = getEquivalentResource<NotificationOrDefenderID | undefined, DefenderNotification>(
        context,
        notification,
        resources?.notifications,
        notifications,
        'Notifications',
      );
      return maybeNotification?.notificationId;
    })
    .filter(isResource);

  const monitorCategory = notifyConfig.category;
  const notificationCategoryId = getDefenderCategory(monitorCategory, categories)?.categoryId;

  // !NOTE: This depends on Contracts being deployed before Monitors
  //        otherwise getDefenderContract will return old values
  const monitorContracts = monitor.contracts?.map((contract) => getDefenderContract(contract, contracts));
  // if monitor.abi is defined, we use that over the first entry from monitorContracts by default
  const monitorABI = parseMonitorAbi(monitor.abi) || monitorContracts?.[0]?.abi;

  // Pull addresses from either monitor.addresses or monitor.contracts
  const monitorAddresses =
    (monitorContracts &&
      monitorContracts.map((contract) => {
        if (!contract) {
          throw new Error('Contract not found in Defender');
        }
        return contract!.address;
      })) ||
    monitor.addresses;

  if (!monitorAddresses && monitor.type === 'BLOCK') {
    throw new Error('BLOCK monitor must have either addresses or contracts defined');
  }

  const commonMonitor = {
    type: monitor.type,
    name: monitor.name,
    network: monitor.network,
    addresses: monitorAddresses,
    abi: monitorABI,
    paused: monitor.paused,
    actionCondition: actionCondition && actionCondition.actionId,
    actionTrigger: actionTrigger && actionTrigger.actionId,
    alertThreshold: threshold && {
      amount: threshold.amount,
      windowSeconds: threshold['window-seconds'],
    },
    alertMessageBody: notifyConfig.message,
    alertMessageSubject: notifyConfig['message-subject'],
    alertTimeoutMs: notifyConfig.timeout,
    notificationChannels,
    notificationCategoryId: _.isEmpty(notificationChannels) ? notificationCategoryId : undefined,
    riskCategory: monitor['risk-category'],
    stackResourceId: stackResourceId,
  };

  if (monitor.type === 'FORTA') {
    const fortaMonitor: DefenderFortaMonitor = {
      ...commonMonitor,
      type: 'FORTA',
      privateFortaNodeId: monitor['forta-node-id'],
      agentIDs: monitor['agent-ids'],
      fortaConditions: {
        alertIDs: monitor.conditions && monitor.conditions['alert-ids'],
        minimumScannerCount: (monitor.conditions && monitor.conditions['min-scanner-count']) || 1, // default to 1
        severity: monitor.conditions?.severity,
      },
      fortaLastProcessedTime: monitor['forta-last-processed-time'],
    };
    return fortaMonitor;
  }

  if (monitor.type === 'BLOCK') {
    const compatibleBlockWatcher = blockwatchers.find((b) => b.confirmLevel === monitor['confirm-level']);
    if (!compatibleBlockWatcher) {
      throw new Error(
        `A blockwatcher with confirmation level (${monitor['confirm-level']}) does not exist on ${monitor.network}. Choose another confirmation level.`,
      );
    }
    const blockMonitor: DefenderBlockMonitor = {
      ...commonMonitor,
      type: 'BLOCK',
      network: monitor.network,
      addresses: monitorAddresses!,
      confirmLevel: compatibleBlockWatcher!.confirmLevel,
      skipABIValidation: monitor['skip-abi-validation'],
      eventConditions:
        monitor.conditions &&
        monitor.conditions.event &&
        monitor.conditions.event.map((c) => {
          return {
            eventSignature: c.signature,
            expression: c.expression,
          };
        }),
      functionConditions:
        monitor.conditions &&
        monitor.conditions.function &&
        monitor.conditions.function.map((c) => {
          return {
            functionSignature: c.signature,
            expression: c.expression,
          };
        }),
      txCondition: monitor.conditions && monitor.conditions.transaction,
    };
    return blockMonitor;
  }

  throw new Error('Incompatible monitor type. Type must be either FORTA or BLOCK');
};

export const validateAdditionalPermissionsOrThrow = async <T>(
  context: Serverless,
  resources: { [k: string]: T } | T[] | undefined,
  resourceType: ResourceType,
) => {
  if (!resources) return;
  const teamApiKey = getTeamAPIkeysOrThrow(context);
  switch (resourceType) {
    case 'Monitors':
      // Check for access to Actions
      // Enumerate all monitors, and check if any monitor has an action associated
      const monitorssWithActions = (Object.values(resources) as unknown as Monitor[]).filter(
        (r) => !!r['action-condition'] || !!r['action-trigger'],
      );
      // If there are monitors with actions associated, then try to list actions
      if (!_.isEmpty(monitorssWithActions)) {
        try {
          await getActionClient(teamApiKey).list();
          return;
        } catch (e) {
          // catch the error and verify it is an unauthorised access error
          if (isUnauthorisedError(e)) {
            // if this fails (due to permissions issue), we re-throw the error with more context
            throw new Error(
              'At least one Monitor is associated with an Action. Additional API key permissions are required to access Actions. Alternatively, remove the association with the action to complete this action.',
            );
          }
          // also throw with original error if its not a permission issue
          throw e;
        }
      }
    case 'Actions':
      // Check for access to Relayers
      // Enumerate all actions, and check if any action has a relayer associated
      const actionsWithRelayers = (Object.values(resources) as unknown as Action[]).filter((r) => !!r.relayer);
      // If there are actions with relayers associated, then try to list relayers
      if (!_.isEmpty(actionsWithRelayers)) {
        try {
          await getRelayClient(teamApiKey).list();
          return;
        } catch (e) {
          // catch the error and verify it is an unauthorised access error
          if (isUnauthorisedError(e)) {
            // if this fails (due to permissions issue), we re-throw the error with more context
            throw new Error(
              'At least one Action is associated with a Relayer. Additional API key permissions are required to access Relayers. Alternatively, remove the association with the relayer to complete this action.',
            );
          }
          // also throw with original error if its not a permission issue
          throw e;
        }
      }
    // No other resources require additional permissions
    default:
      return;
  }
};

export const isUnauthorisedError = (e: any): boolean => {
  try {
    const error = (e as DefenderAPIError).response.status as number;
    return error === 403;
  } catch {
    // if it is not a DefenderAPIError,
    // the error is most likely caused due to something else
    return false;
  }
};

export const formatABI = (abi: Contract['abi']) => {
  return abi && JSON.stringify(typeof abi === 'string' ? JSON.parse(abi) : abi);
};

export const isDefenderId = (resource: any): resource is DefenderID => {
  return resource && typeof resource === 'string';
};

export const removeDefenderIdReferences = <Y>(resources: { [k: string]: Y | DefenderID } | undefined) => {
  if (resources) {
    for (const [id, resource] of Object.entries(resources)) {
      if (isDefenderId(resource)) {
        delete resources[id];
      }
    }
  }
  return resources as { [k: string]: Y } | undefined;
};

export const isTenantNetwork = (network?: Network): network is TenantNetwork => {
  if (!network) return false;
  return !isValidNetwork(network);
};
