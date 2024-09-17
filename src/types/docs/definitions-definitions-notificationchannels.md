## notification-channels Type

`object` ([NotificationChannels](definitions-definitions-notificationchannels.md))

## notification-channels Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# notification-channels Properties

| Property                              | Type    | Required | Nullable       | Defined by                                                                                                                                                                         |
| :------------------------------------ | :------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [events](#events)                     | `array` | Required | cannot be null | [Definitions](definitions-definitions-notificationchannels-properties-events.md "definitions.schema.json#/definitions/notification-channels/properties/events")                    |
| [notification-ids](#notification-ids) | `array` | Required | cannot be null | [Definitions](definitions-definitions-notificationchannels-properties-notificationids.md "definitions.schema.json#/definitions/notification-channels/properties/notification-ids") |

## events



`events`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notificationchannels-properties-events.md "definitions.schema.json#/definitions/notification-channels/properties/events")

### events Type

`string[]`

## notification-ids



`notification-ids`

*   is required

*   Type: `string[]` ([DefenderID](definitions-definitions-defenderid.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notificationchannels-properties-notificationids.md "definitions.schema.json#/definitions/notification-channels/properties/notification-ids")

### notification-ids Type

`string[]` ([DefenderID](definitions-definitions-defenderid.md))
