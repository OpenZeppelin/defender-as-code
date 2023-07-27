## Definitions Type

unknown ([Definitions](definitions.md))

# Definitions Definitions

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

## Definitions group network

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/network"}
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
| [private-transactions](#private-transactions) | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-policy-properties-private-transactions.md "definitions.schema.json#/definitions/policy/properties/private-transactions") |

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

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy-properties-private-transactions.md "definitions.schema.json#/definitions/policy/properties/private-transactions")

#### private-transactions Type

`boolean`

## Definitions group relayer

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/relayer"}
```

| Property                                      | Type      | Required | Nullable       | Defined by                                                                                                                                                     |
| :-------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                                 | `string`  | Required | cannot be null | [Definitions](definitions-definitions-relayer-properties-name.md "definitions.schema.json#/definitions/relayer/properties/name")                               |
| [network](#network)                           | `string`  | Required | cannot be null | [Definitions](definitions-definitions-relayer-properties-network.md "definitions.schema.json#/definitions/relayer/properties/network")                         |
| [min-balance](#min-balance)                   | `integer` | Required | cannot be null | [Definitions](definitions-definitions-relayer-properties-min-balance.md "definitions.schema.json#/definitions/relayer/properties/min-balance")                 |
| [address-from-relayer](#address-from-relayer) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-relayer-properties-addressfromrelayer.md "definitions.schema.json#/definitions/relayer/properties/address-from-relayer") |
| [policy](#policy)                             | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-policy.md "definitions.schema.json#/definitions/relayer/properties/policy")                                              |
| [api-keys](#api-keys)                         | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-relayer-properties-relayerapikeys.md "definitions.schema.json#/definitions/relayer/properties/api-keys")                 |

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

*   Type: `string` ([Network](definitions-definitions-relayer-properties-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-network.md "definitions.schema.json#/definitions/relayer/properties/network")

#### network Type

`string` ([Network](definitions-definitions-relayer-properties-network.md))

#### network Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | :---------- |
| `"mainnet"`               |             |
| `"sepolia"`               |             |
| `"goerli"`                |             |
| `"xdai"`                  |             |
| `"sokol"`                 |             |
| `"fuse"`                  |             |
| `"bsc"`                   |             |
| `"bsctest"`               |             |
| `"fantom"`                |             |
| `"fantomtest"`            |             |
| `"moonbase"`              |             |
| `"moonriver"`             |             |
| `"moonbeam"`              |             |
| `"matic"`                 |             |
| `"mumbai"`                |             |
| `"avalanche"`             |             |
| `"fuji"`                  |             |
| `"optimism"`              |             |
| `"optimism-goerli"`       |             |
| `"arbitrum"`              |             |
| `"arbitrum-nova"`         |             |
| `"arbitrum-goerli"`       |             |
| `"celo"`                  |             |
| `"alfajores"`             |             |
| `"harmony-s0"`            |             |
| `"harmony-test-s0"`       |             |
| `"aurora"`                |             |
| `"auroratest"`            |             |
| `"hedera"`                |             |
| `"hederatest"`            |             |
| `"x-dfk-avax-chain"`      |             |
| `"x-dfk-avax-chain-test"` |             |
| `"zksync"`                |             |
| `"zksync-goerli"`         |             |
| `"base"`                  |             |
| `"base-goerli"`           |             |
| `"linea-goerli"`          |             |

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

*   Type: `object` ([AddressFromRelayer](definitions-definitions-relayer-properties-addressfromrelayer.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-addressfromrelayer.md "definitions.schema.json#/definitions/relayer/properties/address-from-relayer")

#### address-from-relayer Type

`object` ([AddressFromRelayer](definitions-definitions-relayer-properties-addressfromrelayer.md))

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

## Definitions group contract

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/contract"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                 |
| :-------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-1)       | `string` | Required | cannot be null | [Definitions](definitions-definitions-contract-properties-name.md "definitions.schema.json#/definitions/contract/properties/name")         |
| [address](#address)   | `string` | Required | cannot be null | [Definitions](definitions-definitions-contract-properties-address.md "definitions.schema.json#/definitions/contract/properties/address")   |
| [network](#network-1) | `string` | Required | cannot be null | [Definitions](definitions-definitions-contract-properties-network.md "definitions.schema.json#/definitions/contract/properties/network")   |
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

*   Type: `string` ([Network](definitions-definitions-contract-properties-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-contract-properties-network.md "definitions.schema.json#/definitions/contract/properties/network")

#### network Type

`string` ([Network](definitions-definitions-contract-properties-network.md))

#### network Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | :---------- |
| `"mainnet"`               |             |
| `"sepolia"`               |             |
| `"goerli"`                |             |
| `"xdai"`                  |             |
| `"sokol"`                 |             |
| `"fuse"`                  |             |
| `"bsc"`                   |             |
| `"bsctest"`               |             |
| `"fantom"`                |             |
| `"fantomtest"`            |             |
| `"moonbase"`              |             |
| `"moonriver"`             |             |
| `"moonbeam"`              |             |
| `"matic"`                 |             |
| `"mumbai"`                |             |
| `"avalanche"`             |             |
| `"fuji"`                  |             |
| `"optimism"`              |             |
| `"optimism-goerli"`       |             |
| `"arbitrum"`              |             |
| `"arbitrum-nova"`         |             |
| `"arbitrum-goerli"`       |             |
| `"celo"`                  |             |
| `"alfajores"`             |             |
| `"harmony-s0"`            |             |
| `"harmony-test-s0"`       |             |
| `"aurora"`                |             |
| `"auroratest"`            |             |
| `"hedera"`                |             |
| `"hederatest"`            |             |
| `"x-dfk-avax-chain"`      |             |
| `"x-dfk-avax-chain-test"` |             |
| `"zksync"`                |             |
| `"zksync-goerli"`         |             |
| `"base"`                  |             |
| `"base-goerli"`           |             |
| `"linea-goerli"`          |             |

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
| [name](#name-2)   | `string`  | Required | cannot be null | [Definitions](definitions-definitions-notification-properties-name.md "definitions.schema.json#/definitions/notification/properties/name")             |
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

## Definitions group category

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/category"}
```

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                                                        |
| :------------------------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-3)                       | `string` | Required | cannot be null | [Definitions](definitions-definitions-category-properties-name.md "definitions.schema.json#/definitions/category/properties/name")                                |
| [description](#description)           | `string` | Optional | cannot be null | [Definitions](definitions-definitions-category-properties-description.md "definitions.schema.json#/definitions/category/properties/description")                  |
| [notification-ids](#notification-ids) | `array`  | Optional | cannot be null | [Definitions](definitions-definitions-category-properties-categorynotificationids.md "definitions.schema.json#/definitions/category/properties/notification-ids") |

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-category-properties-name.md "definitions.schema.json#/definitions/category/properties/name")

#### name Type

`string`

### description



`description`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-category-properties-description.md "definitions.schema.json#/definitions/category/properties/description")

