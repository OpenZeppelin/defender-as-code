## 0 Type

`object` ([Relayer](definitions-definitions-relayer.md))

## 0 Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# 0 Properties

| Property                                        | Type      | Required | Nullable       | Defined by                                                                                                                                                     |
| :---------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                                   | `string`  | Required | cannot be null | [Definitions](definitions-definitions-relayer-properties-name.md "definitions.schema.json#/definitions/relayer/properties/name")                               |
| [network](#network)                             | Merged    | Required | cannot be null | [Definitions](definitions-definitions-network.md "definitions.schema.json#/definitions/relayer/properties/network")                                            |
| [min-balance](#min-balance)                     | `integer` | Required | cannot be null | [Definitions](definitions-definitions-relayer-properties-min-balance.md "definitions.schema.json#/definitions/relayer/properties/min-balance")                 |
| [address-from-relayer](#address-from-relayer)   | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-relayer-properties-addressfromrelayer.md "definitions.schema.json#/definitions/relayer/properties/address-from-relayer") |
| [policy](#policy)                               | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-policy.md "definitions.schema.json#/definitions/relayer/properties/policy")                                              |
| [api-keys](#api-keys)                           | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-relayer-properties-relayerapikeys.md "definitions.schema.json#/definitions/relayer/properties/api-keys")                 |
| [relayer-group-id](#relayer-group-id)           | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-defenderid.md "definitions.schema.json#/definitions/relayer/properties/relayer-group-id")                                |
| [notification-channels](#notification-channels) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-notificationchannels.md "definitions.schema.json#/definitions/relayer/properties/notification-channels")                 |

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-name.md "definitions.schema.json#/definitions/relayer/properties/name")

### name Type

`string`

## network



`network`

*   is required

*   Type: merged type ([Network](definitions-definitions-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-network.md "definitions.schema.json#/definitions/relayer/properties/network")

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

*   defined in: [Definitions](definitions-definitions-relayer-properties-min-balance.md "definitions.schema.json#/definitions/relayer/properties/min-balance")

### min-balance Type

`integer`

## address-from-relayer



`address-from-relayer`

*   is optional

*   Type: merged type ([AddressFromRelayer](definitions-definitions-relayer-properties-addressfromrelayer.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-addressfromrelayer.md "definitions.schema.json#/definitions/relayer/properties/address-from-relayer")

### address-from-relayer Type

merged type ([AddressFromRelayer](definitions-definitions-relayer-properties-addressfromrelayer.md))

any of

*   [Untitled object in Definitions](definitions-definitions-relayer-properties-addressfromrelayer-anyof-0.md "check type definition")

*   [Untitled string in Definitions](definitions-definitions-relayer-properties-addressfromrelayer-anyof-1.md "check type definition")

## policy



`policy`

*   is optional

*   Type: `object` ([Policy](definitions-definitions-policy.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy.md "definitions.schema.json#/definitions/relayer/properties/policy")

### policy Type

`object` ([Policy](definitions-definitions-policy.md))

### policy Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## api-keys



`api-keys`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-relayerapikeys.md "definitions.schema.json#/definitions/relayer/properties/api-keys")

### api-keys Type

`string[]`

## relayer-group-id



`relayer-group-id`

*   is optional

*   Type: `string` ([DefenderID](definitions-definitions-defenderid.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-defenderid.md "definitions.schema.json#/definitions/relayer/properties/relayer-group-id")

### relayer-group-id Type

`string` ([DefenderID](definitions-definitions-defenderid.md))

### relayer-group-id Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-(8|9|a|b)[0-9a-fA-F]{3}-[0-9a-fA-F]{12}$
```

[try pattern](https://regexr.com/?expression=%5E%5B0-9a-fA-F%5D%7B8%7D-%5B0-9a-fA-F%5D%7B4%7D-4%5B0-9a-fA-F%5D%7B3%7D-\(8%7C9%7Ca%7Cb\)%5B0-9a-fA-F%5D%7B3%7D-%5B0-9a-fA-F%5D%7B12%7D%24 "try regular expression with regexr.com")

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## notification-channels



`notification-channels`

*   is optional

*   Type: `object` ([NotificationChannels](definitions-definitions-notificationchannels.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notificationchannels.md "definitions.schema.json#/definitions/relayer/properties/notification-channels")

### notification-channels Type

`object` ([NotificationChannels](definitions-definitions-notificationchannels.md))

### notification-channels Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")
