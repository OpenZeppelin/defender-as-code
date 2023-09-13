## additionalProperties Type

`object` ([ForkedNetworkRequest](definitions-definitions-forkednetworkrequest.md))

## additionalProperties Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# additionalProperties Properties

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                                                                         |
| :------------------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                         | `string` | Required | cannot be null | [Definitions](definitions-definitions-forkednetwork.md "definitions.schema.json#/definitions/forkedNetworkRequest/properties/name")                                                |
| [forkedNetwork](#forkednetwork)       | Merged   | Required | cannot be null | [Definitions](definitions-definitions-supportednetwork.md "definitions.schema.json#/definitions/forkedNetworkRequest/properties/forkedNetwork")                                    |
| [rpcUrl](#rpcurl)                     | `string` | Required | cannot be null | [Definitions](definitions-definitions-forkednetworkrequest-properties-rpcurl.md "definitions.schema.json#/definitions/forkedNetworkRequest/properties/rpcUrl")                     |
| [apiKey](#apikey)                     | `string` | Optional | cannot be null | [Definitions](definitions-definitions-forkednetworkrequest-properties-apikey.md "definitions.schema.json#/definitions/forkedNetworkRequest/properties/apiKey")                     |
| [blockExplorerUrl](#blockexplorerurl) | `string` | Optional | cannot be null | [Definitions](definitions-definitions-forkednetworkrequest-properties-blockexplorerurl.md "definitions.schema.json#/definitions/forkedNetworkRequest/properties/blockExplorerUrl") |

## name



`name`

*   is required

*   Type: `string` ([ForkedNetwork](definitions-definitions-forkednetwork.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-forkednetwork.md "definitions.schema.json#/definitions/forkedNetworkRequest/properties/name")

### name Type

`string` ([ForkedNetwork](definitions-definitions-forkednetwork.md))

## forkedNetwork



`forkedNetwork`

*   is required

*   Type: merged type ([SupportedNetwork](definitions-definitions-supportednetwork.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-supportednetwork.md "definitions.schema.json#/definitions/forkedNetworkRequest/properties/forkedNetwork")

### forkedNetwork Type

merged type ([SupportedNetwork](definitions-definitions-supportednetwork.md))

one (and only one) of

*   [PublicNetwork](definitions-definitions-publicnetwork.md "check type definition")

*   [CustomNetwork](definitions-definitions-customnetwork.md "check type definition")

## rpcUrl



`rpcUrl`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-forkednetworkrequest-properties-rpcurl.md "definitions.schema.json#/definitions/forkedNetworkRequest/properties/rpcUrl")

### rpcUrl Type

`string`

### rpcUrl Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^(http(s)?://)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$
```

[try pattern](https://regexr.com/?expression=%5E\(http\(s\)%3F%3A%2F%2F\)%5B%5Cw.-%5D%2B\(%3F%3A%5C.%5B%5Cw%5C.-%5D%2B\)%2B%5B%5Cw%5C-%5C._~%3A%2F%3F%23%5B%5C%5D%40!%5C%24%26'%5C\(%5C\)%5C*%5C%2B%2C%3B%3D.%5D%2B%24 "try regular expression with regexr.com")

## apiKey



`apiKey`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-forkednetworkrequest-properties-apikey.md "definitions.schema.json#/definitions/forkedNetworkRequest/properties/apiKey")

### apiKey Type

`string`

## blockExplorerUrl



`blockExplorerUrl`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-forkednetworkrequest-properties-blockexplorerurl.md "definitions.schema.json#/definitions/forkedNetworkRequest/properties/blockExplorerUrl")

### blockExplorerUrl Type

`string`

### blockExplorerUrl Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^(http(s)?://)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$
```

[try pattern](https://regexr.com/?expression=%5E\(http\(s\)%3F%3A%2F%2F\)%5B%5Cw.-%5D%2B\(%3F%3A%5C.%5B%5Cw%5C.-%5D%2B\)%2B%5B%5Cw%5C-%5C._~%3A%2F%3F%23%5B%5C%5D%40!%5C%24%26'%5C\(%5C\)%5C*%5C%2B%2C%3B%3D.%5D%2B%24 "try regular expression with regexr.com")
