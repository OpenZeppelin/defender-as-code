import { Network } from '@openzeppelin/platform-sdk-base-client';
import { Contract } from '@openzeppelin/defender-admin-client';
import { RelayerGetResponse, RelayerApiKey } from '@openzeppelin/platform-sdk-relay-client/lib/models';
import { JsonFragment } from '@ethersproject/abi';
import { PlatformApiResponseError } from '@openzeppelin/platform-sdk-base-client/lib/api/api-error';

import {
  SaveNotificationRequest,
  NotificationSummary,
  DatadogConfig,
  SlackConfig,
  TelegramBotConfig,
  EmailConfig,
  DiscordConfig,
  NotificationType,
} from '@openzeppelin/platform-sdk-monitor-client/lib/models/notification';

import { NotificationCategory } from '@openzeppelin/platform-sdk-monitor-client/lib/models/category';
import { CreateMonitorResponse, BlockWatcher } from '@openzeppelin/platform-sdk-monitor-client';

import {
  CreateBlockSubscriberResponse,
  CreateFortaSubscriberResponse,
  ExternalCreateBlockSubscriberRequest,
  ExternalCreateFortaSubscriberRequest,
  NotificationReference,
  SubscriberRiskCategory,
} from '@openzeppelin/platform-sdk-monitor-client/lib/models/subscriber';
import {
  Action,
  SecretsMap,
  ScheduleTrigger,
  WebhookTrigger,
  SentinelTrigger,
  MonitorFilterTrigger,
} from '@openzeppelin/platform-sdk-action-client/lib/models/action';
import { BlockExplorerApiKeyResponse, DeploymentConfigResponse } from '@openzeppelin/platform-deploy-client';
import { OpsgenieConfig } from '@openzeppelin/platform-sdk-monitor-client/lib/models/opsgenie';
import { PagerDutyConfig } from '@openzeppelin/platform-sdk-monitor-client/lib/models/pager-duty';

export type PlatformAPIError = PlatformApiResponseError;
export type PlatformRelayerApiKey = RelayerApiKey;
export type PlatformSecretsMap = SecretsMap;
export type DefenderContract = Contract;
export type PlatformRelayer = RelayerGetResponse;
export type PlatformAction = Action;
export type PlatformBlockWatcher = BlockWatcher;
export type PlatformNotification = NotificationSummary;
export type PlatformCategory = NotificationCategory;
export type PlatformNotificationReference = NotificationReference;
export type PlatformMonitor = CreateMonitorResponse;
export type PlatformBlockMonitorResponse = CreateBlockSubscriberResponse;
export type PlatformFortaMonitorResponse = CreateFortaSubscriberResponse;
export type PlatformBlockMonitor = ExternalCreateBlockSubscriberRequest;
export type PlatformFortaMonitor = ExternalCreateFortaSubscriberRequest;
export type PlatformSlackConfig = SlackConfig;
export type PlatformDatadogConfig = DatadogConfig;
export type PlatformDiscordConfig = DiscordConfig;
export type PlatformTelegramConfig = TelegramBotConfig;
export type PlatformEmailConfig = EmailConfig;
export type PlatformNetwork = Network;
export type PlatformDeploymentConfig = DeploymentConfigResponse;
export type PlatformBlockExplorerApiKey = BlockExplorerApiKeyResponse;
export type PlatformWebhookTrigger = WebhookTrigger;
export type PlatformScheduleTrigger = ScheduleTrigger;
export type PlatformMonitorTrigger = SentinelTrigger;
export type PlatformMonitorFilterTrigger = MonitorFilterTrigger;
export type PlatformMonitorRiskCategory = SubscriberRiskCategory;

export type ResourceType =
  | 'Monitors'
  | 'Relayers'
  | 'Notifications'
  | 'Categories'
  | 'Actions'
  | 'Contracts'
  | 'Secrets'
  | 'Deployment Configs'
  | 'Block Explorer Api Keys';

export type YPolicy = {
  'gas-price-cap'?: number;
  'whitelist-receivers'?: string[];
  'eip1559-pricing'?: boolean;
  'private-transactions'?: boolean;
};

