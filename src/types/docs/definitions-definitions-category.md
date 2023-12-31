## 0 Type

`object` ([Category](definitions-definitions-category.md))

## 0 Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# 0 Properties

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                                                        |
| :------------------------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                         | `string` | Required | cannot be null | [Definitions](definitions-definitions-category-properties-name.md "definitions.schema.json#/definitions/category/properties/name")                                |
| [description](#description)           | `string` | Optional | cannot be null | [Definitions](definitions-definitions-category-properties-description.md "definitions.schema.json#/definitions/category/properties/description")                  |
| [notification-ids](#notification-ids) | `array`  | Optional | cannot be null | [Definitions](definitions-definitions-category-properties-categorynotificationids.md "definitions.schema.json#/definitions/category/properties/notification-ids") |

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-category-properties-name.md "definitions.schema.json#/definitions/category/properties/name")

### name Type

`string`

## description



`description`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-category-properties-description.md "definitions.schema.json#/definitions/category/properties/description")

### description Type

`string`

## notification-ids



`notification-ids`

*   is optional

*   Type: an array of merged types ([NotificationOrDefenderID](definitions-definitions-category-properties-categorynotificationids-notificationordefenderid.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-category-properties-categorynotificationids.md "definitions.schema.json#/definitions/category/properties/notification-ids")

### notification-ids Type

an array of merged types ([NotificationOrDefenderID](definitions-definitions-category-properties-categorynotificationids-notificationordefenderid.md))
