## Definitions Type

unknown ([Definitions](definitions.md))

# Definitions Definitions

## Definitions group defender-id

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/defender-id"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group address

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/address"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group risk-category

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/risk-category"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group public-network

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/public-network"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group custom-network

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/custom-network"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group tenant-network

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/tenant-network"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group network

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/network"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group supported-network

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/supported-network"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group flashbotTransactionMode

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/flashbotTransactionMode"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group privateTransactionMode

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/privateTransactionMode"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group policy

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/policy"}
```

| Property                                      | Type      | Required | Nullable       | Defined by                                                                                                                                                     |
| :-------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [gas-price-cap](#gas-price-cap)               | `integer` | Optional | cannot be null | [Definitions](definitions-definitions-policy-properties-gas-price-cap.md "definitions.schema.json#/definitions/policy/properties/gas-price-cap")               |
| [whitelist-receivers](#whitelist-receivers)   | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-policy-properties-whitelistreceivers.md "definitions.schema.json#/definitions/policy/properties/whitelist-receivers")    |
| [eip1559-pricing](#eip1559-pricing)           | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-policy-properties-eip1559-pricing.md "definitions.schema.json#/definitions/policy/properties/eip1559-pricing")           |
| [private-transactions](#private-transactions) | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-policy-properties-private-transactions.md "definitions.schema.json#/definitions/policy/properties/private-transactions") |

### gas-price-cap



`gas-price-cap`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy-properties-gas-price-cap.md "definitions.schema.json#/definitions/policy/properties/gas-price-cap")

#### gas-price-cap Type

`integer`

### whitelist-receivers



`whitelist-receivers`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy-properties-whitelistreceivers.md "definitions.schema.json#/definitions/policy/properties/whitelist-receivers")

#### whitelist-receivers Type

`string[]`

### eip1559-pricing



`eip1559-pricing`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy-properties-eip1559-pricing.md "definitions.schema.json#/definitions/policy/properties/eip1559-pricing")

#### eip1559-pricing Type

`boolean`

### private-transactions



`private-transactions`

*   is optional

*   Type: merged type ([Details](definitions-definitions-policy-properties-private-transactions.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy-properties-private-transactions.md "definitions.schema.json#/definitions/policy/properties/private-transactions")

#### private-transactions Type

merged type ([Details](definitions-definitions-policy-properties-private-transactions.md))

one (and only one) of

*   [Untitled boolean in Definitions](definitions-definitions-policy-properties-private-transactions-oneof-0.md "check type definition")

*   one (and only one) of

    *   [FlashbotTransactionMode](definitions-definitions-privatetransactionmode-oneof-flashbottransactionmode.md "check type definition")

## Definitions group relayer

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/relayer"}
```