export type YRelayer = {
  'name': string;
  'network': Network;
  'min-balance': number;
  'policy'?: YPolicy;
  'api-keys': any[];
  'address-from-relayer'?: YRelayer;
};

export type YAction = {
  name: string;
  path: string;
  relayer?: YRelayer;
  trigger: {
    type: 'schedule' | 'webhook' | 'sentinel' | 'monitor-filter';
    frequency?: number;
    cron?: string;
  };
  paused: boolean;
};

export type YSlackConfig = {
  url: string;
};

export type YTelegramConfig = {
  'bot-token': string;
  'chat-id': string;
};

export type YDiscordConfig = {
  url: string;
};

export type YEmailConfig = {
  emails: string[];
};

export type YDatadogConfig = {
  'api-key': string;
  'metric-prefix': string;
};

export type YOpsgenieConfig = OpsgenieConfig;
export type YPagerdutyConfig = PagerDutyConfig;

export type YNotification = SaveNotificationRequest & {
  type: NotificationType;
  name: string;
  paused: boolean;
  config:
    | YSlackConfig
    | YTelegramConfig
    | YDatadogConfig
    | YDiscordConfig
    | YEmailConfig
    | YOpsgenieConfig
    | YPagerdutyConfig;
};

export type YCategory = {
  'name': string;
  'description': string;
  'notification-ids': YNotification[];
};

export type YBlockMonitor = {
  'name': string;
  'type': 'BLOCK';
  'network': Network;
  'addresses': string[];
  'abi'?: string | string[] | JsonFragment[];
  'alert-threshold'?: { 'amount': number; 'window-seconds': number };
  'paused'?: boolean;
  'action-condition'?: YAction;
  'action-trigger'?: YAction;
  'confirm-level'?: number | 'safe' | 'finalized';
  'notify-config': {
    'timeout'?: number;
    'message'?: string;
    'message-subject'?: string;
    'category'?: YCategory;
    'channels': YNotification[];
  };
  'conditions'?: {
    event: { signature: string; expression?: string }[];
    function: { signature: string; expression?: string }[];
    transaction?: string;
  };
  'risk-category': PlatformMonitorRiskCategory;
};

export type YFortaMonitor = {
  'name': string;
  'type': 'FORTA';
  'network'?: Network;
  'addresses'?: string[];
  'abi'?: string | string[] | JsonFragment[];
  'alert-threshold'?: { 'amount': number; 'window-seconds': number };
  'paused'?: boolean;
  'action-condition'?: YAction;
  'action-trigger'?: YAction;
  'notify-config': {
    'timeout'?: number;
    'message'?: string;
    'message-subject'?: string;
    'category'?: YCategory;
    'channels': YNotification[];
  };
  'conditions'?: {
    'min-scanner-count': number;
    'severity'?: 0 | 1 | 2 | 3 | 4 | 5;
    'alert-ids'?: string[];
  };
  'forta-node-id'?: string;
  'agent-ids'?: string[];
  'forta-last-processed-time'?: string;
  'risk-category': PlatformMonitorRiskCategory;
};

export type YMonitor = YBlockMonitor | YFortaMonitor;

export type YContract = {
  'name': string;
  'address': string;
  'network': Network;
  'abi'?: string | string[] | JsonFragment[];
  'nat-spec'?: string;
};

export type YSecret = {
  [k: string]: string;
};

export type TeamKey = {
  apiKey: string;
  apiSecret: string;
};

export type DeployResponse = {
  name: string;
  id: string;
  success: boolean;
  notice?: string;
  error?: string;
  [k: string]: any;
};

export type DeployOutput<T> = { removed: T[]; created: T[]; updated: T[] };

export type ListPlatformResources = {
  monitors: PlatformMonitor[];
  actions: PlatformAction[];
  notifications: PlatformNotification[];
  categories: PlatformCategory[];
  contracts: DefenderContract[];
  relayerApiKeys: PlatformRelayerApiKey[];
  secrets: string[];
  deploymentConfigs: PlatformDeploymentConfig[];
  blockExplorerApiKeys: PlatformBlockExplorerApiKey[];
};

export type YDeploymentConfig = {
  relayer: YRelayer;
};

export type YBlockExplorerApiKey = {
  key: string;
  network: Network;
};
