## 4 Type

unknown ([OpsgenieConfig](definitions-definitions-opsgenieconfig.md))

## 4 Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# 4 Properties

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                                                               |
| :------------------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [apiKey](#apikey)                     | `string` | Required | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-apikey.md "definitions.schema.json#/definitions/opsgenieConfig/properties/apiKey")                       |
| [instanceLocation](#instancelocation) | `string` | Required | cannot be null | [Definitions](definitions-definitions-opsgenieinstancelocation.md "definitions.schema.json#/definitions/opsgenieConfig/properties/instanceLocation")                     |
| [alias](#alias)                       | `string` | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-alias.md "definitions.schema.json#/definitions/opsgenieConfig/properties/alias")                         |
| [responders](#responders)             | `array`  | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieconfigresponders.md "definitions.schema.json#/definitions/opsgenieConfig/properties/responders") |
| [visibleTo](#visibleto)               | `array`  | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieconfigvisibleto.md "definitions.schema.json#/definitions/opsgenieConfig/properties/visibleTo")   |
| [actions](#actions)                   | `array`  | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieconfigactions.md "definitions.schema.json#/definitions/opsgenieConfig/properties/actions")       |
| [tags](#tags)                         | `array`  | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieconfigtags.md "definitions.schema.json#/definitions/opsgenieConfig/properties/tags")             |
| [details](#details)                   | `object` | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieconfigdetails.md "definitions.schema.json#/definitions/opsgenieConfig/properties/details")       |
| [entity](#entity)                     | `string` | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-entity.md "definitions.schema.json#/definitions/opsgenieConfig/properties/entity")                       |
| [priority](#priority)                 | `string` | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieprioritylevel.md "definitions.schema.json#/definitions/opsgenieConfig/properties/priority")                                |
| [note](#note)                         | `string` | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-note.md "definitions.schema.json#/definitions/opsgenieConfig/properties/note")                           |

## apiKey



`apiKey`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-apikey.md "definitions.schema.json#/definitions/opsgenieConfig/properties/apiKey")

### apiKey Type

`string`

## instanceLocation



`instanceLocation`

*   is required

*   Type: `string` ([OpsgenieInstanceLocation](definitions-definitions-opsgenieinstancelocation.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieinstancelocation.md "definitions.schema.json#/definitions/opsgenieConfig/properties/instanceLocation")

### instanceLocation Type

`string` ([OpsgenieInstanceLocation](definitions-definitions-opsgenieinstancelocation.md))

### instanceLocation Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation |
| :----- | :---------- |
| `"US"` |             |
| `"EU"` |             |

## alias



`alias`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-alias.md "definitions.schema.json#/definitions/opsgenieConfig/properties/alias")

### alias Type

`string`

### alias Constraints

**maximum length**: the maximum number of characters for this string is: `512`

## responders



`responders`

*   is optional

*   Type: `object[]` ([OpsgenieUser](definitions-definitions-opsgenieuser.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieconfigresponders.md "definitions.schema.json#/definitions/opsgenieConfig/properties/responders")

### responders Type

`object[]` ([OpsgenieUser](definitions-definitions-opsgenieuser.md))

## visibleTo



`visibleTo`

*   is optional

*   Type: `object[]` ([OpsgenieUser](definitions-definitions-opsgenieuser.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieconfigvisibleto.md "definitions.schema.json#/definitions/opsgenieConfig/properties/visibleTo")

### visibleTo Type

`object[]` ([OpsgenieUser](definitions-definitions-opsgenieuser.md))

## actions



`actions`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieconfigactions.md "definitions.schema.json#/definitions/opsgenieConfig/properties/actions")

### actions Type

`string[]`

### actions Constraints

**maximum number of items**: the maximum number of items for this array is: `10`

## tags



`tags`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieconfigtags.md "definitions.schema.json#/definitions/opsgenieConfig/properties/tags")

### tags Type

`string[]`

### tags Constraints

**maximum number of items**: the maximum number of items for this array is: `10`

## details



`details`

*   is optional

*   Type: `object` ([OpsgenieConfigDetails](definitions-definitions-opsgenieconfig-properties-opsgenieconfigdetails.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieconfigdetails.md "definitions.schema.json#/definitions/opsgenieConfig/properties/details")

### details Type

`object` ([OpsgenieConfigDetails](definitions-definitions-opsgenieconfig-properties-opsgenieconfigdetails.md))

## entity



`entity`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-entity.md "definitions.schema.json#/definitions/opsgenieConfig/properties/entity")

### entity Type

`string`

### entity Constraints

**maximum length**: the maximum number of characters for this string is: `512`

## priority



`priority`

*   is optional

*   Type: `string` ([OpsgeniePriorityLevel](definitions-definitions-opsgenieprioritylevel.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieprioritylevel.md "definitions.schema.json#/definitions/opsgenieConfig/properties/priority")

### priority Type

`string` ([OpsgeniePriorityLevel](definitions-definitions-opsgenieprioritylevel.md))

### priority Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation |
| :----- | :---------- |
| `"P1"` |             |
| `"P2"` |             |
| `"P3"` |             |
| `"P4"` |             |
| `"P5"` |             |

## note



`note`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-note.md "definitions.schema.json#/definitions/opsgenieConfig/properties/note")

### note Type

`string`

### note Constraints

**maximum length**: the maximum number of characters for this string is: `25000`