| Property                                        | Type      | Required | Nullable       | Defined by                                                                                                                                                     |
| :---------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                                   | `string`  | Required | cannot be null | [Definitions](definitions-definitions-relayer-properties-name.md "definitions.schema.json#/definitions/relayer/properties/name")                               |
| [network](#network)                             | Merged    | Required | cannot be null | [Definitions](definitions-definitions-relayer-properties-network.md "definitions.schema.json#/definitions/relayer/properties/network")                         |
| [min-balance](#min-balance)                     | `integer` | Required | cannot be null | [Definitions](definitions-definitions-relayer-properties-min-balance.md "definitions.schema.json#/definitions/relayer/properties/min-balance")                 |
| [address-from-relayer](#address-from-relayer)   | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-relayer-properties-addressfromrelayer.md "definitions.schema.json#/definitions/relayer/properties/address-from-relayer") |
| [policy](#policy)                               | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-policy.md "definitions.schema.json#/definitions/relayer/properties/policy")                                              |
| [api-keys](#api-keys)                           | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-relayer-properties-relayerapikeys.md "definitions.schema.json#/definitions/relayer/properties/api-keys")                 |
| [relayer-group-id](#relayer-group-id)           | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-relayer-properties-defenderid.md "definitions.schema.json#/definitions/relayer/properties/relayer-group-id")             |
| [notification-channels](#notification-channels) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-notificationchannels.md "definitions.schema.json#/definitions/relayer/properties/notification-channels")                 |

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-name.md "definitions.schema.json#/definitions/relayer/properties/name")

#### name Type

`string`

### network



`network`

*   is required

*   Type: merged type ([Network](definitions-definitions-relayer-properties-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-network.md "definitions.schema.json#/definitions/relayer/properties/network")

#### network Type

merged type ([Network](definitions-definitions-relayer-properties-network.md))

any of

*   one (and only one) of

    *   [PublicNetwork](definitions-definitions-supportednetwork-oneof-publicnetwork.md "check type definition")

    *   [CustomNetwork](definitions-definitions-supportednetwork-oneof-customnetwork.md "check type definition")

*   [TenantNetwork](definitions-definitions-network-anyof-tenantnetwork.md "check type definition")

#### network Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### min-balance



`min-balance`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-min-balance.md "definitions.schema.json#/definitions/relayer/properties/min-balance")

#### min-balance Type

`integer`

### address-from-relayer



`address-from-relayer`

*   is optional

*   Type: merged type ([AddressFromRelayer](definitions-definitions-relayer-properties-addressfromrelayer.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-addressfromrelayer.md "definitions.schema.json#/definitions/relayer/properties/address-from-relayer")

#### address-from-relayer Type

merged type ([AddressFromRelayer](definitions-definitions-relayer-properties-addressfromrelayer.md))

any of

*   [Untitled object in Definitions](definitions-definitions-relayer-properties-addressfromrelayer-anyof-0.md "check type definition")

*   [Untitled string in Definitions](definitions-definitions-relayer-properties-addressfromrelayer-anyof-1.md "check type definition")

### policy



`policy`

*   is optional

*   Type: `object` ([Policy](definitions-definitions-policy.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy.md "definitions.schema.json#/definitions/relayer/properties/policy")

#### policy Type

`object` ([Policy](definitions-definitions-policy.md))

#### policy Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### api-keys



`api-keys`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-relayerapikeys.md "definitions.schema.json#/definitions/relayer/properties/api-keys")

#### api-keys Type

`string[]`

### relayer-group-id



`relayer-group-id`

*   is optional

*   Type: `string` ([DefenderID](definitions-definitions-relayer-properties-defenderid.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-defenderid.md "definitions.schema.json#/definitions/relayer/properties/relayer-group-id")

#### relayer-group-id Type

`string` ([DefenderID](definitions-definitions-relayer-properties-defenderid.md))

#### relayer-group-id Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-(8|9|a|b)[0-9a-fA-F]{3}-[0-9a-fA-F]{12}$
```

[try pattern](https://regexr.com/?expression=%5E%5B0-9a-fA-F%5D%7B8%7D-%5B0-9a-fA-F%5D%7B4%7D-4%5B0-9a-fA-F%5D%7B3%7D-\(8%7C9%7Ca%7Cb\)%5B0-9a-fA-F%5D%7B3%7D-%5B0-9a-fA-F%5D%7B12%7D%24 "try regular expression with regexr.com")

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### notification-channels



`notification-channels`

*   is optional

*   Type: `object` ([NotificationChannels](definitions-definitions-notificationchannels.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notificationchannels.md "definitions.schema.json#/definitions/relayer/properties/notification-channels")

#### notification-channels Type

`object` ([NotificationChannels](definitions-definitions-notificationchannels.md))

#### notification-channels Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## Definitions group notification-channels

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/notification-channels"}
```

| Property                              | Type    | Required | Nullable       | Defined by                                                                                                                                                                         |
| :------------------------------------ | :------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [events](#events)                     | `array` | Required | cannot be null | [Definitions](definitions-definitions-notificationchannels-properties-events.md "definitions.schema.json#/definitions/notification-channels/properties/events")                    |
| [notification-ids](#notification-ids) | `array` | Required | cannot be null | [Definitions](definitions-definitions-notificationchannels-properties-notificationids.md "definitions.schema.json#/definitions/notification-channels/properties/notification-ids") |

### events



`events`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notificationchannels-properties-events.md "definitions.schema.json#/definitions/notification-channels/properties/events")

#### events Type

`string[]`

### notification-ids



`notification-ids`

*   is required

*   Type: an array of merged types ([NotificationOrDefenderID](definitions-definitions-notificationchannels-properties-notificationids-notificationordefenderid.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notificationchannels-properties-notificationids.md "definitions.schema.json#/definitions/notification-channels/properties/notification-ids")

#### notification-ids Type

an array of merged types ([NotificationOrDefenderID](definitions-definitions-notificationchannels-properties-notificationids-notificationordefenderid.md))

## Definitions group relayer-group-relayer

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/relayer-group-relayer"}
```

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                             |
| :------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [relayer-id](#relayer-id) | `string` | Optional | cannot be null | [Definitions](definitions-definitions-relayergrouprelayer-properties-defenderid.md "definitions.schema.json#/definitions/relayer-group-relayer/properties/relayer-id") |
| [address](#address)       | `string` | Required | cannot be null | [Definitions](definitions-definitions-relayergrouprelayer-properties-address.md "definitions.schema.json#/definitions/relayer-group-relayer/properties/address")       |
| [key-id](#key-id)         | `string` | Optional | cannot be null | [Definitions](definitions-definitions-relayergrouprelayer-properties-key-id.md "definitions.schema.json#/definitions/relayer-group-relayer/properties/key-id")         |
| [balance](#balance)       | `string` | Optional | cannot be null | [Definitions](definitions-definitions-relayergrouprelayer-properties-balance.md "definitions.schema.json#/definitions/relayer-group-relayer/properties/balance")       |

### relayer-id



`relayer-id`

*   is optional

*   Type: `string` ([DefenderID](definitions-definitions-relayergrouprelayer-properties-defenderid.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayergrouprelayer-properties-defenderid.md "definitions.schema.json#/definitions/relayer-group-relayer/properties/relayer-id")

#### relayer-id Type

`string` ([DefenderID](definitions-definitions-relayergrouprelayer-properties-defenderid.md))

#### relayer-id Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-(8|9|a|b)[0-9a-fA-F]{3}-[0-9a-fA-F]{12}$
```

[try pattern](https://regexr.com/?expression=%5E%5B0-9a-fA-F%5D%7B8%7D-%5B0-9a-fA-F%5D%7B4%7D-4%5B0-9a-fA-F%5D%7B3%7D-\(8%7C9%7Ca%7Cb\)%5B0-9a-fA-F%5D%7B3%7D-%5B0-9a-fA-F%5D%7B12%7D%24 "try regular expression with regexr.com")

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### address



`address`

*   is required

*   Type: `string` ([Address](definitions-definitions-relayergrouprelayer-properties-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayergrouprelayer-properties-address.md "definitions.schema.json#/definitions/relayer-group-relayer/properties/address")

#### address Type

`string` ([Address](definitions-definitions-relayergrouprelayer-properties-address.md))

#### address Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^0x[a-fA-F0-9]{40}$
```

[try pattern](https://regexr.com/?expression=%5E0x%5Ba-fA-F0-9%5D%7B40%7D%24 "try regular expression with regexr.com")

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### key-id



`key-id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayergrouprelayer-properties-key-id.md "definitions.schema.json#/definitions/relayer-group-relayer/properties/key-id")

#### key-id Type

`string`

### balance



`balance`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayergrouprelayer-properties-balance.md "definitions.schema.json#/definitions/relayer-group-relayer/properties/balance")

#### balance Type

`string`

## Definitions group relayer-group

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/relayer-group"}
```

| Property                                          | Type      | Required | Nullable       | Defined by                                                                                                                                                        |
| :------------------------------------------------ | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-1)                                   | `string`  | Required | cannot be null | [Definitions](definitions-definitions-relayergroup-properties-name.md "definitions.schema.json#/definitions/relayer-group/properties/name")                       |
| [network](#network-1)                             | Merged    | Required | cannot be null | [Definitions](definitions-definitions-network.md "definitions.schema.json#/definitions/relayer-group/properties/network")                                         |
| [min-balance](#min-balance-1)                     | `integer` | Required | cannot be null | [Definitions](definitions-definitions-relayergroup-properties-min-balance.md "definitions.schema.json#/definitions/relayer-group/properties/min-balance")         |
| [relayers](#relayers)                             | `integer` | Optional | cannot be null | [Definitions](definitions-definitions-relayergroup-properties-relayers.md "definitions.schema.json#/definitions/relayer-group/properties/relayers")               |
| [policy](#policy-1)                               | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-policy.md "definitions.schema.json#/definitions/relayer-group/properties/policy")                                           |
| [user-weight-caps](#user-weight-caps)             | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-relayergroup-properties-userweightcaps.md "definitions.schema.json#/definitions/relayer-group/properties/user-weight-caps") |
| [notification-channels](#notification-channels-1) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-notificationchannels.md "definitions.schema.json#/definitions/relayer-group/properties/notification-channels")              |
| [api-keys](#api-keys-1)                           | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-relayergroup-properties-relayergroupapikeys.md "definitions.schema.json#/definitions/relayer-group/properties/api-keys")    |

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayergroup-properties-name.md "definitions.schema.json#/definitions/relayer-group/properties/name")

#### name Type

`string`

### network



`network`

*   is required

*   Type: merged type ([Network](definitions-definitions-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-network.md "definitions.schema.json#/definitions/relayer-group/properties/network")

#### network Type

merged type ([Network](definitions-definitions-network.md))

any of

*   one (and only one) of

    *   [PublicNetwork](definitions-definitions-supportednetwork-oneof-publicnetwork.md "check type definition")

    *   [CustomNetwork](definitions-definitions-supportednetwork-oneof-customnetwork.md "check type definition")

*   [TenantNetwork](definitions-definitions-network-anyof-tenantnetwork.md "check type definition")

#### network Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### min-balance



`min-balance`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayergroup-properties-min-balance.md "definitions.schema.json#/definitions/relayer-group/properties/min-balance")

#### min-balance Type

`integer`

### relayers



`relayers`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayergroup-properties-relayers.md "definitions.schema.json#/definitions/relayer-group/properties/relayers")

#### relayers Type

`integer`

### policy



`policy`

*   is optional

*   Type: `object` ([Policy](definitions-definitions-policy.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy.md "definitions.schema.json#/definitions/relayer-group/properties/policy")

#### policy Type

`object` ([Policy](definitions-definitions-policy.md))

#### policy Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### user-weight-caps



`user-weight-caps`

*   is optional

*   Type: `object` ([UserWeightCaps](definitions-definitions-relayergroup-properties-userweightcaps.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayergroup-properties-userweightcaps.md "definitions.schema.json#/definitions/relayer-group/properties/user-weight-caps")

#### user-weight-caps Type

`object` ([UserWeightCaps](definitions-definitions-relayergroup-properties-userweightcaps.md))

### notification-channels



`notification-channels`

*   is optional

*   Type: `object` ([NotificationChannels](definitions-definitions-notificationchannels.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notificationchannels.md "definitions.schema.json#/definitions/relayer-group/properties/notification-channels")

#### notification-channels Type

`object` ([NotificationChannels](definitions-definitions-notificationchannels.md))

#### notification-channels Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### api-keys



`api-keys`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayergroup-properties-relayergroupapikeys.md "definitions.schema.json#/definitions/relayer-group/properties/api-keys")

#### api-keys Type

`string[]`

## Definitions group contract

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/contract"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                 |
| :-------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-2)       | `string` | Required | cannot be null | [Definitions](definitions-definitions-contract-properties-name.md "definitions.schema.json#/definitions/contract/properties/name")         |
| [address](#address-1) | `string` | Required | cannot be null | [Definitions](definitions-definitions-contract-properties-address.md "definitions.schema.json#/definitions/contract/properties/address")   |
| [network](#network-2) | Merged   | Required | cannot be null | [Definitions](definitions-definitions-network.md "definitions.schema.json#/definitions/contract/properties/network")                       |
| [abi](#abi)           | Merged   | Optional | cannot be null | [Definitions](definitions-definitions-abitype.md "definitions.schema.json#/definitions/contract/properties/abi")                           |
| [nat-spec](#nat-spec) | `string` | Optional | cannot be null | [Definitions](definitions-definitions-contract-properties-nat-spec.md "definitions.schema.json#/definitions/contract/properties/nat-spec") |

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-contract-properties-name.md "definitions.schema.json#/definitions/contract/properties/name")

#### name Type

`string`

### address



`address`

*   is required

*   Type: `string` ([Address](definitions-definitions-contract-properties-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-contract-properties-address.md "definitions.schema.json#/definitions/contract/properties/address")

#### address Type

`string` ([Address](definitions-definitions-contract-properties-address.md))

#### address Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^0x[a-fA-F0-9]{40}$
```

[try pattern](https://regexr.com/?expression=%5E0x%5Ba-fA-F0-9%5D%7B40%7D%24 "try regular expression with regexr.com")

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### network



`network`

*   is required

*   Type: merged type ([Network](definitions-definitions-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-network.md "definitions.schema.json#/definitions/contract/properties/network")

#### network Type

merged type ([Network](definitions-definitions-network.md))

any of

*   one (and only one) of

    *   [PublicNetwork](definitions-definitions-supportednetwork-oneof-publicnetwork.md "check type definition")

    *   [CustomNetwork](definitions-definitions-supportednetwork-oneof-customnetwork.md "check type definition")

*   [TenantNetwork](definitions-definitions-network-anyof-tenantnetwork.md "check type definition")

#### network Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### abi



`abi`

*   is optional

*   Type: merged type ([AbiType](definitions-definitions-abitype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-abitype.md "definitions.schema.json#/definitions/contract/properties/abi")

#### abi Type

merged type ([AbiType](definitions-definitions-abitype.md))

any of

*   [StringABI](definitions-definitions-abitype-anyof-stringabi.md "check type definition")

*   [ArrayABI](definitions-definitions-abitype-anyof-arrayabi.md "check type definition")

### nat-spec



`nat-spec`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-contract-properties-nat-spec.md "definitions.schema.json#/definitions/contract/properties/nat-spec")

#### nat-spec Type

`string`

## Definitions group notificationType

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/notificationType"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group datadogConfig

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/datadogConfig"}
```

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                                     |
| :------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [api-key](#api-key)             | `string` | Required | cannot be null | [Definitions](definitions-definitions-datadogconfig-properties-api-key.md "definitions.schema.json#/definitions/datadogConfig/properties/api-key")             |
| [metric-prefix](#metric-prefix) | `string` | Required | cannot be null | [Definitions](definitions-definitions-datadogconfig-properties-metric-prefix.md "definitions.schema.json#/definitions/datadogConfig/properties/metric-prefix") |

### api-key



`api-key`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-datadogconfig-properties-api-key.md "definitions.schema.json#/definitions/datadogConfig/properties/api-key")

#### api-key Type

`string`

### metric-prefix



`metric-prefix`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-datadogconfig-properties-metric-prefix.md "definitions.schema.json#/definitions/datadogConfig/properties/metric-prefix")

#### metric-prefix Type

`string`

#### metric-prefix Constraints

**maximum length**: the maximum number of characters for this string is: `100`

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[A-Za-z]+[A-Za-z0-9_\.]*\.$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z%5D%2B%5BA-Za-z0-9_%5C.%5D*%5C.%24 "try regular expression with regexr.com")

## Definitions group urlConfig

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/urlConfig"}
```

| Property    | Type     | Required | Nullable       | Defined by                                                                                                                         |
| :---------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| [url](#url) | `string` | Required | cannot be null | [Definitions](definitions-definitions-urlconfig-properties-url.md "definitions.schema.json#/definitions/urlConfig/properties/url") |

### url



`url`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-urlconfig-properties-url.md "definitions.schema.json#/definitions/urlConfig/properties/url")

#### url Type

`string`

#### url Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## Definitions group telegramBotConfig

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/telegramBotConfig"}
```

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                  |
| :---------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [bot-token](#bot-token) | `string` | Required | cannot be null | [Definitions](definitions-definitions-telegramconfig-properties-bot-token.md "definitions.schema.json#/definitions/telegramBotConfig/properties/bot-token") |
| [chat-id](#chat-id)     | `string` | Required | cannot be null | [Definitions](definitions-definitions-telegramconfig-properties-chat-id.md "definitions.schema.json#/definitions/telegramBotConfig/properties/chat-id")     |

### bot-token



`bot-token`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-telegramconfig-properties-bot-token.md "definitions.schema.json#/definitions/telegramBotConfig/properties/bot-token")

#### bot-token Type

`string`

### chat-id



`chat-id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-telegramconfig-properties-chat-id.md "definitions.schema.json#/definitions/telegramBotConfig/properties/chat-id")

#### chat-id Type

`string`

## Definitions group emailConfig

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/emailConfig"}
```

| Property          | Type    | Required | Nullable       | Defined by                                                                                                                                   |
| :---------------- | :------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| [emails](#emails) | `array` | Required | cannot be null | [Definitions](definitions-definitions-emailconfig-properties-emails.md "definitions.schema.json#/definitions/emailConfig/properties/emails") |

### emails



`emails`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-emailconfig-properties-emails.md "definitions.schema.json#/definitions/emailConfig/properties/emails")

#### emails Type

`string[]`

#### emails Default Value

The default value is:

```json
[]
```

## Definitions group opsgenieUserType

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/opsgenieUserType"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group opsgeniePriorityLevel

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/opsgeniePriorityLevel"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group opsgenieInstanceLocation

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/opsgenieInstanceLocation"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group opsgenieUser

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/opsgenieUser"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                             |
| :-------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [username](#username) | `string` | Required | cannot be null | [Definitions](definitions-definitions-opsgenieuser-properties-username.md "definitions.schema.json#/definitions/opsgenieUser/properties/username")     |
| [fullName](#fullname) | `string` | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieuser-properties-fullname.md "definitions.schema.json#/definitions/opsgenieUser/properties/fullName")     |
| [id](#id)             | `string` | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieuser-properties-id.md "definitions.schema.json#/definitions/opsgenieUser/properties/id")                 |
| [type](#type)         | `string` | Required | cannot be null | [Definitions](definitions-definitions-opsgenieuser-properties-opsgenieusertype.md "definitions.schema.json#/definitions/opsgenieUser/properties/type") |

### username



`username`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieuser-properties-username.md "definitions.schema.json#/definitions/opsgenieUser/properties/username")

#### username Type

`string`

### fullName



`fullName`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieuser-properties-fullname.md "definitions.schema.json#/definitions/opsgenieUser/properties/fullName")

#### fullName Type

`string`

### id



`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieuser-properties-id.md "definitions.schema.json#/definitions/opsgenieUser/properties/id")

#### id Type

`string`

### type



`type`

*   is required

*   Type: `string` ([OpsgenieUserType](definitions-definitions-opsgenieuser-properties-opsgenieusertype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieuser-properties-opsgenieusertype.md "definitions.schema.json#/definitions/opsgenieUser/properties/type")

#### type Type

`string` ([OpsgenieUserType](definitions-definitions-opsgenieuser-properties-opsgenieusertype.md))

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"team"`       |             |
| `"user"`       |             |
| `"escalation"` |             |
| `"schedule"`   |             |

## Definitions group opsgenieConfig

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/opsgenieConfig"}
```

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                                                                     |
| :------------------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [apiKey](#apikey)                     | `string` | Required | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-apikey.md "definitions.schema.json#/definitions/opsgenieConfig/properties/apiKey")                             |
| [instanceLocation](#instancelocation) | `string` | Required | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieinstancelocation.md "definitions.schema.json#/definitions/opsgenieConfig/properties/instanceLocation") |
| [alias](#alias)                       | `string` | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-alias.md "definitions.schema.json#/definitions/opsgenieConfig/properties/alias")                               |
| [responders](#responders)             | `array`  | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieconfigresponders.md "definitions.schema.json#/definitions/opsgenieConfig/properties/responders")       |
| [visibleTo](#visibleto)               | `array`  | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieconfigvisibleto.md "definitions.schema.json#/definitions/opsgenieConfig/properties/visibleTo")         |
| [actions](#actions)                   | `array`  | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieconfigactions.md "definitions.schema.json#/definitions/opsgenieConfig/properties/actions")             |
| [tags](#tags)                         | `array`  | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieconfigtags.md "definitions.schema.json#/definitions/opsgenieConfig/properties/tags")                   |
| [details](#details)                   | `object` | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieconfigdetails.md "definitions.schema.json#/definitions/opsgenieConfig/properties/details")             |
| [entity](#entity)                     | `string` | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-entity.md "definitions.schema.json#/definitions/opsgenieConfig/properties/entity")                             |
| [priority](#priority)                 | `string` | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieprioritylevel.md "definitions.schema.json#/definitions/opsgenieConfig/properties/priority")            |
| [note](#note)                         | `string` | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-note.md "definitions.schema.json#/definitions/opsgenieConfig/properties/note")                                 |

### apiKey



`apiKey`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-apikey.md "definitions.schema.json#/definitions/opsgenieConfig/properties/apiKey")

#### apiKey Type

`string`

### instanceLocation



`instanceLocation`

*   is required

*   Type: `string` ([OpsgenieInstanceLocation](definitions-definitions-opsgenieconfig-properties-opsgenieinstancelocation.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieinstancelocation.md "definitions.schema.json#/definitions/opsgenieConfig/properties/instanceLocation")

#### instanceLocation Type

`string` ([OpsgenieInstanceLocation](definitions-definitions-opsgenieconfig-properties-opsgenieinstancelocation.md))

#### instanceLocation Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation |
| :----- | :---------- |
| `"US"` |             |
| `"EU"` |             |

### alias



`alias`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-alias.md "definitions.schema.json#/definitions/opsgenieConfig/properties/alias")

#### alias Type

`string`

#### alias Constraints

**maximum length**: the maximum number of characters for this string is: `512`

### responders



`responders`

*   is optional

*   Type: `object[]` ([OpsgenieUser](definitions-definitions-opsgenieuser.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieconfigresponders.md "definitions.schema.json#/definitions/opsgenieConfig/properties/responders")

#### responders Type

`object[]` ([OpsgenieUser](definitions-definitions-opsgenieuser.md))

### visibleTo



`visibleTo`

*   is optional

*   Type: `object[]` ([OpsgenieUser](definitions-definitions-opsgenieuser.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieconfigvisibleto.md "definitions.schema.json#/definitions/opsgenieConfig/properties/visibleTo")

#### visibleTo Type

`object[]` ([OpsgenieUser](definitions-definitions-opsgenieuser.md))

### actions



`actions`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieconfigactions.md "definitions.schema.json#/definitions/opsgenieConfig/properties/actions")

#### actions Type

`string[]`

#### actions Constraints

**maximum number of items**: the maximum number of items for this array is: `10`

### tags



`tags`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieconfigtags.md "definitions.schema.json#/definitions/opsgenieConfig/properties/tags")

#### tags Type

`string[]`

#### tags Constraints

**maximum number of items**: the maximum number of items for this array is: `10`

### details



`details`

*   is optional

*   Type: `object` ([OpsgenieConfigDetails](definitions-definitions-opsgenieconfig-properties-opsgenieconfigdetails.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieconfigdetails.md "definitions.schema.json#/definitions/opsgenieConfig/properties/details")

#### details Type

`object` ([OpsgenieConfigDetails](definitions-definitions-opsgenieconfig-properties-opsgenieconfigdetails.md))

### entity



`entity`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-entity.md "definitions.schema.json#/definitions/opsgenieConfig/properties/entity")

#### entity Type

`string`

#### entity Constraints

**maximum length**: the maximum number of characters for this string is: `512`

### priority



`priority`

*   is optional

*   Type: `string` ([OpsgeniePriorityLevel](definitions-definitions-opsgenieconfig-properties-opsgenieprioritylevel.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieprioritylevel.md "definitions.schema.json#/definitions/opsgenieConfig/properties/priority")

#### priority Type

`string` ([OpsgeniePriorityLevel](definitions-definitions-opsgenieconfig-properties-opsgenieprioritylevel.md))

#### priority Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation |
| :----- | :---------- |
| `"P1"` |             |
| `"P2"` |             |
| `"P3"` |             |
| `"P4"` |             |
| `"P5"` |             |

### note



`note`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-note.md "definitions.schema.json#/definitions/opsgenieConfig/properties/note")

#### note Type

`string`

#### note Constraints

**maximum length**: the maximum number of characters for this string is: `25000`

## Definitions group pagerDutyEventType

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/pagerDutyEventType"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group pagerDutyEventAction

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/pagerDutyEventAction"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group pagerDutySeverity

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/pagerDutySeverity"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group pagerDutyConfig

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/pagerDutyConfig"}
```

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                                                        |
| :------------------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [token](#token)                 | `string` | Required | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-token.md "definitions.schema.json#/definitions/pagerDutyConfig/properties/token")                                |
| [eventType](#eventtype)         | `string` | Required | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-pagerdutyeventtype.md "definitions.schema.json#/definitions/pagerDutyConfig/properties/eventType")               |
| [routingKey](#routingkey)       | `string` | Required | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-routingkey.md "definitions.schema.json#/definitions/pagerDutyConfig/properties/routingKey")                      |
| [eventAction](#eventaction)     | `string` | Optional | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-pagerdutyeventaction.md "definitions.schema.json#/definitions/pagerDutyConfig/properties/eventAction")           |
| [dedupKey](#dedupkey)           | `string` | Optional | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-dedupkey.md "definitions.schema.json#/definitions/pagerDutyConfig/properties/dedupKey")                          |
| [severity](#severity)           | `string` | Optional | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-pagerdutyseverity.md "definitions.schema.json#/definitions/pagerDutyConfig/properties/severity")                 |
| [component](#component)         | `string` | Optional | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-component.md "definitions.schema.json#/definitions/pagerDutyConfig/properties/component")                        |
| [group](#group)                 | `string` | Optional | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-group.md "definitions.schema.json#/definitions/pagerDutyConfig/properties/group")                                |
| [class](#class)                 | `string` | Optional | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-class.md "definitions.schema.json#/definitions/pagerDutyConfig/properties/class")                                |
| [customDetails](#customdetails) | `object` | Optional | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-pagerdutyconfigcustomdetails.md "definitions.schema.json#/definitions/pagerDutyConfig/properties/customDetails") |

### token



`token`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-token.md "definitions.schema.json#/definitions/pagerDutyConfig/properties/token")

#### token Type

`string`

### eventType



`eventType`

*   is required

*   Type: `string` ([PagerDutyEventType](definitions-definitions-pagerdutyconfig-properties-pagerdutyeventtype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-pagerdutyeventtype.md "definitions.schema.json#/definitions/pagerDutyConfig/properties/eventType")

#### eventType Type

`string` ([PagerDutyEventType](definitions-definitions-pagerdutyconfig-properties-pagerdutyeventtype.md))

#### eventType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"change"` |             |
| `"alert"`  |             |

### routingKey



`routingKey`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-routingkey.md "definitions.schema.json#/definitions/pagerDutyConfig/properties/routingKey")

#### routingKey Type

`string`

#### routingKey Constraints

**maximum length**: the maximum number of characters for this string is: `32`

**minimum length**: the minimum number of characters for this string is: `32`

### eventAction



`eventAction`

*   is optional

*   Type: `string` ([PagerDutyEventAction](definitions-definitions-pagerdutyconfig-properties-pagerdutyeventaction.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-pagerdutyeventaction.md "definitions.schema.json#/definitions/pagerDutyConfig/properties/eventAction")

#### eventAction Type

`string` ([PagerDutyEventAction](definitions-definitions-pagerdutyconfig-properties-pagerdutyeventaction.md))

#### eventAction Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"trigger"`     |             |
| `"acknowledge"` |             |
| `"resolve"`     |             |

### dedupKey



`dedupKey`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-dedupkey.md "definitions.schema.json#/definitions/pagerDutyConfig/properties/dedupKey")

#### dedupKey Type

`string`

#### dedupKey Constraints

**maximum length**: the maximum number of characters for this string is: `255`

### severity



`severity`

*   is optional

*   Type: `string` ([PagerDutySeverity](definitions-definitions-pagerdutyconfig-properties-pagerdutyseverity.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-pagerdutyseverity.md "definitions.schema.json#/definitions/pagerDutyConfig/properties/severity")

#### severity Type

`string` ([PagerDutySeverity](definitions-definitions-pagerdutyconfig-properties-pagerdutyseverity.md))

#### severity Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"critical"` |             |
| `"error"`    |             |
| `"warning"`  |             |
| `"info"`     |             |

### component



`component`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-component.md "definitions.schema.json#/definitions/pagerDutyConfig/properties/component")

#### component Type

`string`

### group



`group`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-group.md "definitions.schema.json#/definitions/pagerDutyConfig/properties/group")

#### group Type

`string`

### class



`class`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-class.md "definitions.schema.json#/definitions/pagerDutyConfig/properties/class")

#### class Type

`string`

### customDetails



`customDetails`

*   is optional

*   Type: `object` ([PagerDutyConfigCustomDetails](definitions-definitions-pagerdutyconfig-properties-pagerdutyconfigcustomdetails.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-pagerdutyconfigcustomdetails.md "definitions.schema.json#/definitions/pagerDutyConfig/properties/customDetails")

#### customDetails Type

`object` ([PagerDutyConfigCustomDetails](definitions-definitions-pagerdutyconfig-properties-pagerdutyconfigcustomdetails.md))

## Definitions group notification

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/notification"}
```

| Property          | Type      | Required | Nullable       | Defined by                                                                                                                                             |
| :---------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type-1)   | `string`  | Required | cannot be null | [Definitions](definitions-definitions-notification-properties-notificationtype.md "definitions.schema.json#/definitions/notification/properties/type") |
| [name](#name-3)   | `string`  | Required | cannot be null | [Definitions](definitions-definitions-notification-properties-name.md "definitions.schema.json#/definitions/notification/properties/name")             |
| [paused](#paused) | `boolean` | Required | cannot be null | [Definitions](definitions-definitions-notification-properties-paused.md "definitions.schema.json#/definitions/notification/properties/paused")         |
| [config](#config) | Merged    | Required | cannot be null | [Definitions](definitions-definitions-notification-properties-config.md "definitions.schema.json#/definitions/notification/properties/config")         |

### type



`type`

*   is required

*   Type: `string` ([NotificationType](definitions-definitions-notification-properties-notificationtype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notification-properties-notificationtype.md "definitions.schema.json#/definitions/notification/properties/type")

#### type Type

`string` ([NotificationType](definitions-definitions-notification-properties-notificationtype.md))

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"slack"`      |             |
| `"email"`      |             |
| `"discord"`    |             |
| `"telegram"`   |             |
| `"datadog"`    |             |
| `"webhook"`    |             |
| `"opsgenie"`   |             |
| `"pager-duty"` |             |

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notification-properties-name.md "definitions.schema.json#/definitions/notification/properties/name")

#### name Type

`string`

### paused



`paused`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notification-properties-paused.md "definitions.schema.json#/definitions/notification/properties/paused")

#### paused Type

`boolean`

### config



`config`

*   is required

*   Type: `object` ([Config](definitions-definitions-notification-properties-config.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notification-properties-config.md "definitions.schema.json#/definitions/notification/properties/config")

#### config Type

`object` ([Config](definitions-definitions-notification-properties-config.md))

one (and only one) of

*   [EmailConfig](definitions-definitions-emailconfig.md "check type definition")

*   [TelegramConfig](definitions-definitions-telegramconfig.md "check type definition")

*   [DatadogConfig](definitions-definitions-datadogconfig.md "check type definition")

*   [UrlConfig](definitions-definitions-urlconfig.md "check type definition")

*   [OpsgenieConfig](definitions-definitions-opsgenieconfig.md "check type definition")

*   [PagerDutyConfig](definitions-definitions-pagerdutyconfig.md "check type definition")

## Definitions group block-monitor

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/block-monitor"}
```

| Property                                    | Type      | Required | Nullable       | Defined by                                                                                                                                                                |
| :------------------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [name](#name-4)                             | `string`  | Required | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-name.md "definitions.schema.json#/definitions/block-monitor/properties/name")                               |
| [type](#type-2)                             | `string`  | Required | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-type.md "definitions.schema.json#/definitions/block-monitor/properties/type")                               |
| [network](#network-3)                       | Merged    | Required | cannot be null | [Definitions](definitions-definitions-network.md "definitions.schema.json#/definitions/block-monitor/properties/network")                                                 |
| [contracts](#contracts)                     | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-contracts.md "definitions.schema.json#/definitions/block-monitor/properties/contracts")                     |
| [addresses](#addresses)                     | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-addresses.md "definitions.schema.json#/definitions/block-monitor/properties/addresses")                     |
| [abi](#abi-1)                               | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-abitype.md "definitions.schema.json#/definitions/block-monitor/properties/abi")                                                     |
| [alert-threshold](#alert-threshold)         | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-alertthreshold.md "definitions.schema.json#/definitions/block-monitor/properties/alert-threshold")          |
| [paused](#paused-1)                         | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-paused.md "definitions.schema.json#/definitions/block-monitor/properties/paused")                           |
| [skip-abi-validation](#skip-abi-validation) | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-skip-abi-validation.md "definitions.schema.json#/definitions/block-monitor/properties/skip-abi-validation") |
| [action-condition](#action-condition)       | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-actionordefenderid.md "definitions.schema.json#/definitions/block-monitor/properties/action-condition")     |
| [action-trigger](#action-trigger)           | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-actionordefenderid-1.md "definitions.schema.json#/definitions/block-monitor/properties/action-trigger")     |
| [confirm-level](#confirm-level)             | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-confirm-level.md "definitions.schema.json#/definitions/block-monitor/properties/confirm-level")             |
| [notify-config](#notify-config)             | `object`  | Required | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig.md "definitions.schema.json#/definitions/block-monitor/properties/notify-config")              |
| [conditions](#conditions)                   | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-conditions.md "definitions.schema.json#/definitions/block-monitor/properties/conditions")                   |
| [risk-category](#risk-category)             | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-riskcategory.md "definitions.schema.json#/definitions/block-monitor/properties/risk-category")              |

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-name.md "definitions.schema.json#/definitions/block-monitor/properties/name")

#### name Type

`string`

### type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-type.md "definitions.schema.json#/definitions/block-monitor/properties/type")

#### type Type

`string`

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"BLOCK"` |             |

### network



`network`

*   is required

*   Type: merged type ([Network](definitions-definitions-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-network.md "definitions.schema.json#/definitions/block-monitor/properties/network")

#### network Type

merged type ([Network](definitions-definitions-network.md))

any of

*   one (and only one) of

    *   [PublicNetwork](definitions-definitions-supportednetwork-oneof-publicnetwork.md "check type definition")

    *   [CustomNetwork](definitions-definitions-supportednetwork-oneof-customnetwork.md "check type definition")

*   [TenantNetwork](definitions-definitions-network-anyof-tenantnetwork.md "check type definition")

#### network Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### contracts



`contracts`

*   is optional

*   Type: an array of merged types ([ContractOrDefenderID](definitions-definitions-blockmonitor-properties-contracts-contractordefenderid.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-contracts.md "definitions.schema.json#/definitions/block-monitor/properties/contracts")

#### contracts Type

an array of merged types ([ContractOrDefenderID](definitions-definitions-blockmonitor-properties-contracts-contractordefenderid.md))

### addresses



`addresses`

*   is optional

*   Type: `string[]` ([Address](definitions-definitions-blockmonitor-properties-addresses-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-addresses.md "definitions.schema.json#/definitions/block-monitor/properties/addresses")

#### addresses Type

`string[]` ([Address](definitions-definitions-blockmonitor-properties-addresses-address.md))

### abi



`abi`

*   is optional

*   Type: merged type ([AbiType](definitions-definitions-abitype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-abitype.md "definitions.schema.json#/definitions/block-monitor/properties/abi")

#### abi Type

merged type ([AbiType](definitions-definitions-abitype.md))

any of

*   [StringABI](definitions-definitions-abitype-anyof-stringabi.md "check type definition")

*   [ArrayABI](definitions-definitions-abitype-anyof-arrayabi.md "check type definition")

### alert-threshold



`alert-threshold`

*   is optional

*   Type: `object` ([AlertThreshold](definitions-definitions-blockmonitor-properties-alertthreshold.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-alertthreshold.md "definitions.schema.json#/definitions/block-monitor/properties/alert-threshold")

#### alert-threshold Type

`object` ([AlertThreshold](definitions-definitions-blockmonitor-properties-alertthreshold.md))

### paused



`paused`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-paused.md "definitions.schema.json#/definitions/block-monitor/properties/paused")

#### paused Type

`boolean`

### skip-abi-validation

A boolean value that indicates whether the UI should skip ABI validation checks. Enable this if you wish to use custom or partial ABIs for your monitors.

`skip-abi-validation`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-skip-abi-validation.md "definitions.schema.json#/definitions/block-monitor/properties/skip-abi-validation")

#### skip-abi-validation Type

`boolean`

### action-condition



`action-condition`

*   is optional

*   Type: merged type ([ActionOrDefenderID](definitions-definitions-blockmonitor-properties-actionordefenderid.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-actionordefenderid.md "definitions.schema.json#/definitions/block-monitor/properties/action-condition")

#### action-condition Type

merged type ([ActionOrDefenderID](definitions-definitions-blockmonitor-properties-actionordefenderid.md))

any of

*   [Action](definitions-definitions-action.md "check type definition")

*   [DefenderID](definitions-definitions-actionordefenderid-anyof-defenderid.md "check type definition")

#### action-condition Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### action-trigger



`action-trigger`

*   is optional

*   Type: merged type ([ActionOrDefenderID](definitions-definitions-blockmonitor-properties-actionordefenderid-1.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-actionordefenderid-1.md "definitions.schema.json#/definitions/block-monitor/properties/action-trigger")

#### action-trigger Type

merged type ([ActionOrDefenderID](definitions-definitions-blockmonitor-properties-actionordefenderid-1.md))

any of

*   [Action](definitions-definitions-action.md "check type definition")

*   [DefenderID](definitions-definitions-actionordefenderid-anyof-defenderid.md "check type definition")

#### action-trigger Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### confirm-level



`confirm-level`

*   is optional

*   Type: merged type ([Details](definitions-definitions-blockmonitor-properties-confirm-level.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-confirm-level.md "definitions.schema.json#/definitions/block-monitor/properties/confirm-level")

#### confirm-level Type

merged type ([Details](definitions-definitions-blockmonitor-properties-confirm-level.md))

one (and only one) of

*   [Untitled string in Definitions](definitions-definitions-blockmonitor-properties-confirm-level-oneof-0.md "check type definition")

*   [Untitled integer in Definitions](definitions-definitions-blockmonitor-properties-confirm-level-oneof-1.md "check type definition")

### notify-config



`notify-config`

*   is required

*   Type: `object` ([NotifyConfig](definitions-definitions-blockmonitor-properties-notifyconfig.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig.md "definitions.schema.json#/definitions/block-monitor/properties/notify-config")

#### notify-config Type

`object` ([NotifyConfig](definitions-definitions-blockmonitor-properties-notifyconfig.md))

### conditions



`conditions`

*   is optional

*   Type: `object` ([Conditions](definitions-definitions-blockmonitor-properties-conditions.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-conditions.md "definitions.schema.json#/definitions/block-monitor/properties/conditions")

#### conditions Type

`object` ([Conditions](definitions-definitions-blockmonitor-properties-conditions.md))

### risk-category



`risk-category`

*   is optional

*   Type: `string` ([RiskCategory](definitions-definitions-blockmonitor-properties-riskcategory.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-riskcategory.md "definitions.schema.json#/definitions/block-monitor/properties/risk-category")

#### risk-category Type

`string` ([RiskCategory](definitions-definitions-blockmonitor-properties-riskcategory.md))

#### risk-category Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"NONE"`           |             |
| `"GOVERNANCE"`     |             |
| `"ACCESS-CONTROL"` |             |
| `"SUSPICIOUS"`     |             |
| `"FINANCIAL"`      |             |
| `"TECHNICAL"`      |             |

## Definitions group forta-monitor

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/forta-monitor"}
```

| Property                                                | Type      | Required | Nullable       | Defined by                                                                                                                                                                            |
| :------------------------------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [name](#name-5)                                         | `string`  | Required | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-name.md "definitions.schema.json#/definitions/forta-monitor/properties/name")                                           |
| [type](#type-3)                                         | `string`  | Required | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-type.md "definitions.schema.json#/definitions/forta-monitor/properties/type")                                           |
| [network](#network-4)                                   | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-network.md "definitions.schema.json#/definitions/forta-monitor/properties/network")                                                             |
| [contracts](#contracts-1)                               | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-contracts.md "definitions.schema.json#/definitions/forta-monitor/properties/contracts")                                 |
| [addresses](#addresses-1)                               | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-addresses.md "definitions.schema.json#/definitions/forta-monitor/properties/addresses")                                 |
| [abi](#abi-2)                                           | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-abitype.md "definitions.schema.json#/definitions/forta-monitor/properties/abi")                                                                 |
| [alert-threshold](#alert-threshold-1)                   | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-alertthreshold.md "definitions.schema.json#/definitions/forta-monitor/properties/alert-threshold")                      |
| [paused](#paused-2)                                     | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-paused.md "definitions.schema.json#/definitions/forta-monitor/properties/paused")                                       |
| [action-condition](#action-condition-1)                 | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-actionordefenderid.md "definitions.schema.json#/definitions/forta-monitor/properties/action-condition")                                         |
| [action-trigger](#action-trigger-1)                     | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-actionordefenderid.md "definitions.schema.json#/definitions/forta-monitor/properties/action-trigger")                                           |
| [notify-config](#notify-config-1)                       | `object`  | Required | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-notifyconfig.md "definitions.schema.json#/definitions/forta-monitor/properties/notify-config")                          |
| [conditions](#conditions-1)                             | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-conditions.md "definitions.schema.json#/definitions/forta-monitor/properties/conditions")                               |
| [forta-node-id](#forta-node-id)                         | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-forta-node-id.md "definitions.schema.json#/definitions/forta-monitor/properties/forta-node-id")                         |
| [forta-last-processed-time](#forta-last-processed-time) | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-forta-last-processed-time.md "definitions.schema.json#/definitions/forta-monitor/properties/forta-last-processed-time") |
| [agent-ids](#agent-ids)                                 | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-agentids.md "definitions.schema.json#/definitions/forta-monitor/properties/agent-ids")                                  |
| [risk-category](#risk-category-1)                       | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-riskcategory.md "definitions.schema.json#/definitions/forta-monitor/properties/risk-category")                          |

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-name.md "definitions.schema.json#/definitions/forta-monitor/properties/name")

#### name Type

`string`

### type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-type.md "definitions.schema.json#/definitions/forta-monitor/properties/type")

#### type Type

`string`

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"FORTA"` |             |

### network



`network`

*   is optional

*   Type: merged type ([Network](definitions-definitions-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-network.md "definitions.schema.json#/definitions/forta-monitor/properties/network")

#### network Type

merged type ([Network](definitions-definitions-network.md))

any of

*   one (and only one) of

    *   [PublicNetwork](definitions-definitions-supportednetwork-oneof-publicnetwork.md "check type definition")

    *   [CustomNetwork](definitions-definitions-supportednetwork-oneof-customnetwork.md "check type definition")

*   [TenantNetwork](definitions-definitions-network-anyof-tenantnetwork.md "check type definition")

#### network Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### contracts



`contracts`

*   is optional

*   Type: an array of merged types ([ContractOrDefenderID](definitions-definitions-fortamonitor-properties-contracts-contractordefenderid.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-contracts.md "definitions.schema.json#/definitions/forta-monitor/properties/contracts")

#### contracts Type

an array of merged types ([ContractOrDefenderID](definitions-definitions-fortamonitor-properties-contracts-contractordefenderid.md))

### addresses



`addresses`

*   is optional

*   Type: `string[]` ([Address](definitions-definitions-fortamonitor-properties-addresses-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-addresses.md "definitions.schema.json#/definitions/forta-monitor/properties/addresses")

#### addresses Type

`string[]` ([Address](definitions-definitions-fortamonitor-properties-addresses-address.md))

### abi



`abi`

*   is optional

*   Type: merged type ([AbiType](definitions-definitions-abitype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-abitype.md "definitions.schema.json#/definitions/forta-monitor/properties/abi")

#### abi Type

merged type ([AbiType](definitions-definitions-abitype.md))

any of

*   [StringABI](definitions-definitions-abitype-anyof-stringabi.md "check type definition")

*   [ArrayABI](definitions-definitions-abitype-anyof-arrayabi.md "check type definition")

### alert-threshold



`alert-threshold`

*   is optional

*   Type: `object` ([AlertThreshold](definitions-definitions-fortamonitor-properties-alertthreshold.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-alertthreshold.md "definitions.schema.json#/definitions/forta-monitor/properties/alert-threshold")

#### alert-threshold Type

`object` ([AlertThreshold](definitions-definitions-fortamonitor-properties-alertthreshold.md))

### paused



`paused`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-paused.md "definitions.schema.json#/definitions/forta-monitor/properties/paused")

#### paused Type

`boolean`

### action-condition



`action-condition`

*   is optional

*   Type: merged type ([ActionOrDefenderID](definitions-definitions-actionordefenderid.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-actionordefenderid.md "definitions.schema.json#/definitions/forta-monitor/properties/action-condition")

#### action-condition Type

merged type ([ActionOrDefenderID](definitions-definitions-actionordefenderid.md))

any of

*   [Action](definitions-definitions-action.md "check type definition")

*   [DefenderID](definitions-definitions-actionordefenderid-anyof-defenderid.md "check type definition")

#### action-condition Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### action-trigger



`action-trigger`

*   is optional

*   Type: merged type ([ActionOrDefenderID](definitions-definitions-actionordefenderid.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-actionordefenderid.md "definitions.schema.json#/definitions/forta-monitor/properties/action-trigger")

#### action-trigger Type

merged type ([ActionOrDefenderID](definitions-definitions-actionordefenderid.md))

any of

*   [Action](definitions-definitions-action.md "check type definition")

*   [DefenderID](definitions-definitions-actionordefenderid-anyof-defenderid.md "check type definition")

#### action-trigger Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### notify-config



`notify-config`

*   is required

*   Type: `object` ([NotifyConfig](definitions-definitions-fortamonitor-properties-notifyconfig.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-notifyconfig.md "definitions.schema.json#/definitions/forta-monitor/properties/notify-config")

#### notify-config Type

`object` ([NotifyConfig](definitions-definitions-fortamonitor-properties-notifyconfig.md))

### conditions



`conditions`

*   is optional

*   Type: `object` ([Conditions](definitions-definitions-fortamonitor-properties-conditions.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-conditions.md "definitions.schema.json#/definitions/forta-monitor/properties/conditions")

#### conditions Type

`object` ([Conditions](definitions-definitions-fortamonitor-properties-conditions.md))

### forta-node-id



`forta-node-id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-forta-node-id.md "definitions.schema.json#/definitions/forta-monitor/properties/forta-node-id")

#### forta-node-id Type

`string`

### forta-last-processed-time



`forta-last-processed-time`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-forta-last-processed-time.md "definitions.schema.json#/definitions/forta-monitor/properties/forta-last-processed-time")

#### forta-last-processed-time Type

`string`

### agent-ids



`agent-ids`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-agentids.md "definitions.schema.json#/definitions/forta-monitor/properties/agent-ids")

#### agent-ids Type

`string[]`

### risk-category



`risk-category`

*   is optional

*   Type: `string` ([RiskCategory](definitions-definitions-fortamonitor-properties-riskcategory.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-riskcategory.md "definitions.schema.json#/definitions/forta-monitor/properties/risk-category")

#### risk-category Type

`string` ([RiskCategory](definitions-definitions-fortamonitor-properties-riskcategory.md))

#### risk-category Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"NONE"`           |             |
| `"GOVERNANCE"`     |             |
| `"ACCESS-CONTROL"` |             |
| `"SUSPICIOUS"`     |             |
| `"FINANCIAL"`      |             |
| `"TECHNICAL"`      |             |

## Definitions group monitor

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/monitor"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group relayer-or-defender-id

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/relayer-or-defender-id"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group relayer-group-or-defender-id

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/relayer-group-or-defender-id"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group action-or-defender-id

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/action-or-defender-id"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group monitor-or-defender-id

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/monitor-or-defender-id"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group forked-network-or-defender-id

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/forked-network-or-defender-id"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group private-network-or-defender-id

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/private-network-or-defender-id"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group block-explorer-api-key-or-defender-id

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/block-explorer-api-key-or-defender-id"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group notification-or-defender-id

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/notification-or-defender-id"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group contract-or-defender-id

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/contract-or-defender-id"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group policy-or-defender-id

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/policy-or-defender-id"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group action

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/action"}
```

| Property                                        | Type      | Required | Nullable       | Defined by                                                                                                                                                       |
| :---------------------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-6)                                 | `string`  | Required | cannot be null | [Definitions](definitions-definitions-action-properties-name.md "definitions.schema.json#/definitions/action/properties/name")                                   |
| [path](#path)                                   | `string`  | Required | cannot be null | [Definitions](definitions-definitions-action-properties-path.md "definitions.schema.json#/definitions/action/properties/path")                                   |
| [relayer](#relayer)                             | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-action-properties-relayerordefenderid.md "definitions.schema.json#/definitions/action/properties/relayer")                 |
| [trigger](#trigger)                             | `object`  | Required | cannot be null | [Definitions](definitions-definitions-action-properties-trigger.md "definitions.schema.json#/definitions/action/properties/trigger")                             |
| [paused](#paused-3)                             | `boolean` | Required | cannot be null | [Definitions](definitions-definitions-action-properties-paused.md "definitions.schema.json#/definitions/action/properties/paused")                               |
| [environment-variables](#environment-variables) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-action-properties-environment-variables.md "definitions.schema.json#/definitions/action/properties/environment-variables") |

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action-properties-name.md "definitions.schema.json#/definitions/action/properties/name")

#### name Type

`string`

### path



`path`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action-properties-path.md "definitions.schema.json#/definitions/action/properties/path")

#### path Type

`string`

### relayer



`relayer`

*   is optional

*   Type: merged type ([RelayerOrDefenderID](definitions-definitions-action-properties-relayerordefenderid.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action-properties-relayerordefenderid.md "definitions.schema.json#/definitions/action/properties/relayer")

#### relayer Type

merged type ([RelayerOrDefenderID](definitions-definitions-action-properties-relayerordefenderid.md))

any of

*   [Relayer](definitions-definitions-relayer.md "check type definition")

*   [DefenderID](definitions-definitions-relayerordefenderid-anyof-defenderid.md "check type definition")

#### relayer Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### trigger



`trigger`

*   is required

*   Type: `object` ([Trigger](definitions-definitions-action-properties-trigger.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action-properties-trigger.md "definitions.schema.json#/definitions/action/properties/trigger")

#### trigger Type

`object` ([Trigger](definitions-definitions-action-properties-trigger.md))

### paused



`paused`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action-properties-paused.md "definitions.schema.json#/definitions/action/properties/paused")

#### paused Type

`boolean`

### environment-variables



`environment-variables`

*   is optional

*   Type: `object` ([Details](definitions-definitions-action-properties-environment-variables.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action-properties-environment-variables.md "definitions.schema.json#/definitions/action/properties/environment-variables")

#### environment-variables Type

`object` ([Details](definitions-definitions-action-properties-environment-variables.md))

## Definitions group block-explorer-api-key

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/block-explorer-api-key"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                |
| :-------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [key](#key)           | `string` | Required | cannot be null | [Definitions](definitions-definitions-blockexplorerapikey-properties-key.md "definitions.schema.json#/definitions/block-explorer-api-key/properties/key") |
| [network](#network-5) | Merged   | Required | cannot be null | [Definitions](definitions-definitions-network.md "definitions.schema.json#/definitions/block-explorer-api-key/properties/network")                        |

### key



`key`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockexplorerapikey-properties-key.md "definitions.schema.json#/definitions/block-explorer-api-key/properties/key")

#### key Type

`string`

### network



`network`

*   is required

*   Type: merged type ([Network](definitions-definitions-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-network.md "definitions.schema.json#/definitions/block-explorer-api-key/properties/network")

#### network Type

merged type ([Network](definitions-definitions-network.md))

any of

*   one (and only one) of

    *   [PublicNetwork](definitions-definitions-supportednetwork-oneof-publicnetwork.md "check type definition")

    *   [CustomNetwork](definitions-definitions-supportednetwork-oneof-customnetwork.md "check type definition")

*   [TenantNetwork](definitions-definitions-network-anyof-tenantnetwork.md "check type definition")

#### network Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## Definitions group abi

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/abi"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group safe-contracts

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/safe-contracts"}
```

| Property                                      | Type     | Required | Nullable       | Defined by                                                                                                                                                         |
| :-------------------------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [master](#master)                             | `string` | Required | cannot be null | [Definitions](definitions-definitions-safecontracts-properties-address.md "definitions.schema.json#/definitions/safe-contracts/properties/master")                 |
| [proxy-factory](#proxy-factory)               | `string` | Required | cannot be null | [Definitions](definitions-definitions-safecontracts-properties-address-1.md "definitions.schema.json#/definitions/safe-contracts/properties/proxy-factory")        |
| [multi-send-call-only](#multi-send-call-only) | `string` | Required | cannot be null | [Definitions](definitions-definitions-safecontracts-properties-address-2.md "definitions.schema.json#/definitions/safe-contracts/properties/multi-send-call-only") |
| [create-call](#create-call)                   | `string` | Optional | cannot be null | [Definitions](definitions-definitions-safecontracts-properties-address-3.md "definitions.schema.json#/definitions/safe-contracts/properties/create-call")          |

### master



`master`

*   is required

*   Type: `string` ([Address](definitions-definitions-safecontracts-properties-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-safecontracts-properties-address.md "definitions.schema.json#/definitions/safe-contracts/properties/master")

#### master Type

`string` ([Address](definitions-definitions-safecontracts-properties-address.md))

#### master Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^0x[a-fA-F0-9]{40}$
```

[try pattern](https://regexr.com/?expression=%5E0x%5Ba-fA-F0-9%5D%7B40%7D%24 "try regular expression with regexr.com")

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### proxy-factory



`proxy-factory`

*   is required

*   Type: `string` ([Address](definitions-definitions-safecontracts-properties-address-1.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-safecontracts-properties-address-1.md "definitions.schema.json#/definitions/safe-contracts/properties/proxy-factory")

#### proxy-factory Type

`string` ([Address](definitions-definitions-safecontracts-properties-address-1.md))

#### proxy-factory Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^0x[a-fA-F0-9]{40}$
```

[try pattern](https://regexr.com/?expression=%5E0x%5Ba-fA-F0-9%5D%7B40%7D%24 "try regular expression with regexr.com")

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### multi-send-call-only



`multi-send-call-only`

*   is required

*   Type: `string` ([Address](definitions-definitions-safecontracts-properties-address-2.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-safecontracts-properties-address-2.md "definitions.schema.json#/definitions/safe-contracts/properties/multi-send-call-only")

#### multi-send-call-only Type

`string` ([Address](definitions-definitions-safecontracts-properties-address-2.md))

#### multi-send-call-only Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^0x[a-fA-F0-9]{40}$
```

[try pattern](https://regexr.com/?expression=%5E0x%5Ba-fA-F0-9%5D%7B40%7D%24 "try regular expression with regexr.com")

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### create-call



`create-call`

*   is optional

*   Type: `string` ([Address](definitions-definitions-safecontracts-properties-address-3.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-safecontracts-properties-address-3.md "definitions.schema.json#/definitions/safe-contracts/properties/create-call")

#### create-call Type

`string` ([Address](definitions-definitions-safecontracts-properties-address-3.md))

#### create-call Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^0x[a-fA-F0-9]{40}$
```

[try pattern](https://regexr.com/?expression=%5E0x%5Ba-fA-F0-9%5D%7B40%7D%24 "try regular expression with regexr.com")

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## Definitions group tenant-network-eip-configuration

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/tenant-network-eip-configuration"}
```

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                                                                |
| :---------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [isEIP1559](#iseip1559) | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-tenantnetworkeipconfiguration-properties-iseip1559.md "definitions.schema.json#/definitions/tenant-network-eip-configuration/properties/isEIP1559") |

### isEIP1559



`isEIP1559`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-tenantnetworkeipconfiguration-properties-iseip1559.md "definitions.schema.json#/definitions/tenant-network-eip-configuration/properties/isEIP1559")

#### isEIP1559 Type

`boolean`

## Definitions group tenant-network-configuration

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/tenant-network-configuration"}
```

| Property                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                               |
| :-------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [symbol](#symbol)                 | `string` | Required | cannot be null | [Definitions](definitions-definitions-tenantnetworkconfiguration-properties-symbol.md "definitions.schema.json#/definitions/tenant-network-configuration/properties/symbol")             |
| [eips](#eips)                     | `object` | Optional | cannot be null | [Definitions](definitions-definitions-tenantnetworkeipconfiguration.md "definitions.schema.json#/definitions/tenant-network-configuration/properties/eips")                              |
| [safe-contracts](#safe-contracts) | `object` | Optional | cannot be null | [Definitions](definitions-definitions-safecontracts.md "definitions.schema.json#/definitions/tenant-network-configuration/properties/safe-contracts")                                    |
| [subgraph-url](#subgraph-url)     | `string` | Optional | cannot be null | [Definitions](definitions-definitions-tenantnetworkconfiguration-properties-subgraph-url.md "definitions.schema.json#/definitions/tenant-network-configuration/properties/subgraph-url") |

### symbol



`symbol`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-tenantnetworkconfiguration-properties-symbol.md "definitions.schema.json#/definitions/tenant-network-configuration/properties/symbol")

#### symbol Type

`string`

#### symbol Constraints

**maximum length**: the maximum number of characters for this string is: `6`

**minimum length**: the minimum number of characters for this string is: `3`

### eips



`eips`

*   is optional

*   Type: `object` ([TenantNetworkEIPConfiguration](definitions-definitions-tenantnetworkeipconfiguration.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-tenantnetworkeipconfiguration.md "definitions.schema.json#/definitions/tenant-network-configuration/properties/eips")

#### eips Type

`object` ([TenantNetworkEIPConfiguration](definitions-definitions-tenantnetworkeipconfiguration.md))

### safe-contracts



`safe-contracts`

*   is optional

*   Type: `object` ([SafeContracts](definitions-definitions-safecontracts.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-safecontracts.md "definitions.schema.json#/definitions/tenant-network-configuration/properties/safe-contracts")

#### safe-contracts Type

`object` ([SafeContracts](definitions-definitions-safecontracts.md))

### subgraph-url



`subgraph-url`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-tenantnetworkconfiguration-properties-subgraph-url.md "definitions.schema.json#/definitions/tenant-network-configuration/properties/subgraph-url")

#### subgraph-url Type

`string`

#### subgraph-url Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^(http(s)?://)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$
```

[try pattern](https://regexr.com/?expression=%5E\(http\(s\)%3F%3A%2F%2F\)%5B%5Cw.-%5D%2B\(%3F%3A%5C.%5B%5Cw%5C.-%5D%2B\)%2B%5B%5Cw%5C-%5C._~%3A%2F%3F%23%5B%5C%5D%40!%5C%24%26'%5C\(%5C\)%5C*%5C%2B%2C%3B%3D.%5D%2B%24 "try regular expression with regexr.com")

## Definitions group forked-network-request

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/forked-network-request"}
```

| Property                                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                               |
| :---------------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-7)                           | `string` | Required | cannot be null | [Definitions](definitions-definitions-forkednetworkrequest-properties-tenantnetwork.md "definitions.schema.json#/definitions/forked-network-request/properties/name")                    |
| [supported-network](#supported-network)   | Merged   | Required | cannot be null | [Definitions](definitions-definitions-supportednetwork.md "definitions.schema.json#/definitions/forked-network-request/properties/supported-network")                                    |
| [rpc-url](#rpc-url)                       | `string` | Required | cannot be null | [Definitions](definitions-definitions-forkednetworkrequest-properties-rpc-url.md "definitions.schema.json#/definitions/forked-network-request/properties/rpc-url")                       |
| [api-key](#api-key-1)                     | `string` | Optional | cannot be null | [Definitions](definitions-definitions-forkednetworkrequest-properties-api-key.md "definitions.schema.json#/definitions/forked-network-request/properties/api-key")                       |
| [block-explorer-url](#block-explorer-url) | `string` | Optional | cannot be null | [Definitions](definitions-definitions-forkednetworkrequest-properties-block-explorer-url.md "definitions.schema.json#/definitions/forked-network-request/properties/block-explorer-url") |

### name



`name`

*   is required

*   Type: `string` ([TenantNetwork](definitions-definitions-forkednetworkrequest-properties-tenantnetwork.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-forkednetworkrequest-properties-tenantnetwork.md "definitions.schema.json#/definitions/forked-network-request/properties/name")

#### name Type

`string` ([TenantNetwork](definitions-definitions-forkednetworkrequest-properties-tenantnetwork.md))

### supported-network



`supported-network`

*   is required

*   Type: merged type ([SupportedNetwork](definitions-definitions-supportednetwork.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-supportednetwork.md "definitions.schema.json#/definitions/forked-network-request/properties/supported-network")

#### supported-network Type

merged type ([SupportedNetwork](definitions-definitions-supportednetwork.md))

one (and only one) of

*   [PublicNetwork](definitions-definitions-supportednetwork-oneof-publicnetwork.md "check type definition")

*   [CustomNetwork](definitions-definitions-supportednetwork-oneof-customnetwork.md "check type definition")

### rpc-url



`rpc-url`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-forkednetworkrequest-properties-rpc-url.md "definitions.schema.json#/definitions/forked-network-request/properties/rpc-url")

#### rpc-url Type

`string`

#### rpc-url Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^(http|https)://
```

[try pattern](https://regexr.com/?expression=%5E\(http%7Chttps\)%3A%2F%2F "try regular expression with regexr.com")

### api-key



`api-key`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-forkednetworkrequest-properties-api-key.md "definitions.schema.json#/definitions/forked-network-request/properties/api-key")

#### api-key Type

`string`

### block-explorer-url



`block-explorer-url`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-forkednetworkrequest-properties-block-explorer-url.md "definitions.schema.json#/definitions/forked-network-request/properties/block-explorer-url")

#### block-explorer-url Type

`string`

#### block-explorer-url Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^(http(s)?://)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$
```

[try pattern](https://regexr.com/?expression=%5E\(http\(s\)%3F%3A%2F%2F\)%5B%5Cw.-%5D%2B\(%3F%3A%5C.%5B%5Cw%5C.-%5D%2B\)%2B%5B%5Cw%5C-%5C._~%3A%2F%3F%23%5B%5C%5D%40!%5C%24%26'%5C\(%5C\)%5C*%5C%2B%2C%3B%3D.%5D%2B%24 "try regular expression with regexr.com")

## Definitions group private-network-request

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/private-network-request"}
```

| Property                                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                 |
| :------------------------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-8)                             | `string` | Required | cannot be null | [Definitions](definitions-definitions-privatenetworkrequest-properties-tenantnetwork.md "definitions.schema.json#/definitions/private-network-request/properties/name")                    |
| [configuration](#configuration)             | `object` | Required | cannot be null | [Definitions](definitions-definitions-tenantnetworkconfiguration.md "definitions.schema.json#/definitions/private-network-request/properties/configuration")                               |
| [rpc-url](#rpc-url-1)                       | `string` | Required | cannot be null | [Definitions](definitions-definitions-privatenetworkrequest-properties-rpc-url.md "definitions.schema.json#/definitions/private-network-request/properties/rpc-url")                       |
| [api-key](#api-key-2)                       | `string` | Optional | cannot be null | [Definitions](definitions-definitions-privatenetworkrequest-properties-api-key.md "definitions.schema.json#/definitions/private-network-request/properties/api-key")                       |
| [block-explorer-url](#block-explorer-url-1) | `string` | Optional | cannot be null | [Definitions](definitions-definitions-privatenetworkrequest-properties-block-explorer-url.md "definitions.schema.json#/definitions/private-network-request/properties/block-explorer-url") |

### name



`name`

*   is required

*   Type: `string` ([TenantNetwork](definitions-definitions-privatenetworkrequest-properties-tenantnetwork.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-privatenetworkrequest-properties-tenantnetwork.md "definitions.schema.json#/definitions/private-network-request/properties/name")

#### name Type

`string` ([TenantNetwork](definitions-definitions-privatenetworkrequest-properties-tenantnetwork.md))

### configuration



`configuration`

*   is required

*   Type: `object` ([TenantNetworkConfiguration](definitions-definitions-tenantnetworkconfiguration.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-tenantnetworkconfiguration.md "definitions.schema.json#/definitions/private-network-request/properties/configuration")

#### configuration Type

`object` ([TenantNetworkConfiguration](definitions-definitions-tenantnetworkconfiguration.md))

### rpc-url



`rpc-url`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-privatenetworkrequest-properties-rpc-url.md "definitions.schema.json#/definitions/private-network-request/properties/rpc-url")

#### rpc-url Type

`string`

#### rpc-url Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^(http|https)://
```

[try pattern](https://regexr.com/?expression=%5E\(http%7Chttps\)%3A%2F%2F "try regular expression with regexr.com")

### api-key



`api-key`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-privatenetworkrequest-properties-api-key.md "definitions.schema.json#/definitions/private-network-request/properties/api-key")

#### api-key Type

`string`

### block-explorer-url



`block-explorer-url`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-privatenetworkrequest-properties-block-explorer-url.md "definitions.schema.json#/definitions/private-network-request/properties/block-explorer-url")

#### block-explorer-url Type

`string`

#### block-explorer-url Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^(http(s)?://)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$
```

[try pattern](https://regexr.com/?expression=%5E\(http\(s\)%3F%3A%2F%2F\)%5B%5Cw.-%5D%2B\(%3F%3A%5C.%5B%5Cw%5C.-%5D%2B\)%2B%5B%5Cw%5C-%5C._~%3A%2F%3F%23%5B%5C%5D%40!%5C%24%26'%5C\(%5C\)%5C*%5C%2B%2C%3B%3D.%5D%2B%24 "try regular expression with regexr.com")
