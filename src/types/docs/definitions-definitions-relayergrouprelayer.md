## items Type

`object` ([RelayerGroupRelayer](definitions-definitions-relayergrouprelayer.md))

## items Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# items Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                       |
| :------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [relayer-id](#relayer-id) | `string` | Optional | cannot be null | [Definitions](definitions-definitions-defenderid.md "definitions.schema.json#/definitions/relayer-group-relayer/properties/relayer-id")                          |
| [address](#address)       | `string` | Required | cannot be null | [Definitions](definitions-definitions-address.md "definitions.schema.json#/definitions/relayer-group-relayer/properties/address")                                |
| [key-id](#key-id)         | `string` | Optional | cannot be null | [Definitions](definitions-definitions-relayergrouprelayer-properties-key-id.md "definitions.schema.json#/definitions/relayer-group-relayer/properties/key-id")   |
| [balance](#balance)       | `string` | Optional | cannot be null | [Definitions](definitions-definitions-relayergrouprelayer-properties-balance.md "definitions.schema.json#/definitions/relayer-group-relayer/properties/balance") |

## relayer-id



`relayer-id`

*   is optional

*   Type: `string` ([DefenderID](definitions-definitions-defenderid.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-defenderid.md "definitions.schema.json#/definitions/relayer-group-relayer/properties/relayer-id")

### relayer-id Type

`string` ([DefenderID](definitions-definitions-defenderid.md))

### relayer-id Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-(8|9|a|b)[0-9a-fA-F]{3}-[0-9a-fA-F]{12}$
```

[try pattern](https://regexr.com/?expression=%5E%5B0-9a-fA-F%5D%7B8%7D-%5B0-9a-fA-F%5D%7B4%7D-4%5B0-9a-fA-F%5D%7B3%7D-\(8%7C9%7Ca%7Cb\)%5B0-9a-fA-F%5D%7B3%7D-%5B0-9a-fA-F%5D%7B12%7D%24 "try regular expression with regexr.com")

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## address



`address`

*   is required

*   Type: `string` ([Address](definitions-definitions-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-address.md "definitions.schema.json#/definitions/relayer-group-relayer/properties/address")

### address Type

`string` ([Address](definitions-definitions-address.md))

### address Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^0x[a-fA-F0-9]{40}$
```

[try pattern](https://regexr.com/?expression=%5E0x%5Ba-fA-F0-9%5D%7B40%7D%24 "try regular expression with regexr.com")

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## key-id



`key-id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayergrouprelayer-properties-key-id.md "definitions.schema.json#/definitions/relayer-group-relayer/properties/key-id")

### key-id Type

`string`

## balance



`balance`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayergrouprelayer-properties-balance.md "definitions.schema.json#/definitions/relayer-group-relayer/properties/balance")

### balance Type

`string`
