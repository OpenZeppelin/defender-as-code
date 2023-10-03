## 0 Type

`object` ([Relayer](definitions-definitions-relayer.md))

## 0 Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# 0 Properties

| Property                                      | Type      | Required | Nullable       | Defined by                                                                                                                                     |
| :-------------------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                                 | `string`  | Required | cannot be null | [Definitions](definitions-definitions-relayer-properties-name.md "definitions.schema.json#/definitions/relayer/properties/name")               |
| [network](#network)                           | Merged    | Required | cannot be null | [Definitions](definitions-definitions-network.md "definitions.schema.json#/definitions/relayer/properties/network")                            |
| [min-balance](#min-balance)                   | `integer` | Required | cannot be null | [Definitions](definitions-definitions-relayer-properties-min-balance.md "definitions.schema.json#/definitions/relayer/properties/min-balance") |
| [address-from-relayer](#address-from-relayer) | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-relayerordefenderid.md "definitions.schema.json#/definitions/relayer/properties/address-from-relayer")   |
| [policy](#policy)                             | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-policy.md "definitions.schema.json#/definitions/relayer/properties/policy")                              |
| [api-keys](#api-keys)                         | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-relayer-properties-relayerapikeys.md "definitions.schema.json#/definitions/relayer/properties/api-keys") |

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

*   [ForkedNetwork](definitions-definitions-forkednetwork.md "check type definition")

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

*   Type: merged type ([RelayerOrDefenderID](definitions-definitions-relayerordefenderid.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayerordefenderid.md "definitions.schema.json#/definitions/relayer/properties/address-from-relayer")

### address-from-relayer Type

merged type ([RelayerOrDefenderID](definitions-definitions-relayerordefenderid.md))

any of

*   [Relayer](definitions-definitions-relayer.md "check type definition")

*   [DefenderID](definitions-definitions-defenderid.md "check type definition")

### address-from-relayer Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

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
