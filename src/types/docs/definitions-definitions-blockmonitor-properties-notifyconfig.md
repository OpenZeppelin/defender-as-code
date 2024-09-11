## notify-config Type

`object` ([NotifyConfig](definitions-definitions-blockmonitor-properties-notifyconfig.md))

# notify-config Properties

| Property                            | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                         |
| :---------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [timeout](#timeout)                 | `integer` | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig-properties-timeout.md "definitions.schema.json#/definitions/block-monitor/properties/notify-config/properties/timeout")                 |
| [message](#message)                 | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig-properties-message.md "definitions.schema.json#/definitions/block-monitor/properties/notify-config/properties/message")                 |
| [message-subject](#message-subject) | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig-properties-message-subject.md "definitions.schema.json#/definitions/block-monitor/properties/notify-config/properties/message-subject") |
| [severity-level](#severity-level)   | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig-properties-severity-level.md "definitions.schema.json#/definitions/block-monitor/properties/notify-config/properties/severity-level")   |
| [channels](#channels)               | `array`   | Required | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig-properties-channels.md "definitions.schema.json#/definitions/block-monitor/properties/notify-config/properties/channels")               |

## timeout



`timeout`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig-properties-timeout.md "definitions.schema.json#/definitions/block-monitor/properties/notify-config/properties/timeout")

### timeout Type

`integer`

## message



`message`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig-properties-message.md "definitions.schema.json#/definitions/block-monitor/properties/notify-config/properties/message")

### message Type

`string`

## message-subject



`message-subject`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig-properties-message-subject.md "definitions.schema.json#/definitions/block-monitor/properties/notify-config/properties/message-subject")

### message-subject Type

`string`

## severity-level



`severity-level`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig-properties-severity-level.md "definitions.schema.json#/definitions/block-monitor/properties/notify-config/properties/severity-level")

### severity-level Type

`string`

### severity-level Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"LOW"`    |             |
| `"MEDIUM"` |             |
| `"HIGH"`   |             |

## channels



`channels`

*   is required

*   Type: an array of merged types ([NotificationOrDefenderID](definitions-definitions-blockmonitor-properties-notifyconfig-properties-channels-notificationordefenderid.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig-properties-channels.md "definitions.schema.json#/definitions/block-monitor/properties/notify-config/properties/channels")

### channels Type

an array of merged types ([NotificationOrDefenderID](definitions-definitions-blockmonitor-properties-notifyconfig-properties-channels-notificationordefenderid.md))
