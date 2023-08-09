/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Network =
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
  | 'optimism'
  | 'optimism-goerli'
  | 'arbitrum'
  | 'arbitrum-nova'
  | 'arbitrum-goerli'
  | 'celo'
  | 'alfajores'
  | 'harmony-s0'
  | 'harmony-test-s0'
  | 'aurora'
  | 'auroratest'
  | 'hedera'
  | 'hederatest'
  | 'x-dfk-avax-chain'
  | 'x-dfk-avax-chain-test'
  | 'zksync'
  | 'zksync-goerli'
  | 'base'
  | 'base-goerli'
  | 'linea'
  | 'linea-goerli';
export type WhitelistReceivers = string[];
export type RelayerAPIKeys = string[];
export type TriggerType = 'schedule' | 'webhook' | 'sentinel' | 'monitor-filter';
export type TriggerCron = string;
export type TriggerFrequency = number;
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
export type CategoryNotificationIds = Notification1[];
export type Address = string;
export type Network1 =
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
  | 'optimism'
  | 'optimism-goerli'
  | 'arbitrum'
  | 'arbitrum-nova'
  | 'arbitrum-goerli'
  | 'celo'
  | 'alfajores'
  | 'harmony-s0'
  | 'harmony-test-s0'
  | 'aurora'
  | 'auroratest'
  | 'hedera'
  | 'hederatest'
  | 'x-dfk-avax-chain'
  | 'x-dfk-avax-chain-test'
  | 'zksync'
  | 'zksync-goerli'
  | 'base'
  | 'base-goerli'
  | 'linea'
  | 'linea-goerli';
export type AbiType = StringABI | ArrayABI;
export type StringABI = string;
export type ArrayABI = unknown[];
export type Monitor = BlockMonitor | FortaMonitor;
export type Network2 =
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
  | 'optimism'
  | 'optimism-goerli'
  | 'arbitrum'
  | 'arbitrum-nova'
  | 'arbitrum-goerli'
  | 'celo'
  | 'alfajores'
  | 'harmony-s0'
  | 'harmony-test-s0'
  | 'aurora'
  | 'auroratest'
  | 'hedera'
  | 'hederatest'
  | 'x-dfk-avax-chain'
  | 'x-dfk-avax-chain-test'
  | 'zksync'
  | 'zksync-goerli'
  | 'base'
  | 'base-goerli'
  | 'linea'
  | 'linea-goerli';
export type Address1 = string;
export type Addresses = Address1[];
export type Channels = Notification2[];
export type Event = EventItems[];
export type Function = FunctionItems[];
export type RiskCategory = 'NONE' | 'GOVERNANCE' | 'ACCESS-CONTROL' | 'SUSPICIOUS' | 'FINANCIAL' | 'TECHNICAL';
export type Network3 =
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
  | 'optimism'
  | 'optimism-goerli'
  | 'arbitrum'
  | 'arbitrum-nova'
  | 'arbitrum-goerli'
  | 'celo'
  | 'alfajores'
  | 'harmony-s0'
  | 'harmony-test-s0'
  | 'aurora'
  | 'auroratest'
  | 'hedera'
  | 'hederatest'
  | 'x-dfk-avax-chain'
  | 'x-dfk-avax-chain-test'
  | 'zksync'
  | 'zksync-goerli'
  | 'base'
  | 'base-goerli'
  | 'linea'
  | 'linea-goerli';
