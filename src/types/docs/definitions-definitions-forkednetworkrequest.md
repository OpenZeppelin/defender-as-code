## forked-network-request Type

`object` ([ForkedNetworkRequest](definitions-definitions-forkednetworkrequest.md))

# forked-network-request Properties

| Property                                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                               |
| :---------------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                             | `string` | Required | cannot be null | [Definitions](definitions-definitions-tenantnetwork.md "definitions.schema.json#/definitions/forked-network-request/properties/name")                                                    |
| [supported-network](#supported-network)   | Merged   | Required | cannot be null | [Definitions](definitions-definitions-supportednetwork.md "definitions.schema.json#/definitions/forked-network-request/properties/supported-network")                                    |
| [rpc-url](#rpc-url)                       | `string` | Required | cannot be null | [Definitions](definitions-definitions-forkednetworkrequest-properties-rpc-url.md "definitions.schema.json#/definitions/forked-network-request/properties/rpc-url")                       |
| [api-key](#api-key)                       | `string` | Optional | cannot be null | [Definitions](definitions-definitions-forkednetworkrequest-properties-api-key.md "definitions.schema.json#/definitions/forked-network-request/properties/api-key")                       |
| [block-explorer-url](#block-explorer-url) | `string` | Optional | cannot be null | [Definitions](definitions-definitions-forkednetworkrequest-properties-block-explorer-url.md "definitions.schema.json#/definitions/forked-network-request/properties/block-explorer-url") |

## name



`name`

*   is required

*   Type: `string` ([TenantNetwork](definitions-definitions-tenantnetwork.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-tenantnetwork.md "definitions.schema.json#/definitions/forked-network-request/properties/name")

### name Type

`string` ([TenantNetwork](definitions-definitions-tenantnetwork.md))

## supported-network



`supported-network`

*   is required

*   Type: merged type ([SupportedNetwork](definitions-definitions-supportednetwork.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-supportednetwork.md "definitions.schema.json#/definitions/forked-network-request/properties/supported-network")

### supported-network Type

merged type ([SupportedNetwork](definitions-definitions-supportednetwork.md))

one (and only one) of

*   [PublicNetwork](definitions-definitions-publicnetwork.md "check type definition")

*   [CustomNetwork](definitions-definitions-customnetwork.md "check type definition")

## rpc-url



`rpc-url`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-forkednetworkrequest-properties-rpc-url.md "definitions.schema.json#/definitions/forked-network-request/properties/rpc-url")

### rpc-url Type

`string`

### rpc-url Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^(http|https)://
```

[try pattern](https://regexr.com/?expression=%5E\(http%7Chttps\)%3A%2F%2F "try regular expression with regexr.com")

## api-key



`api-key`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-forkednetworkrequest-properties-api-key.md "definitions.schema.json#/definitions/forked-network-request/properties/api-key")

### api-key Type

`string`

## block-explorer-url



`block-explorer-url`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-forkednetworkrequest-properties-block-explorer-url.md "definitions.schema.json#/definitions/forked-network-request/properties/block-explorer-url")

### block-explorer-url Type

`string`

### block-explorer-url Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^(http(s)?://)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$
```

[try pattern](https://regexr.com/?expression=%5E\(http\(s\)%3F%3A%2F%2F\)%5B%5Cw.-%5D%2B\(%3F%3A%5C.%5B%5Cw%5C.-%5D%2B\)%2B%5B%5Cw%5C-%5C._~%3A%2F%3F%23%5B%5C%5D%40!%5C%24%26'%5C\(%5C\)%5C*%5C%2B%2C%3B%3D.%5D%2B%24 "try regular expression with regexr.com")
