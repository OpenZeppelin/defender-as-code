## safe-contracts Type

`object` ([SafeContracts](definitions-definitions-safecontracts.md))

# safe-contracts Properties

| Property                                      | Type     | Required | Nullable       | Defined by                                                                                                                              |
| :-------------------------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| [master](#master)                             | `string` | Required | cannot be null | [Definitions](definitions-definitions-address.md "definitions.schema.json#/definitions/safe-contracts/properties/master")               |
| [proxy-factory](#proxy-factory)               | `string` | Required | cannot be null | [Definitions](definitions-definitions-address.md "definitions.schema.json#/definitions/safe-contracts/properties/proxy-factory")        |
| [multi-send-call-only](#multi-send-call-only) | `string` | Required | cannot be null | [Definitions](definitions-definitions-address.md "definitions.schema.json#/definitions/safe-contracts/properties/multi-send-call-only") |
| [create-call](#create-call)                   | `string` | Optional | cannot be null | [Definitions](definitions-definitions-address.md "definitions.schema.json#/definitions/safe-contracts/properties/create-call")          |

## master



`master`

*   is required

*   Type: `string` ([Address](definitions-definitions-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-address.md "definitions.schema.json#/definitions/safe-contracts/properties/master")

### master Type

`string` ([Address](definitions-definitions-address.md))

### master Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^0x[a-fA-F0-9]{40}$
```

[try pattern](https://regexr.com/?expression=%5E0x%5Ba-fA-F0-9%5D%7B40%7D%24 "try regular expression with regexr.com")

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## proxy-factory



`proxy-factory`

*   is required

*   Type: `string` ([Address](definitions-definitions-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-address.md "definitions.schema.json#/definitions/safe-contracts/properties/proxy-factory")

### proxy-factory Type

`string` ([Address](definitions-definitions-address.md))

### proxy-factory Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^0x[a-fA-F0-9]{40}$
```

[try pattern](https://regexr.com/?expression=%5E0x%5Ba-fA-F0-9%5D%7B40%7D%24 "try regular expression with regexr.com")

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## multi-send-call-only



`multi-send-call-only`

*   is required

*   Type: `string` ([Address](definitions-definitions-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-address.md "definitions.schema.json#/definitions/safe-contracts/properties/multi-send-call-only")

### multi-send-call-only Type

`string` ([Address](definitions-definitions-address.md))

### multi-send-call-only Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^0x[a-fA-F0-9]{40}$
```

[try pattern](https://regexr.com/?expression=%5E0x%5Ba-fA-F0-9%5D%7B40%7D%24 "try regular expression with regexr.com")

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## create-call



`create-call`

*   is optional

*   Type: `string` ([Address](definitions-definitions-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-address.md "definitions.schema.json#/definitions/safe-contracts/properties/create-call")

### create-call Type

`string` ([Address](definitions-definitions-address.md))

### create-call Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^0x[a-fA-F0-9]{40}$
```

[try pattern](https://regexr.com/?expression=%5E0x%5Ba-fA-F0-9%5D%7B40%7D%24 "try regular expression with regexr.com")

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")
