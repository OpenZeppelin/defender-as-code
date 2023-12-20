## tenant-network-configuration Type

`object` ([TenantNetworkConfiguration](definitions-definitions-tenantnetworkconfiguration.md))

# tenant-network-configuration Properties

| Property                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                               |
| :-------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [symbol](#symbol)                 | `string` | Required | cannot be null | [Definitions](definitions-definitions-tenantnetworkconfiguration-properties-symbol.md "definitions.schema.json#/definitions/tenant-network-configuration/properties/symbol")             |
| [eips](#eips)                     | `object` | Optional | cannot be null | [Definitions](definitions-definitions-tenantnetworkeipconfiguration.md "definitions.schema.json#/definitions/tenant-network-configuration/properties/eips")                              |
| [safe-contracts](#safe-contracts) | `object` | Optional | cannot be null | [Definitions](definitions-definitions-safecontracts.md "definitions.schema.json#/definitions/tenant-network-configuration/properties/safe-contracts")                                    |
| [subgraph-url](#subgraph-url)     | `string` | Optional | cannot be null | [Definitions](definitions-definitions-tenantnetworkconfiguration-properties-subgraph-url.md "definitions.schema.json#/definitions/tenant-network-configuration/properties/subgraph-url") |

## symbol



`symbol`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-tenantnetworkconfiguration-properties-symbol.md "definitions.schema.json#/definitions/tenant-network-configuration/properties/symbol")

### symbol Type

`string`

### symbol Constraints

**maximum length**: the maximum number of characters for this string is: `6`

**minimum length**: the minimum number of characters for this string is: `3`

## eips



`eips`

*   is optional

*   Type: `object` ([TenantNetworkEIPConfiguration](definitions-definitions-tenantnetworkeipconfiguration.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-tenantnetworkeipconfiguration.md "definitions.schema.json#/definitions/tenant-network-configuration/properties/eips")

### eips Type

`object` ([TenantNetworkEIPConfiguration](definitions-definitions-tenantnetworkeipconfiguration.md))

## safe-contracts



`safe-contracts`

*   is optional

*   Type: `object` ([SafeContracts](definitions-definitions-safecontracts.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-safecontracts.md "definitions.schema.json#/definitions/tenant-network-configuration/properties/safe-contracts")

### safe-contracts Type

`object` ([SafeContracts](definitions-definitions-safecontracts.md))

## subgraph-url



`subgraph-url`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-tenantnetworkconfiguration-properties-subgraph-url.md "definitions.schema.json#/definitions/tenant-network-configuration/properties/subgraph-url")

### subgraph-url Type

`string`

### subgraph-url Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^(http(s)?://)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$
```

[try pattern](https://regexr.com/?expression=%5E\(http\(s\)%3F%3A%2F%2F\)%5B%5Cw.-%5D%2B\(%3F%3A%5C.%5B%5Cw%5C.-%5D%2B\)%2B%5B%5Cw%5C-%5C._~%3A%2F%3F%23%5B%5C%5D%40!%5C%24%26'%5C\(%5C\)%5C*%5C%2B%2C%3B%3D.%5D%2B%24 "try regular expression with regexr.com")
