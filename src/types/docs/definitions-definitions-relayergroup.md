## 0 Type

`object` ([RelayerGroup](definitions-definitions-relayergroup.md))

## 0 Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# 0 Properties

| Property                                        | Type      | Required | Nullable       | Defined by                                                                                                                                                        |
| :---------------------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                                   | `string`  | Required | cannot be null | [Definitions](definitions-definitions-relayergroup-properties-name.md "definitions.schema.json#/definitions/relayer-group/properties/name")                       |
| [network](#network)                             | Merged    | Required | cannot be null | [Definitions](definitions-definitions-network.md "definitions.schema.json#/definitions/relayer-group/properties/network")                                         |
| [min-balance](#min-balance)                     | `integer` | Required | cannot be null | [Definitions](definitions-definitions-relayergroup-properties-min-balance.md "definitions.schema.json#/definitions/relayer-group/properties/min-balance")         |
| [relayers](#relayers)                           | `integer` | Optional | cannot be null | [Definitions](definitions-definitions-relayergroup-properties-relayers.md "definitions.schema.json#/definitions/relayer-group/properties/relayers")               |
| [policy](#policy)                               | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-policy.md "definitions.schema.json#/definitions/relayer-group/properties/policy")                                           |
| [user-weight-caps](#user-weight-caps)           | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-relayergroup-properties-userweightcaps.md "definitions.schema.json#/definitions/relayer-group/properties/user-weight-caps") |
| [notification-channels](#notification-channels) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-notificationchannels.md "definitions.schema.json#/definitions/relayer-group/properties/notification-channels")              |
| [api-keys](#api-keys)                           | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-relayergroup-properties-relayergroupapikeys.md "definitions.schema.json#/definitions/relayer-group/properties/api-keys")    |

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayergroup-properties-name.md "definitions.schema.json#/definitions/relayer-group/properties/name")

### name Type

`string`

## network



`network`

*   is required

*   Type: merged type ([Network](definitions-definitions-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-network.md "definitions.schema.json#/definitions/relayer-group/properties/network")

### network Type

merged type ([Network](definitions-definitions-network.md))

any of

*   one (and only one) of

    *   [PublicNetwork](definitions-definitions-publicnetwork.md "check type definition")

    *   [CustomNetwork](definitions-definitions-customnetwork.md "check type definition")

*   [TenantNetwork](definitions-definitions-tenantnetwork.md "check type definition")

### network Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## min-balance



`min-balance`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayergroup-properties-min-balance.md "definitions.schema.json#/definitions/relayer-group/properties/min-balance")

### min-balance Type

`integer`

## relayers



`relayers`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayergroup-properties-relayers.md "definitions.schema.json#/definitions/relayer-group/properties/relayers")

### relayers Type

`integer`

## policy



`policy`

*   is optional

*   Type: `object` ([Policy](definitions-definitions-policy.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy.md "definitions.schema.json#/definitions/relayer-group/properties/policy")

### policy Type

`object` ([Policy](definitions-definitions-policy.md))

### policy Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## user-weight-caps



`user-weight-caps`

*   is optional

*   Type: `object` ([UserWeightCaps](definitions-definitions-relayergroup-properties-userweightcaps.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayergroup-properties-userweightcaps.md "definitions.schema.json#/definitions/relayer-group/properties/user-weight-caps")

### user-weight-caps Type

`object` ([UserWeightCaps](definitions-definitions-relayergroup-properties-userweightcaps.md))

## notification-channels



`notification-channels`

*   is optional

*   Type: `object` ([NotificationChannels](definitions-definitions-notificationchannels.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notificationchannels.md "definitions.schema.json#/definitions/relayer-group/properties/notification-channels")

### notification-channels Type

`object` ([NotificationChannels](definitions-definitions-notificationchannels.md))

### notification-channels Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## api-keys



`api-keys`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayergroup-properties-relayergroupapikeys.md "definitions.schema.json#/definitions/relayer-group/properties/api-keys")

### api-keys Type

`string[]`
