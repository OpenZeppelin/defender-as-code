/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ActionOrDefenderID = Action | DefenderID3;
export type RelayerOrDefenderID = Relayer | DefenderID2;
export type Network = SupportedNetwork | TenantNetwork;
export type SupportedNetwork = PublicNetwork | CustomNetwork;
export type PublicNetwork =
  | 'alfajores'
  | 'amoy'
  | 'arbitrum'
  | 'arbitrum-nova'
  | 'arbitrum-sepolia'
  | 'aurora'
  | 'auroratest'
  | 'avalanche'
  | 'base'
  | 'base-sepolia'
  | 'bsc'
  | 'bsctest'
  | 'celo'
  | 'fantom'
  | 'fantomtest'
  | 'fuji'
  | 'fuse'
  | 'hedera'
  | 'hederatest'
  | 'holesky'
  | 'linea'
  | 'linea-sepolia'
  | 'mainnet'
  | 'mantle'
  | 'mantle-sepolia'
  | 'matic'
  | 'matic-zkevm'
  | 'matic-zkevm-testnet'
  | 'meld'
  | 'meld-kanazawa'
  | 'moonbase'
  | 'moonbeam'
  | 'moonriver'
  | 'mumbai'
  | 'optimism'
  | 'optimism-sepolia'
  | 'scroll'
  | 'scroll-sepolia'
  | 'sepolia'
  | 'xdai'
  | 'zksync'
  | 'zksync-sepolia'
  | 'japan'
  | 'japan-testnet'
  | 'unichain'
  | 'unichain-sepolia'
  | 'geist-polter'
  | 'geist-mainnet'
  | 'peaq-mainnet'
  | 'peaq-agung';
export type CustomNetwork = 'x-dfk-avax-chain' | 'x-dfk-avax-chain-test' | 'x-security-alliance';
export type TenantNetwork = string;
export type AddressFromRelayer = {} | string;
export type WhitelistReceivers = string[];
export type PrivateTransactionMode = FlashbotTransactionMode;
/**
 * Fast mode has 2 key differences from the default Protect experience:
 * 1. Shared with all builders: By default, Protect transactions are only shared with the Flashbots Builder, which builds only a subset of all Ethereum blocks. In fast mode, transactions are shared with all registered builders to increase the number of blocks the user's transaction can be included in.
 * 2. Larger refund paid to validator: By default, only 10% of MEV-Share refunds are paid to validators. In fast mode, validators receive 50% of refunds which makes it more likely that the user’s transactions will be chosen in a given block.
 */
export type FlashbotTransactionMode = 'flashbots-normal' | 'flashbots-fast';
export type RelayerAPIKeys = string[];
export type DefenderID = string;
export type Events = ('pending' | 'sent' | 'submitted' | 'inmempool' | 'mined' | 'confirmed' | 'failed' | 'expired')[];
export type NotificationOrDefenderID = Notification | DefenderID1;
export type NotificationType =
  | 'slack'
  | 'email'
  | 'discord'
  | 'telegram'
  | 'datadog'
  | 'webhook'
  | 'opsgenie'
  | 'pager-duty';
export type Config = EmailConfig | TelegramConfig | DatadogConfig | UrlConfig | OpsgenieConfig | PagerDutyConfig;
export type Emails = string[];
export type OpsgenieInstanceLocation = 'US' | 'EU';
export type OpsgenieUserType = 'team' | 'user' | 'escalation' | 'schedule';
export type OpsgenieConfigResponders = OpsgenieUser[];
export type OpsgenieConfigVisibleTo = OpsgenieUser[];
/**
 * @maxItems 10
 */
export type OpsgenieConfigActions =
  | []
  | [string]
  | [string, string]
  | [string, string, string]
  | [string, string, string, string]
  | [string, string, string, string, string]
  | [string, string, string, string, string, string]
  | [string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string, string, string];
/**
 * @maxItems 10
 */
export type OpsgenieConfigTags =
  | []
  | [string]
  | [string, string]
  | [string, string, string]
  | [string, string, string, string]
  | [string, string, string, string, string]
  | [string, string, string, string, string, string]
  | [string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string, string, string];
