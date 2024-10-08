## opsgenieUser Type

`object` ([OpsgenieUser](definitions-definitions-opsgenieuser.md))

# opsgenieUser Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                         |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| [username](#username) | `string` | Required | cannot be null | [Definitions](definitions-definitions-opsgenieuser-properties-username.md "definitions.schema.json#/definitions/opsgenieUser/properties/username") |
| [fullName](#fullname) | `string` | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieuser-properties-fullname.md "definitions.schema.json#/definitions/opsgenieUser/properties/fullName") |
| [id](#id)             | `string` | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieuser-properties-id.md "definitions.schema.json#/definitions/opsgenieUser/properties/id")             |
| [type](#type)         | `string` | Required | cannot be null | [Definitions](definitions-definitions-opsgenieusertype.md "definitions.schema.json#/definitions/opsgenieUser/properties/type")                     |

## username



`username`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieuser-properties-username.md "definitions.schema.json#/definitions/opsgenieUser/properties/username")

### username Type

`string`

## fullName



`fullName`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieuser-properties-fullname.md "definitions.schema.json#/definitions/opsgenieUser/properties/fullName")

### fullName Type

`string`

## id



`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieuser-properties-id.md "definitions.schema.json#/definitions/opsgenieUser/properties/id")

### id Type

`string`

## type



`type`

*   is required

*   Type: `string` ([OpsgenieUserType](definitions-definitions-opsgenieusertype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieusertype.md "definitions.schema.json#/definitions/opsgenieUser/properties/type")

### type Type

`string` ([OpsgenieUserType](definitions-definitions-opsgenieusertype.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"team"`       |             |
| `"user"`       |             |
| `"escalation"` |             |
| `"schedule"`   |             |