export type Address2 = string;
export type Addresses1 = Address2[];
export type Channels1 = Notification3[];
export type AlertIDs = string[];
export type AgentIDs = string[];
export type Network4 =
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
  | 'optimism'
  | 'optimism-goerli'
  | 'arbitrum'
  | 'arbitrum-nova'
  | 'arbitrum-goerli'
  | 'celo'
  | 'alfajores'
  | 'harmony-s0'
  | 'harmony-test-s0'
  | 'aurora'
  | 'auroratest'
  | 'hedera'
  | 'hederatest'
  | 'x-dfk-avax-chain'
  | 'x-dfk-avax-chain-test'
  | 'zksync'
  | 'zksync-goerli'
  | 'base'
  | 'base-goerli'
  | 'linea'
  | 'linea-goerli';

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
}
export interface Actions {
  [k: string]: Action;
}
export interface Action {
  name: string;
  path: string;
  relayer?: Relayer;
  trigger: Trigger;
  paused: boolean;
}
export interface Relayer {
  name: string;
  network: Network;
  'min-balance': number;
  'address-from-relayer'?: AddressFromRelayer;
  policy?: Policy;
  'api-keys'?: RelayerAPIKeys;
}
export interface AddressFromRelayer {}
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
  [k: string]: Notification;
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
  [k: string]: Category;
}
export interface Category {
  name: string;
  description?: string;
  'notification-ids'?: CategoryNotificationIds;
}
export interface Notification1 {
  type: NotificationType;
  name: string;
  paused: boolean;
  config: Config;
}
export interface Relayers {
  [k: string]: Relayer1;
}
export interface Relayer1 {
  name: string;
  network: Network;
  'min-balance': number;
  'address-from-relayer'?: AddressFromRelayer;
  policy?: Policy;
  'api-keys'?: RelayerAPIKeys;
}
export interface Policies {
  [k: string]: Policy1;
}
export interface Policy1 {
  'gas-price-cap'?: number;
  'whitelist-receivers'?: WhitelistReceivers;
  'eip1559-pricing'?: boolean;
  'private-transactions'?: boolean;
}
export interface Contracts {
  [k: string]: Contract;
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
  [k: string]: Monitor;
}
export interface BlockMonitor {
  name: string;
  type: 'BLOCK';
  network: Network2;
  addresses: Addresses;
  abi?: AbiType;
  'alert-threshold'?: AlertThreshold;
  paused?: boolean;
  /**
   * A boolean value that indicates whether the UI should skip ABI validation checks. Enable this if you wish to use custom or partial ABIs for your monitors.
   */
  'skip-abi-validation'?: boolean;
  'action-condition'?: Action1;
  'action-trigger'?: Action2;
  'confirm-level'?: ('safe' | 'finalized') | number;
  'notify-config': NotifyConfig;
  conditions?: Conditions;
  'risk-category'?: RiskCategory;
}
export interface AlertThreshold {
  amount: number;
  'window-seconds': number;
}
export interface Action1 {
  name: string;
  path: string;
  relayer?: Relayer;
  trigger: Trigger;
  paused: boolean;
}
export interface Action2 {
  name: string;
  path: string;
  relayer?: Relayer;
  trigger: Trigger;
  paused: boolean;
}
export interface NotifyConfig {
  timeout?: number;
  message?: string;
  'message-subject'?: string;
  category?: Category1;
  channels: Channels;
}
export interface Category1 {
  name: string;
  description?: string;
  'notification-ids'?: CategoryNotificationIds;
}
export interface Notification2 {
  type: NotificationType;
  name: string;
  paused: boolean;
  config: Config;
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
  network: Network3;
  addresses?: Addresses1;
  abi?: AbiType;
  'alert-threshold'?: AlertThreshold1;
  paused?: boolean;
  'action-condition'?: Action3;
  'action-trigger'?: Action4;
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
export interface Action3 {
  name: string;
  path: string;
  relayer?: Relayer;
  trigger: Trigger;
  paused: boolean;
}
export interface Action4 {
  name: string;
  path: string;
  relayer?: Relayer;
  trigger: Trigger;
  paused: boolean;
}
export interface NotifyConfig1 {
  timeout?: number;
  message?: string;
  'message-subject'?: string;
  category?: Category2;
  channels: Channels1;
}
export interface Category2 {
  name: string;
  description?: string;
  'notification-ids'?: CategoryNotificationIds;
}
export interface Notification3 {
  type: NotificationType;
  name: string;
  paused: boolean;
  config: Config;
}
export interface Conditions1 {
  'min-scanner-count': number;
  severity?: 0 | 1 | 2 | 3 | 4 | 5;
  'alert-ids'?: AlertIDs;
}
export interface BlockExplorerApiKeys {
  [k: string]: BlockExplorerApiKey;
}
export interface BlockExplorerApiKey {
  key: string;
  network: Network4;
}
