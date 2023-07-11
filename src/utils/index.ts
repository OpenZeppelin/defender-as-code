import Serverless from 'serverless';

import _ from 'lodash';
import { ActionClient } from '@openzeppelin/platform-sdk-action-client';
import { MonitorClient } from '@openzeppelin/platform-sdk-monitor-client';
import { RelayClient } from '@openzeppelin/platform-sdk-relay-client';
import { ProposalClient } from '@openzeppelin/platform-sdk-proposal-client';

import {
  YSecret,
  YMonitor,
  YNotification,
  YTelegramConfig,
  YSlackConfig,
  YEmailConfig,
  YDiscordConfig,
  YDatadogConfig,
  YOpsgenieConfig,
  YPagerdutyConfig,
  PlatformAction,
  DefenderNotification,
  TeamKey,
  YContract,
  DefenderContract,
  ResourceType,
  DefenderBlockWatcher,
  YCategory,
  DefenderCategory,
  PlatformAPIError,
  YAction,
  DefenderNotificationReference,
  PlatformFortaMonitor,
  PlatformBlockMonitor,
} from '../types';
import { sanitise } from './sanitise';
import { BlockExplorerApiKeyClient, DeploymentConfigClient } from '@openzeppelin/platform-deploy-client';

/**
 * @dev this function retrieves the Platform equivalent object of the provided template resource
 * This will not work for resources that do not have the stackResourceId property, ie. secrets and contracts
 */
export const getEquivalentResource = <Y, D>(
  context: Serverless,
  resource: Y,
  resources: Y[] | undefined,
  currentResources: D[],
) => {
  if (resource) {
    const [key, value] = Object.entries(resources ?? []).find((a) => _.isEqual(a[1], resource))!;
    return currentResources.find((e: D) => (e as any).stackResourceId === getResourceID(getStackName(context), key));
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
export const getConsolidatedSecrets = (context: Serverless): YSecret[] => {
  const globalSecrets: YSecret = context.service.resources?.Resources?.secrets?.global ?? {};
  const stackSecrets: YSecret = context.service.resources?.Resources?.secrets?.stack ?? {};
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
  resources: Y[],
): boolean => {
  return !!Object.entries(resources).find((a) =>
    resourceType === 'Secrets'
      ? // if secret, just compare key
        Object.keys(a[1] as unknown as YSecret)[0] === (resource as unknown as string)
      : resourceType === 'Contracts'
      ? // if contracts, compare network and address
        (a[1] as unknown as YContract).network === (resource as unknown as DefenderContract).network &&
        (a[1] as unknown as YContract).address === (resource as unknown as DefenderContract).address
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
  const platformConfig: { key: string; secret: string } = context.service.initialServerlessConfig.platform;
  if (!platformConfig)
    throw new Error(
      `Missing "platform" top-level property in configuration. Please define "platform" with the "key" and "secret" properties in your serverless.yaml file.`,
    );
  if (!platformConfig.key || !platformConfig.secret)
    throw new Error(
      `Missing "platform" key or secret properties in configuration. Please define a "key" and "secret" property under "platform" in your serverless.yaml file.`,
    );
  return { apiKey: platformConfig.key, apiSecret: platformConfig.secret };
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

export const getDeploymentConfigClient = (key: TeamKey): DeploymentConfigClient => {
  return new DeploymentConfigClient(key);
};

export const getBlockExplorerApiKeyClient = (key: TeamKey): BlockExplorerApiKeyClient => {
  return new BlockExplorerApiKeyClient(key);
};

export const constructNotification = (notification: YNotification, stackResourceId: string) => {
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
  category: YCategory,
  stackResourceId: string,
  notifications: DefenderNotification[],
) => {
  return {
    name: category.name,
    description: category.description,
    notificationIds: (category['notification-ids']
      ? category['notification-ids']
          .map((notification) => {
            const maybeNotification = getEquivalentResource<YNotification, DefenderNotification>(
              context,
              notification,
              context.service.resources?.Resources?.notifications,
              notifications,
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

export const constructMonitor = (
  context: Serverless,
  stackResourceId: string,
  monitor: YMonitor,
  notifications: DefenderNotification[],
  actions: PlatformAction[],
  blockwatchers: DefenderBlockWatcher[],
  categories: DefenderCategory[],
): PlatformBlockMonitor | PlatformFortaMonitor => {
  const actionCondition =
    monitor['action-condition'] && actions.find((a) => a.name === monitor['action-condition']!.name);
  const actionTrigger = monitor['action-trigger'] && actions.find((a) => a.name === monitor['action-trigger']!.name);

  const notificationChannels = monitor['notify-config'].channels
    .map((notification) => {
      const maybeNotification = getEquivalentResource<YNotification, DefenderNotification>(
        context,
        notification,
        context.service.resources?.Resources?.notifications,
        notifications,
      );
      return maybeNotification?.notificationId;
    })
    .filter(isResource);

  const monitorCategory = monitor['notify-config'].category;
  const notificationCategoryId = monitorCategory && categories.find((c) => c.name === monitorCategory.name)?.categoryId;

  const commonMonitor = {
    type: monitor.type,
    name: monitor.name,
    network: monitor.network,
    addresses: monitor.addresses,
    abi: monitor.abi && JSON.stringify(typeof monitor.abi === 'string' ? JSON.parse(monitor.abi) : monitor.abi),
    paused: monitor.paused,
    autotaskCondition: actionCondition && actionCondition.actionkId,
    autotaskTrigger: actionTrigger && actionTrigger.actionkId,
    alertThreshold: monitor['alert-threshold'] && {
      amount: monitor['alert-threshold'].amount,
      windowSeconds: monitor['alert-threshold']['window-seconds'],
    },
    alertMessageBody: monitor['notify-config'].message,
    alertMessageSubject: monitor['notify-config']['message-subject'],
    alertTimeoutMs: monitor['notify-config'].timeout,
    notificationChannels,
    notificationCategoryId: _.isEmpty(notificationChannels) ? notificationCategoryId : undefined,
    riskCategory: monitor['risk-category'],
    stackResourceId: stackResourceId,
  };

  if (monitor.type === 'FORTA') {
    const fortaMonitor: PlatformFortaMonitor = {
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
    const blockMonitor: PlatformBlockMonitor = {
      ...commonMonitor,
      type: 'BLOCK',
      network: monitor.network,
      addresses: monitor.addresses,
      confirmLevel: compatibleBlockWatcher!.confirmLevel,
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
  resources: T[] | undefined,
  resourceType: ResourceType,
) => {
  if (!resources) return;
  const teamApiKey = getTeamAPIkeysOrThrow(context);
  switch (resourceType) {
    case 'Monitors':
      // Check for access to Actions
      // Enumerate all monitors, and check if any monitor has an action associated
      const monitorssWithActions = (Object.values(resources) as unknown as YMonitor[]).filter(
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
      const actionsWithRelayers = (Object.values(resources) as unknown as YAction[]).filter((r) => !!r.relayer);
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
    const platformErrorStatus = (e as PlatformAPIError).response.status as number;
    return platformErrorStatus === 403;
  } catch {
    // if it is not a PlatformApiError,
    // the error is most likely caused due to something else
    return false;
  }
};

export const formatABI = (abi: YContract['abi']) => {
  return abi && JSON.stringify(typeof abi === 'string' ? JSON.parse(abi) : abi);
};