export type OpsgeniePriorityLevel = 'P1' | 'P2' | 'P3' | 'P4' | 'P5';
export type PagerDutyEventType = 'change' | 'alert';
export type PagerDutyEventAction = 'trigger' | 'acknowledge' | 'resolve';
export type PagerDutySeverity = 'critical' | 'error' | 'warning' | 'info';
export type DefenderID1 = string;
export type NotificationIds = NotificationOrDefenderID[];
export type DefenderID2 = string;
export type TriggerType = 'schedule' | 'webhook' | 'sentinel' | 'monitor-filter';
export type TriggerCron = string;
export type TriggerFrequency = number;
export type DefenderID3 = string;
export type NotificationOrDefenderID1 = Notification | DefenderID1;
export type RelayerOrDefenderID1 = Relayer | DefenderID2;
export type RelayerGroupOrDefenderID = RelayerGroup | DefenderID4;
export type Network1 = SupportedNetwork | TenantNetwork;
export type RelayerGroupAPIKeys = string[];
export type DefenderID4 = string;
export type PolicyOrDefenderID = Policy2 | DefenderID5;
export type DefenderID5 = string;
export type ContractOrDefenderID = Contract | DefenderID6;
export type Address = string;
export type Network2 = SupportedNetwork | TenantNetwork;
export type AbiType = StringABI | ArrayABI;
export type StringABI = string;
export type ArrayABI = unknown[];
export type DefenderID6 = string;
export type MonitorOrDefenderID = Monitor | DefenderID7;
export type Monitor = BlockMonitor;
export type Network3 = SupportedNetwork | TenantNetwork;
export type ContractOrDefenderID1 = Contract | DefenderID6;
export type Contracts1 = ContractOrDefenderID1[];
export type Address1 = string;
export type Addresses = Address1[];
export type ActionOrDefenderID1 = Action | DefenderID3;
export type ActionOrDefenderID2 = Action | DefenderID3;
export type NotificationOrDefenderID2 = Notification | DefenderID1;
export type Channels = NotificationOrDefenderID2[];
export type Event = EventItems[];
export type Function = FunctionItems[];
export type RiskCategory = 'NONE' | 'GOVERNANCE' | 'ACCESS-CONTROL' | 'SUSPICIOUS' | 'FINANCIAL' | 'TECHNICAL';
export type DefenderID7 = string;
export type BlockExplorerApiKeyOrDefenderID = BlockExplorerApiKey | DefenderID8;
export type Network4 = SupportedNetwork | TenantNetwork;
export type DefenderID8 = string;
export type ForkedNetworkOrDefenderID = ForkedNetworkRequest | DefenderID9;
export type DefenderID9 = string;
export type PrivateNetworkOrDefenderID = PrivateNetworkRequest | DefenderID10;
export type Address2 = string;
export type Address3 = string;
export type Address4 = string;
export type Address5 = string;
export type DefenderID10 = string;

