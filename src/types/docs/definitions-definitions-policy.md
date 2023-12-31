## 0 Type

`object` ([Policy](definitions-definitions-policy.md))

## 0 Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# 0 Properties

| Property                                      | Type      | Required | Nullable       | Defined by                                                                                                                                                     |
| :-------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [gas-price-cap](#gas-price-cap)               | `integer` | Optional | cannot be null | [Definitions](definitions-definitions-policy-properties-gas-price-cap.md "definitions.schema.json#/definitions/policy/properties/gas-price-cap")               |
| [whitelist-receivers](#whitelist-receivers)   | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-policy-properties-whitelistreceivers.md "definitions.schema.json#/definitions/policy/properties/whitelist-receivers")    |
| [eip1559-pricing](#eip1559-pricing)           | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-policy-properties-eip1559-pricing.md "definitions.schema.json#/definitions/policy/properties/eip1559-pricing")           |
| [private-transactions](#private-transactions) | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-policy-properties-private-transactions.md "definitions.schema.json#/definitions/policy/properties/private-transactions") |

## gas-price-cap



`gas-price-cap`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy-properties-gas-price-cap.md "definitions.schema.json#/definitions/policy/properties/gas-price-cap")

### gas-price-cap Type

`integer`

## whitelist-receivers



`whitelist-receivers`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy-properties-whitelistreceivers.md "definitions.schema.json#/definitions/policy/properties/whitelist-receivers")

### whitelist-receivers Type

`string[]`

## eip1559-pricing



`eip1559-pricing`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy-properties-eip1559-pricing.md "definitions.schema.json#/definitions/policy/properties/eip1559-pricing")

### eip1559-pricing Type

`boolean`

## private-transactions



`private-transactions`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy-properties-private-transactions.md "definitions.schema.json#/definitions/policy/properties/private-transactions")

### private-transactions Type

`boolean`
