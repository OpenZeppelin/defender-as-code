/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ActionOrDefenderID = Action | DefenderID1;
export type RelayerOrDefenderID = Relayer | DefenderID;
export type Network = SupportedNetwork | TenantNetwork;
export type SupportedNetwork = PublicNetwork | CustomNetwork;
export type PublicNetwork =
  | 'mainnet'
  | 'sepolia'
  | 'goerli'
  | 'xdai'
  | 'sokol'
  | 'fuse'
  | 'bsc'
  | 'bsctest'
  | 'fantom'
  | 'fantomtest'
  | 'moonbase'
  | 'moonriver'
  | 'moonbeam'
  | 'matic'
  | 'mumbai'
  | 'avalanche'
  | 'fuji'
  | 'arbitrum'
  | 'arbitrum-nova'
  | 'arbitrum-goerli'
  | 'arbitrum-sepolia'
  | 'optimism'
  | 'optimism-goerli'
  | 'celo'
  | 'alfajores'
  | 'harmony-s0'
  | 'harmony-test-s0'
  | 'aurora'
  | 'auroratest'
  | 'hedera'
  | 'hederatest'
  | 'zksync'
  | 'zksync-goerli'
  | 'base'
  | 'base-goerli'
  | 'linea-goerli'
  | 'linea'
  | 'mantle'
  | 'scroll'
  | 'scroll-sepolia'
  | 'meld'
  | 'meld-kanazawa';
export type CustomNetwork = 'x-dfk-avax-chain' | 'x-dfk-avax-chain-test' | 'x-security-alliance';
export type TenantNetwork = string;
export type AddressFromRelayer = {} | string;
export type WhitelistReceivers = string[];
export type RelayerAPIKeys = string[];
export type DefenderID = string;
export type TriggerType = 'schedule' | 'webhook' | 'sentinel' | 'monitor-filter';
export type TriggerCron = string;
export type TriggerFrequency = number;
export type DefenderID1 = string;
export type NotificationOrDefenderID = Notification | DefenderID2;
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
export type DefenderID2 = string;
export type CategoryOrDefenderID = Category | DefenderID3;
export type NotificationOrDefenderID1 = Notification | DefenderID2;
export type CategoryNotificationIds = NotificationOrDefenderID1[];
export type DefenderID3 = string;
export type RelayerOrDefenderID1 = Relayer | DefenderID;
export type PolicyOrDefenderID = Policy1 | DefenderID4;
export type DefenderID4 = string;
export type ContractOrDefenderID = Contract | DefenderID5;
export type Address = string;
export type Network1 = SupportedNetwork | TenantNetwork;
export type AbiType = StringABI | ArrayABI;
export type StringABI = string;
export type ArrayABI = unknown[];
export type DefenderID5 = string;
export type MonitorOrDefenderID = Monitor | DefenderID6;
export type Monitor = BlockMonitor | FortaMonitor;
export type Network2 = SupportedNetwork | TenantNetwork;
export type ContractOrDefenderID1 = Contract | DefenderID5;
export type Contracts1 = ContractOrDefenderID1[];
export type Address1 = string;
export type Addresses = Address1[];
export type ActionOrDefenderID1 = Action | DefenderID1;
export type ActionOrDefenderID2 = Action | DefenderID1;
export type CategoryOrDefenderID1 = Category | DefenderID3;
export type NotificationOrDefenderID2 = Notification | DefenderID2;
export type Channels = NotificationOrDefenderID2[];
export type Event = EventItems[];
export type Function = FunctionItems[];
export type RiskCategory = 'NONE' | 'GOVERNANCE' | 'ACCESS-CONTROL' | 'SUSPICIOUS' | 'FINANCIAL' | 'TECHNICAL';
export type Network3 = SupportedNetwork | TenantNetwork;
export type ContractOrDefenderID2 = Contract | DefenderID5;
export type Contracts2 = ContractOrDefenderID2[];
export type Address2 = string;
export type Addresses1 = Address2[];
export type ActionOrDefenderID3 = Action | DefenderID1;
export type ActionOrDefenderID4 = Action | DefenderID1;
export type CategoryOrDefenderID2 = Category | DefenderID3;
export type NotificationOrDefenderID3 = Notification | DefenderID2;
export type Channels1 = NotificationOrDefenderID3[];
export type AlertIDs = string[];
export type AgentIDs = string[];
export type DefenderID6 = string;
export type BlockExplorerApiKeyOrDefenderID = BlockExplorerApiKey | DefenderID7;
export type Network4 = SupportedNetwork | TenantNetwork;
export type DefenderID7 = string;
export type ForkedNetworkOrDefenderID = ForkedNetworkRequest | DefenderID8;
export type DefenderID8 = string;
export type PrivateNetworkOrDefenderID = PrivateNetworkRequest | DefenderID9;
export type Address3 = string;
export type Address4 = string;
export type Address5 = string;
export type Address6 = string;
export type DefenderID9 = string;

export interface Resources {
  actions?: Actions;
  notifications?: Notifications;
  categories?: Categories;
  relayers?: Relayers;
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
}
export interface Policy {
  'gas-price-cap'?: number;
  'whitelist-receivers'?: WhitelistReceivers;
  'eip1559-pricing'?: boolean;
  'private-transactions'?: boolean;
}
export interface Trigger {
  type: TriggerType;
  cron?: TriggerCron;
  frequency?: TriggerFrequency;
}
export interface Notifications {
  [k: string]: NotificationOrDefenderID;
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
export interface Categories {
  [k: string]: CategoryOrDefenderID;
}
export interface Category {
  name: string;
  description?: string;
  'notification-ids'?: CategoryNotificationIds;
}
export interface Relayers {
  [k: string]: RelayerOrDefenderID1;
}
export interface Policies {
  [k: string]: PolicyOrDefenderID;
}
export interface Policy1 {
  'gas-price-cap'?: number;
  'whitelist-receivers'?: WhitelistReceivers;
  'eip1559-pricing'?: boolean;
  'private-transactions'?: boolean;
}
export interface Contracts {
  [k: string]: ContractOrDefenderID;
}
export interface Contract {
  name: string;
  address: Address;
  network: Network1;
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
  network: Network2;
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
  category?: CategoryOrDefenderID1;
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
export interface FortaMonitor {
  name: string;
  type: 'FORTA';
  network?: Network3;
  contracts?: Contracts2;
  addresses?: Addresses1;
  abi?: AbiType;
  'alert-threshold'?: AlertThreshold1;
  paused?: boolean;
  'action-condition'?: ActionOrDefenderID3;
  'action-trigger'?: ActionOrDefenderID4;
  'notify-config': NotifyConfig1;
  conditions?: Conditions1;
  'forta-node-id'?: string;
  'forta-last-processed-time'?: string;
  'agent-ids'?: AgentIDs;
  'risk-category'?: RiskCategory;
}
export interface AlertThreshold1 {
  amount?: number;
  'window-seconds'?: number;
}
export interface NotifyConfig1 {
  timeout?: number;
  message?: string;
  'message-subject'?: string;
  category?: CategoryOrDefenderID2;
  channels: Channels1;
}
export interface Conditions1 {
  'min-scanner-count': number;
  severity?: 0 | 1 | 2 | 3 | 4 | 5;
  'alert-ids'?: AlertIDs;
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
  master: Address3;
  'proxy-factory': Address4;
  'multi-send-call-only': Address5;
  'create-call'?: Address6;
}
