## notify-config Type

`object` ([NotifyConfig](definitions-definitions-blockmonitor-properties-notifyconfig.md))

# notify-config Properties

| Property                            | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                         |
| :---------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [timeout](#timeout)                 | `integer` | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig-properties-timeout.md "definitions.schema.json#/definitions/block-monitor/properties/notify-config/properties/timeout")                 |
| [message](#message)                 | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig-properties-message.md "definitions.schema.json#/definitions/block-monitor/properties/notify-config/properties/message")                 |
| [message-subject](#message-subject) | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig-properties-message-subject.md "definitions.schema.json#/definitions/block-monitor/properties/notify-config/properties/message-subject") |
| [category](#category)               | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig-properties-categoryordefenderid.md "definitions.schema.json#/definitions/block-monitor/properties/notify-config/properties/category")   |
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

## category



`category`

*   is optional

*   Type: merged type ([CategoryOrDefenderID](definitions-definitions-blockmonitor-properties-notifyconfig-properties-categoryordefenderid.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig-properties-categoryordefenderid.md "definitions.schema.json#/definitions/block-monitor/properties/notify-config/properties/category")

### category Type

merged type ([CategoryOrDefenderID](definitions-definitions-blockmonitor-properties-notifyconfig-properties-categoryordefenderid.md))

any of

*   [Category](definitions-definitions-category.md "check type definition")

*   [DefenderID](definitions-definitions-defenderid.md "check type definition")

### category Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## channels



`channels`

*   is required

*   Type: an array of merged types ([NotificationOrDefenderID](definitions-definitions-blockmonitor-properties-notifyconfig-properties-channels-notificationordefenderid.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig-properties-channels.md "definitions.schema.json#/definitions/block-monitor/properties/notify-config/properties/channels")

### channels Type

an array of merged types ([NotificationOrDefenderID](definitions-definitions-blockmonitor-properties-notifyconfig-properties-channels-notificationordefenderid.md))
