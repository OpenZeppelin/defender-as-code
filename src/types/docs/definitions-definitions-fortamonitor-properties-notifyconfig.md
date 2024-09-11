## notify-config Type

`object` ([NotifyConfig](definitions-definitions-fortamonitor-properties-notifyconfig.md))

# notify-config Properties

| Property                            | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                         |
| :---------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [timeout](#timeout)                 | `integer` | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-notifyconfig-properties-timeout.md "definitions.schema.json#/definitions/forta-monitor/properties/notify-config/properties/timeout")                 |
| [message](#message)                 | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-notifyconfig-properties-message.md "definitions.schema.json#/definitions/forta-monitor/properties/notify-config/properties/message")                 |
| [message-subject](#message-subject) | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-notifyconfig-properties-message-subject.md "definitions.schema.json#/definitions/forta-monitor/properties/notify-config/properties/message-subject") |
| [severityLevel](#severitylevel)     | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-notifyconfig-properties-severitylevel.md "definitions.schema.json#/definitions/forta-monitor/properties/notify-config/properties/severityLevel")     |
| [channels](#channels)               | `array`   | Required | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-notifyconfig-properties-channels.md "definitions.schema.json#/definitions/forta-monitor/properties/notify-config/properties/channels")               |

## timeout



`timeout`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-notifyconfig-properties-timeout.md "definitions.schema.json#/definitions/forta-monitor/properties/notify-config/properties/timeout")

### timeout Type

`integer`

## message



`message`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-notifyconfig-properties-message.md "definitions.schema.json#/definitions/forta-monitor/properties/notify-config/properties/message")

### message Type

`string`

## message-subject



`message-subject`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-notifyconfig-properties-message-subject.md "definitions.schema.json#/definitions/forta-monitor/properties/notify-config/properties/message-subject")

### message-subject Type

`string`

## severityLevel



`severityLevel`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-notifyconfig-properties-severitylevel.md "definitions.schema.json#/definitions/forta-monitor/properties/notify-config/properties/severityLevel")

### severityLevel Type

`string`

### severityLevel Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"LOW"`    |             |
| `"MEDIUM"` |             |
| `"HIGH"`   |             |

## channels



`channels`

*   is required

*   Type: an array of merged types ([NotificationOrDefenderID](definitions-definitions-fortamonitor-properties-notifyconfig-properties-channels-notificationordefenderid.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-notifyconfig-properties-channels.md "definitions.schema.json#/definitions/forta-monitor/properties/notify-config/properties/channels")

### channels Type

an array of merged types ([NotificationOrDefenderID](definitions-definitions-fortamonitor-properties-notifyconfig-properties-channels-notificationordefenderid.md))
