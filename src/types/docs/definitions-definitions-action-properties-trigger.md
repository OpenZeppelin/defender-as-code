## trigger Type

`object` ([Trigger](definitions-definitions-action-properties-trigger.md))

# trigger Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                                                            |
| :---------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [type](#type)           | `string`  | Required | cannot be null | [Definitions](definitions-definitions-action-properties-trigger-properties-triggertype.md "definitions.schema.json#/definitions/action/properties/trigger/properties/type")           |
| [cron](#cron)           | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-action-properties-trigger-properties-triggercron.md "definitions.schema.json#/definitions/action/properties/trigger/properties/cron")           |
| [frequency](#frequency) | `integer` | Optional | cannot be null | [Definitions](definitions-definitions-action-properties-trigger-properties-triggerfrequency.md "definitions.schema.json#/definitions/action/properties/trigger/properties/frequency") |

## type



`type`

*   is required

*   Type: `string` ([TriggerType](definitions-definitions-action-properties-trigger-properties-triggertype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action-properties-trigger-properties-triggertype.md "definitions.schema.json#/definitions/action/properties/trigger/properties/type")

### type Type

`string` ([TriggerType](definitions-definitions-action-properties-trigger-properties-triggertype.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"schedule"`       |             |
| `"webhook"`        |             |
| `"sentinel"`       |             |
| `"monitor-filter"` |             |

## cron



`cron`

*   is optional

*   Type: `string` ([TriggerCron](definitions-definitions-action-properties-trigger-properties-triggercron.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action-properties-trigger-properties-triggercron.md "definitions.schema.json#/definitions/action/properties/trigger/properties/cron")

### cron Type

`string` ([TriggerCron](definitions-definitions-action-properties-trigger-properties-triggercron.md))

## frequency



`frequency`

*   is optional

*   Type: `integer` ([TriggerFrequency](definitions-definitions-action-properties-trigger-properties-triggerfrequency.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action-properties-trigger-properties-triggerfrequency.md "definitions.schema.json#/definitions/action/properties/trigger/properties/frequency")

### frequency Type

`integer` ([TriggerFrequency](definitions-definitions-action-properties-trigger-properties-triggerfrequency.md))