export interface Resources {
  actions?: Actions;
  notifications?: Notifications;
  relayers?: Relayers;
  'relayer-groups'?: RelayerGroups;
  policies?: Policies;
  contracts?: Contracts;
  secrets?: ActionSecrets;
  monitors?: Monitors;
  'block-explorer-api-keys'?: BlockExplorerApiKeys;
  'forked-networks'?: ForkedNetworks;
  'private-networks'?: PrivateNetworks;
}
export interface Actions {
  [k: string]: ActionOrDefenderID;
}
export interface Action {
  name: string;
  path: string;
  relayer?: RelayerOrDefenderID;
  trigger: Trigger;
  paused: boolean;
  'environment-variables'?: {
    [k: string]: string;
  };
}
export interface Relayer {
  name: string;
  network: Network;
  'min-balance': number;
  'address-from-relayer'?: AddressFromRelayer;
  policy?: Policy;
  'api-keys'?: RelayerAPIKeys;
  'relayer-group-id'?: DefenderID;
  'notification-channels'?: NotificationChannels;
}
export interface Policy {
  'gas-price-cap'?: number;
  'whitelist-receivers'?: WhitelistReceivers;
  'eip1559-pricing'?: boolean;
  'private-transactions'?: boolean | PrivateTransactionMode;
}
export interface NotificationChannels {
  events: Events;
  'notification-ids': NotificationIds;
}
export interface Notification {
  type: NotificationType;
  name: string;
  paused: boolean;
  config: Config;
}
export interface EmailConfig {
  emails: Emails;
}
export interface TelegramConfig {
  'bot-token': string;
  'chat-id': string;
}
export interface DatadogConfig {
  'api-key': string;
  'metric-prefix': string;
}
export interface UrlConfig {
  url: string;
}
export interface OpsgenieConfig {
  apiKey: string;
  instanceLocation: OpsgenieInstanceLocation;
  alias?: string;
  responders?: OpsgenieConfigResponders;
  visibleTo?: OpsgenieConfigVisibleTo;
  actions?: OpsgenieConfigActions;
  tags?: OpsgenieConfigTags;
  details?: OpsgenieConfigDetails;
  entity?: string;
  priority?: OpsgeniePriorityLevel;
  note?: string;
}
export interface OpsgenieUser {
  username: string;
  fullName?: string;
  id?: string;
  type: OpsgenieUserType;
}
export interface OpsgenieConfigDetails {
  [k: string]: string;
}
export interface PagerDutyConfig {
  token: string;
  eventType: PagerDutyEventType;
  routingKey: string;
  eventAction?: PagerDutyEventAction;
  dedupKey?: string;
  severity?: PagerDutySeverity;
  component?: string;
  group?: string;
  class?: string;
  customDetails?: PagerDutyConfigCustomDetails;
}
export interface PagerDutyConfigCustomDetails {
  [k: string]: string;
}
export interface Trigger {
  type: TriggerType;
  cron?: TriggerCron;
  frequency?: TriggerFrequency;
}
export interface Notifications {
  [k: string]: NotificationOrDefenderID1;
}
export interface Relayers {
  [k: string]: RelayerOrDefenderID1;
}
export interface RelayerGroups {
  [k: string]: RelayerGroupOrDefenderID;
}
export interface RelayerGroup {
  name: string;
  network: Network1;
  'min-balance': number;
  relayers?: number;
  policy?: Policy1;
  'user-weight-caps'?: UserWeightCaps;
  'notification-channels'?: NotificationChannels1;
  'api-keys'?: RelayerGroupAPIKeys;
}
export interface Policy1 {
  'gas-price-cap'?: number;
  'whitelist-receivers'?: WhitelistReceivers;
  'eip1559-pricing'?: boolean;
  'private-transactions'?: boolean | PrivateTransactionMode;
}
export interface UserWeightCaps {
  [k: string]: number;
}
export interface NotificationChannels1 {
  events: Events;
  'notification-ids': NotificationIds;
}
export interface Policies {
  [k: string]: PolicyOrDefenderID;
}
export interface Policy2 {
  'gas-price-cap'?: number;
  'whitelist-receivers'?: WhitelistReceivers;
  'eip1559-pricing'?: boolean;
  'private-transactions'?: boolean | PrivateTransactionMode;
}
export interface Contracts {
  [k: string]: ContractOrDefenderID;
}
export interface Contract {
  name: string;
  address: Address;
  network: Network2;
  abi?: AbiType;
  'nat-spec'?: string;
}
export interface ActionSecrets {
  global?: GlobalSecrets;
  stack?: StackSecrets;
}
export interface GlobalSecrets {
  [k: string]: string;
}
export interface StackSecrets {
  [k: string]: string;
}
export interface Monitors {
  [k: string]: MonitorOrDefenderID;
}
export interface BlockMonitor {
  name: string;
  type: 'BLOCK';
  network: Network3;
  contracts?: Contracts1;
  addresses?: Addresses;
  abi?: AbiType;
  'alert-threshold'?: AlertThreshold;
  paused?: boolean;
  /**
   * A boolean value that indicates whether the UI should skip ABI validation checks. Enable this if you wish to use custom or partial ABIs for your monitors.
   */
  'skip-abi-validation'?: boolean;
  'action-condition'?: ActionOrDefenderID1;
  'action-trigger'?: ActionOrDefenderID2;
  'confirm-level'?: ('safe' | 'finalized') | number;
  'notify-config': NotifyConfig;
  conditions?: Conditions;
  'risk-category'?: RiskCategory;
}
export interface AlertThreshold {
  amount: number;
  'window-seconds': number;
}
export interface NotifyConfig {
  timeout?: number;
  message?: string;
  'message-subject'?: string;
  'severity-level'?: 'LOW' | 'MEDIUM' | 'HIGH';
  channels: Channels;
}
export interface Conditions {
  event?: Event;
  function?: Function;
  transaction?: string;
}
export interface EventItems {
  signature: string;
  expression?: string;
}
export interface FunctionItems {
  signature: string;
  expression?: string;
}
export interface BlockExplorerApiKeys {
  [k: string]: BlockExplorerApiKeyOrDefenderID;
}
export interface BlockExplorerApiKey {
  key: string;
  network: Network4;
}
export interface ForkedNetworks {
  [k: string]: ForkedNetworkOrDefenderID;
}
export interface ForkedNetworkRequest {
  name: TenantNetwork;
  'supported-network': SupportedNetwork;
  'rpc-url': string;
  'api-key'?: string;
  'block-explorer-url'?: string;
}
export interface PrivateNetworks {
  [k: string]: PrivateNetworkOrDefenderID;
}
export interface PrivateNetworkRequest {
  name: TenantNetwork;
  configuration: TenantNetworkConfiguration;
  'rpc-url': string;
  'api-key'?: string;
  'block-explorer-url'?: string;
}
export interface TenantNetworkConfiguration {
  symbol: string;
  eips?: TenantNetworkEIPConfiguration;
  'safe-contracts'?: SafeContracts;
  'subgraph-url'?: string;
}
export interface TenantNetworkEIPConfiguration {
  isEIP1559?: boolean;
}
export interface SafeContracts {
  master: Address2;
  'proxy-factory': Address3;
  'multi-send-call-only': Address4;
  'create-call'?: Address5;
}
