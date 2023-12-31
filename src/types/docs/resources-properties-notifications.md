## notifications Type

`object` ([Notifications](resources-properties-notifications.md))

# notifications Properties

| Property              | Type   | Required | Nullable       | Defined by                                                                                                                              |
| :-------------------- | :----- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | Merged | Optional | cannot be null | [Resources](definitions-definitions-notificationordefenderid.md "resources.schema.json#/properties/notifications/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: merged type ([NotificationOrDefenderID](definitions-definitions-notificationordefenderid.md))

*   cannot be null

*   defined in: [Resources](definitions-definitions-notificationordefenderid.md "resources.schema.json#/properties/notifications/additionalProperties")

### additionalProperties Type

merged type ([NotificationOrDefenderID](definitions-definitions-notificationordefenderid.md))

any of

*   [Notification](definitions-definitions-notification.md "check type definition")

*   [DefenderID](definitions-definitions-defenderid.md "check type definition")

### additionalProperties Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")