#### description Type

`string`

### notification-ids



`notification-ids`

*   is optional

*   Type: `object[]` ([Notification](definitions-definitions-notification.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-category-properties-categorynotificationids.md "definitions.schema.json#/definitions/category/properties/notification-ids")

#### notification-ids Type

`object[]` ([Notification](definitions-definitions-notification.md))

## Definitions group blockMonitor

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/blockMonitor"}
```

| Property                              | Type      | Required | Nullable       | Defined by                                                                                                                                                      |
| :------------------------------------ | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-4)                       | `string`  | Required | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-name.md "definitions.schema.json#/definitions/blockMonitor/properties/name")                      |
| [type](#type-2)                       | `string`  | Required | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-type.md "definitions.schema.json#/definitions/blockMonitor/properties/type")                      |
| [network](#network-2)                 | `string`  | Required | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-network.md "definitions.schema.json#/definitions/blockMonitor/properties/network")                |
| [addresses](#addresses)               | `array`   | Required | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-addresses.md "definitions.schema.json#/definitions/blockMonitor/properties/addresses")            |
| [abi](#abi-1)                         | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-abitype.md "definitions.schema.json#/definitions/blockMonitor/properties/abi")                                            |
| [alert-threshold](#alert-threshold)   | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-alertthreshold.md "definitions.schema.json#/definitions/blockMonitor/properties/alert-threshold") |
| [paused](#paused-1)                   | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-paused.md "definitions.schema.json#/definitions/blockMonitor/properties/paused")                  |
| [action-condition](#action-condition) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-action.md "definitions.schema.json#/definitions/blockMonitor/properties/action-condition")                                |
| [action-trigger](#action-trigger)     | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-action.md "definitions.schema.json#/definitions/blockMonitor/properties/action-trigger")                                  |
| [confirm-level](#confirm-level)       | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-confirm-level.md "definitions.schema.json#/definitions/blockMonitor/properties/confirm-level")    |
| [notify-config](#notify-config)       | `object`  | Required | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig.md "definitions.schema.json#/definitions/blockMonitor/properties/notify-config")     |
| [conditions](#conditions)             | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-conditions.md "definitions.schema.json#/definitions/blockMonitor/properties/conditions")          |
| [risk-category](#risk-category)       | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-riskcategory.md "definitions.schema.json#/definitions/blockMonitor/properties/risk-category")     |

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-name.md "definitions.schema.json#/definitions/blockMonitor/properties/name")

#### name Type

`string`

### type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-type.md "definitions.schema.json#/definitions/blockMonitor/properties/type")

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

*   Type: `string` ([Network](definitions-definitions-blockmonitor-properties-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-network.md "definitions.schema.json#/definitions/blockMonitor/properties/network")

#### network Type

`string` ([Network](definitions-definitions-blockmonitor-properties-network.md))

#### network Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | :---------- |
| `"mainnet"`               |             |
| `"sepolia"`               |             |
| `"goerli"`                |             |
| `"xdai"`                  |             |
| `"sokol"`                 |             |
| `"fuse"`                  |             |
| `"bsc"`                   |             |
| `"bsctest"`               |             |
| `"fantom"`                |             |
| `"fantomtest"`            |             |
| `"moonbase"`              |             |
| `"moonriver"`             |             |
| `"moonbeam"`              |             |
| `"matic"`                 |             |
| `"mumbai"`                |             |
| `"avalanche"`             |             |
| `"fuji"`                  |             |
| `"optimism"`              |             |
| `"optimism-goerli"`       |             |
| `"arbitrum"`              |             |
| `"arbitrum-nova"`         |             |
| `"arbitrum-goerli"`       |             |
| `"celo"`                  |             |
| `"alfajores"`             |             |
| `"harmony-s0"`            |             |
| `"harmony-test-s0"`       |             |
| `"aurora"`                |             |
| `"auroratest"`            |             |
| `"hedera"`                |             |
| `"hederatest"`            |             |
| `"x-dfk-avax-chain"`      |             |
| `"x-dfk-avax-chain-test"` |             |
| `"zksync"`                |             |
| `"zksync-goerli"`         |             |
| `"base"`                  |             |
| `"base-goerli"`           |             |
| `"linea-goerli"`          |             |

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### addresses



`addresses`

*   is required

*   Type: `string[]` ([Address](definitions-definitions-blockmonitor-properties-addresses-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-addresses.md "definitions.schema.json#/definitions/blockMonitor/properties/addresses")

#### addresses Type

`string[]` ([Address](definitions-definitions-blockmonitor-properties-addresses-address.md))

### abi



`abi`

*   is optional

*   Type: merged type ([AbiType](definitions-definitions-abitype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-abitype.md "definitions.schema.json#/definitions/blockMonitor/properties/abi")

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

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-alertthreshold.md "definitions.schema.json#/definitions/blockMonitor/properties/alert-threshold")

#### alert-threshold Type

`object` ([AlertThreshold](definitions-definitions-blockmonitor-properties-alertthreshold.md))

### paused



`paused`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-paused.md "definitions.schema.json#/definitions/blockMonitor/properties/paused")

#### paused Type

`boolean`

### action-condition



`action-condition`

*   is optional

*   Type: `object` ([Action](definitions-definitions-action.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action.md "definitions.schema.json#/definitions/blockMonitor/properties/action-condition")

#### action-condition Type

`object` ([Action](definitions-definitions-action.md))

#### action-condition Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### action-trigger



`action-trigger`

*   is optional

*   Type: `object` ([Action](definitions-definitions-action.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action.md "definitions.schema.json#/definitions/blockMonitor/properties/action-trigger")

#### action-trigger Type

`object` ([Action](definitions-definitions-action.md))

#### action-trigger Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### confirm-level



`confirm-level`

*   is optional

*   Type: merged type ([Details](definitions-definitions-blockmonitor-properties-confirm-level.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-confirm-level.md "definitions.schema.json#/definitions/blockMonitor/properties/confirm-level")

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

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig.md "definitions.schema.json#/definitions/blockMonitor/properties/notify-config")

#### notify-config Type

`object` ([NotifyConfig](definitions-definitions-blockmonitor-properties-notifyconfig.md))

### conditions



`conditions`

*   is optional

*   Type: `object` ([Conditions](definitions-definitions-blockmonitor-properties-conditions.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-conditions.md "definitions.schema.json#/definitions/blockMonitor/properties/conditions")

#### conditions Type

`object` ([Conditions](definitions-definitions-blockmonitor-properties-conditions.md))

### risk-category



`risk-category`

*   is optional

*   Type: `string` ([RiskCategory](definitions-definitions-blockmonitor-properties-riskcategory.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-riskcategory.md "definitions.schema.json#/definitions/blockMonitor/properties/risk-category")

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

## Definitions group fortaMonitor

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/fortaMonitor"}
```

| Property                                                | Type      | Required | Nullable       | Defined by                                                                                                                                                                           |
| :------------------------------------------------------ | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-5)                                         | `string`  | Required | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-name.md "definitions.schema.json#/definitions/fortaMonitor/properties/name")                                           |
| [type](#type-3)                                         | `string`  | Required | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-type.md "definitions.schema.json#/definitions/fortaMonitor/properties/type")                                           |
| [network](#network-3)                                   | `string`  | Required | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-network.md "definitions.schema.json#/definitions/fortaMonitor/properties/network")                                     |
| [addresses](#addresses-1)                               | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-addresses.md "definitions.schema.json#/definitions/fortaMonitor/properties/addresses")                                 |
| [abi](#abi-2)                                           | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-abitype.md "definitions.schema.json#/definitions/fortaMonitor/properties/abi")                                                                 |
| [alert-threshold](#alert-threshold-1)                   | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-alertthreshold.md "definitions.schema.json#/definitions/fortaMonitor/properties/alert-threshold")                      |
| [paused](#paused-2)                                     | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-paused.md "definitions.schema.json#/definitions/fortaMonitor/properties/paused")                                       |
| [action-condition](#action-condition-1)                 | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-action.md "definitions.schema.json#/definitions/fortaMonitor/properties/action-condition")                                                     |
| [action-trigger](#action-trigger-1)                     | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-action.md "definitions.schema.json#/definitions/fortaMonitor/properties/action-trigger")                                                       |
| [notify-config](#notify-config-1)                       | `object`  | Required | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-notifyconfig.md "definitions.schema.json#/definitions/fortaMonitor/properties/notify-config")                          |
| [conditions](#conditions-1)                             | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-conditions.md "definitions.schema.json#/definitions/fortaMonitor/properties/conditions")                               |
| [forta-node-id](#forta-node-id)                         | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-forta-node-id.md "definitions.schema.json#/definitions/fortaMonitor/properties/forta-node-id")                         |
| [forta-last-processed-time](#forta-last-processed-time) | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-forta-last-processed-time.md "definitions.schema.json#/definitions/fortaMonitor/properties/forta-last-processed-time") |
| [agent-ids](#agent-ids)                                 | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-agentids.md "definitions.schema.json#/definitions/fortaMonitor/properties/agent-ids")                                  |
| [risk-category](#risk-category-1)                       | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-riskcategory.md "definitions.schema.json#/definitions/fortaMonitor/properties/risk-category")                          |

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-name.md "definitions.schema.json#/definitions/fortaMonitor/properties/name")

#### name Type

`string`

### type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-type.md "definitions.schema.json#/definitions/fortaMonitor/properties/type")

#### type Type

`string`

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"FORTA"` |             |

### network



`network`

*   is required

*   Type: `string` ([Network](definitions-definitions-fortamonitor-properties-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-network.md "definitions.schema.json#/definitions/fortaMonitor/properties/network")

#### network Type

`string` ([Network](definitions-definitions-fortamonitor-properties-network.md))

#### network Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | :---------- |
| `"mainnet"`               |             |
| `"sepolia"`               |             |
| `"goerli"`                |             |
| `"xdai"`                  |             |
| `"sokol"`                 |             |
| `"fuse"`                  |             |
| `"bsc"`                   |             |
| `"bsctest"`               |             |
| `"fantom"`                |             |
| `"fantomtest"`            |             |
| `"moonbase"`              |             |
| `"moonriver"`             |             |
| `"moonbeam"`              |             |
| `"matic"`                 |             |
| `"mumbai"`                |             |
| `"avalanche"`             |             |
| `"fuji"`                  |             |
| `"optimism"`              |             |
| `"optimism-goerli"`       |             |
| `"arbitrum"`              |             |
| `"arbitrum-nova"`         |             |
| `"arbitrum-goerli"`       |             |
| `"celo"`                  |             |
| `"alfajores"`             |             |
| `"harmony-s0"`            |             |
| `"harmony-test-s0"`       |             |
| `"aurora"`                |             |
| `"auroratest"`            |             |
| `"hedera"`                |             |
| `"hederatest"`            |             |
| `"x-dfk-avax-chain"`      |             |
| `"x-dfk-avax-chain-test"` |             |
| `"zksync"`                |             |
| `"zksync-goerli"`         |             |
| `"base"`                  |             |
| `"base-goerli"`           |             |
| `"linea-goerli"`          |             |

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### addresses



`addresses`

*   is optional

*   Type: `string[]` ([Address](definitions-definitions-fortamonitor-properties-addresses-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-addresses.md "definitions.schema.json#/definitions/fortaMonitor/properties/addresses")

#### addresses Type

`string[]` ([Address](definitions-definitions-fortamonitor-properties-addresses-address.md))

### abi



`abi`

*   is optional

*   Type: merged type ([AbiType](definitions-definitions-abitype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-abitype.md "definitions.schema.json#/definitions/fortaMonitor/properties/abi")

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

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-alertthreshold.md "definitions.schema.json#/definitions/fortaMonitor/properties/alert-threshold")

#### alert-threshold Type

`object` ([AlertThreshold](definitions-definitions-fortamonitor-properties-alertthreshold.md))

### paused



`paused`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-paused.md "definitions.schema.json#/definitions/fortaMonitor/properties/paused")

#### paused Type

`boolean`

### action-condition



`action-condition`

*   is optional

*   Type: `object` ([Action](definitions-definitions-action.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action.md "definitions.schema.json#/definitions/fortaMonitor/properties/action-condition")

#### action-condition Type

`object` ([Action](definitions-definitions-action.md))

#### action-condition Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### action-trigger



`action-trigger`

*   is optional

*   Type: `object` ([Action](definitions-definitions-action.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action.md "definitions.schema.json#/definitions/fortaMonitor/properties/action-trigger")

#### action-trigger Type

`object` ([Action](definitions-definitions-action.md))

#### action-trigger Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### notify-config



`notify-config`

*   is required

*   Type: `object` ([NotifyConfig](definitions-definitions-fortamonitor-properties-notifyconfig.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-notifyconfig.md "definitions.schema.json#/definitions/fortaMonitor/properties/notify-config")

#### notify-config Type

`object` ([NotifyConfig](definitions-definitions-fortamonitor-properties-notifyconfig.md))

### conditions



`conditions`

*   is optional

*   Type: `object` ([Conditions](definitions-definitions-fortamonitor-properties-conditions.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-conditions.md "definitions.schema.json#/definitions/fortaMonitor/properties/conditions")

#### conditions Type

`object` ([Conditions](definitions-definitions-fortamonitor-properties-conditions.md))

### forta-node-id



`forta-node-id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-forta-node-id.md "definitions.schema.json#/definitions/fortaMonitor/properties/forta-node-id")

#### forta-node-id Type

`string`

### forta-last-processed-time



`forta-last-processed-time`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-forta-last-processed-time.md "definitions.schema.json#/definitions/fortaMonitor/properties/forta-last-processed-time")

#### forta-last-processed-time Type

`string`

### agent-ids



`agent-ids`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-agentids.md "definitions.schema.json#/definitions/fortaMonitor/properties/agent-ids")

#### agent-ids Type

`string[]`

### risk-category



`risk-category`

*   is optional

*   Type: `string` ([RiskCategory](definitions-definitions-fortamonitor-properties-riskcategory.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-riskcategory.md "definitions.schema.json#/definitions/fortaMonitor/properties/risk-category")

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

## Definitions group action

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/action"}
```

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                           |
| :------------------ | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-6)     | `string`  | Required | cannot be null | [Definitions](definitions-definitions-action-properties-name.md "definitions.schema.json#/definitions/action/properties/name")       |
| [path](#path)       | `string`  | Required | cannot be null | [Definitions](definitions-definitions-action-properties-path.md "definitions.schema.json#/definitions/action/properties/path")       |
| [relayer](#relayer) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-relayer.md "definitions.schema.json#/definitions/action/properties/relayer")                   |
| [trigger](#trigger) | `object`  | Required | cannot be null | [Definitions](definitions-definitions-action-properties-trigger.md "definitions.schema.json#/definitions/action/properties/trigger") |
| [paused](#paused-3) | `boolean` | Required | cannot be null | [Definitions](definitions-definitions-action-properties-paused.md "definitions.schema.json#/definitions/action/properties/paused")   |

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

*   Type: `object` ([Relayer](definitions-definitions-relayer.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer.md "definitions.schema.json#/definitions/action/properties/relayer")

#### relayer Type

`object` ([Relayer](definitions-definitions-relayer.md))

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

## Definitions group blockExplorerApiKey

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/blockExplorerApiKey"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                     |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [key](#key)           | `string` | Required | cannot be null | [Definitions](definitions-definitions-blockexplorerapikey-properties-key.md "definitions.schema.json#/definitions/blockExplorerApiKey/properties/key")         |
| [network](#network-4) | `string` | Required | cannot be null | [Definitions](definitions-definitions-blockexplorerapikey-properties-network.md "definitions.schema.json#/definitions/blockExplorerApiKey/properties/network") |

### key



`key`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockexplorerapikey-properties-key.md "definitions.schema.json#/definitions/blockExplorerApiKey/properties/key")

#### key Type

`string`

### network



`network`

*   is required

*   Type: `string` ([Network](definitions-definitions-blockexplorerapikey-properties-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockexplorerapikey-properties-network.md "definitions.schema.json#/definitions/blockExplorerApiKey/properties/network")

#### network Type

`string` ([Network](definitions-definitions-blockexplorerapikey-properties-network.md))

#### network Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | :---------- |
| `"mainnet"`               |             |
| `"sepolia"`               |             |
| `"goerli"`                |             |
| `"xdai"`                  |             |
| `"sokol"`                 |             |
| `"fuse"`                  |             |
| `"bsc"`                   |             |
| `"bsctest"`               |             |
| `"fantom"`                |             |
| `"fantomtest"`            |             |
| `"moonbase"`              |             |
| `"moonriver"`             |             |
| `"moonbeam"`              |             |
| `"matic"`                 |             |
| `"mumbai"`                |             |
| `"avalanche"`             |             |
| `"fuji"`                  |             |
| `"optimism"`              |             |
| `"optimism-goerli"`       |             |
| `"arbitrum"`              |             |
| `"arbitrum-nova"`         |             |
| `"arbitrum-goerli"`       |             |
| `"celo"`                  |             |
| `"alfajores"`             |             |
| `"harmony-s0"`            |             |
| `"harmony-test-s0"`       |             |
| `"aurora"`                |             |
| `"auroratest"`            |             |
| `"hedera"`                |             |
| `"hederatest"`            |             |
| `"x-dfk-avax-chain"`      |             |
| `"x-dfk-avax-chain-test"` |             |
| `"zksync"`                |             |
| `"zksync-goerli"`         |             |
| `"base"`                  |             |
| `"base-goerli"`           |             |
| `"linea-goerli"`          |             |

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## Definitions group abi

Reference this group by using

```json
{"$ref":"definitions.schema.json#/definitions/abi"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |
