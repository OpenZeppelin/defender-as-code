## additionalProperties Type

`object` ([Action](definitions-definitions-action.md))

## additionalProperties Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# additionalProperties Properties

| Property            | Type      | Required | Nullable       | Defined by                                                                                                             |
| :------------------ | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------- |
| [name](#name)       | `string`  | Required | cannot be null | [Definitions](definitions-definitions-action-properties-name.md "#/definitions/action/properties/name")       |
| [path](#path)       | `string`  | Required | cannot be null | [Definitions](definitions-definitions-action-properties-path.md "#/definitions/action/properties/path")       |
| [relayer](#relayer) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-relayer.md "#/definitions/action/properties/relayer")                   |
| [trigger](#trigger) | `object`  | Required | cannot be null | [Definitions](definitions-definitions-action-properties-trigger.md "#/definitions/action/properties/trigger") |
| [paused](#paused)   | `boolean` | Required | cannot be null | [Definitions](definitions-definitions-action-properties-paused.md "#/definitions/action/properties/paused")   |

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action-properties-name.md "#/definitions/action/properties/name")

### name Type

`string`

## path



`path`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action-properties-path.md "#/definitions/action/properties/path")

### path Type

`string`

## relayer



`relayer`

*   is optional

*   Type: `object` ([Relayer](definitions-definitions-relayer.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer.md "#/definitions/action/properties/relayer")

### relayer Type

`object` ([Relayer](definitions-definitions-relayer.md))

### relayer Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## trigger



`trigger`

*   is required

*   Type: `object` ([Trigger](definitions-definitions-action-properties-trigger.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action-properties-trigger.md "#/definitions/action/properties/trigger")

### trigger Type

`object` ([Trigger](definitions-definitions-action-properties-trigger.md))

## paused



`paused`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action-properties-paused.md "#/definitions/action/properties/paused")

### paused Type

`boolean`
