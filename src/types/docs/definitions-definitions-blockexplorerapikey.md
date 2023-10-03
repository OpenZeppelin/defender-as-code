## block-explorer-api-key Type

`object` ([BlockExplorerApiKey](definitions-definitions-blockexplorerapikey.md))

# block-explorer-api-key Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                |
| :------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [key](#key)         | `string` | Required | cannot be null | [Definitions](definitions-definitions-blockexplorerapikey-properties-key.md "definitions.schema.json#/definitions/block-explorer-api-key/properties/key") |
| [network](#network) | Merged   | Required | cannot be null | [Definitions](definitions-definitions-network.md "definitions.schema.json#/definitions/block-explorer-api-key/properties/network")                        |

## key



`key`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockexplorerapikey-properties-key.md "definitions.schema.json#/definitions/block-explorer-api-key/properties/key")

### key Type

`string`

## network



`network`

*   is required

*   Type: merged type ([Network](definitions-definitions-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-network.md "definitions.schema.json#/definitions/block-explorer-api-key/properties/network")

### network Type

merged type ([Network](definitions-definitions-network.md))

any of

*   one (and only one) of

    *   [PublicNetwork](definitions-definitions-publicnetwork.md "check type definition")

    *   [CustomNetwork](definitions-definitions-customnetwork.md "check type definition")

*   [ForkedNetwork](definitions-definitions-forkednetwork.md "check type definition")

### network Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")
