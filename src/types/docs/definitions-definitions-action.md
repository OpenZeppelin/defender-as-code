## action Type

`object` ([Action](definitions-definitions-action.md))

# action Properties

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                           |
| :------------------ | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)       | `string`  | Required | cannot be null | [Definitions](definitions-definitions-action-properties-name.md "definitions.schema.json#/definitions/action/properties/name")       |
| [path](#path)       | `string`  | Required | cannot be null | [Definitions](definitions-definitions-action-properties-path.md "definitions.schema.json#/definitions/action/properties/path")       |
| [relayer](#relayer) | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-relayerordefenderid.md "definitions.schema.json#/definitions/action/properties/relayer")       |
| [trigger](#trigger) | `object`  | Required | cannot be null | [Definitions](definitions-definitions-action-properties-trigger.md "definitions.schema.json#/definitions/action/properties/trigger") |
| [paused](#paused)   | `boolean` | Required | cannot be null | [Definitions](definitions-definitions-action-properties-paused.md "definitions.schema.json#/definitions/action/properties/paused")   |

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action-properties-name.md "definitions.schema.json#/definitions/action/properties/name")

### name Type

`string`

## path



`path`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action-properties-path.md "definitions.schema.json#/definitions/action/properties/path")

### path Type

`string`

## relayer



`relayer`

*   is optional

*   Type: merged type ([RelayerOrDefenderID](definitions-definitions-relayerordefenderid.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayerordefenderid.md "definitions.schema.json#/definitions/action/properties/relayer")

### relayer Type

merged type ([RelayerOrDefenderID](definitions-definitions-relayerordefenderid.md))

any of

*   [Relayer](definitions-definitions-relayer.md "check type definition")

*   [DefenderID](definitions-definitions-defenderid.md "check type definition")

### relayer Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## trigger



`trigger`

*   is required

*   Type: `object` ([Trigger](definitions-definitions-action-properties-trigger.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action-properties-trigger.md "definitions.schema.json#/definitions/action/properties/trigger")

### trigger Type

`object` ([Trigger](definitions-definitions-action-properties-trigger.md))

## paused



`paused`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action-properties-paused.md "definitions.schema.json#/definitions/action/properties/paused")

### paused Type

`boolean`
