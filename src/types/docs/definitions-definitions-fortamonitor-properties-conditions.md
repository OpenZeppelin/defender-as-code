## conditions Type

`object` ([Conditions](definitions-definitions-fortamonitor-properties-conditions.md))

# conditions Properties

| Property                                | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                        |
| :-------------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [min-scanner-count](#min-scanner-count) | `integer` | Required | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-conditions-properties-min-scanner-count.md "definitions.schema.json#/definitions/forta-monitor/properties/conditions/properties/min-scanner-count") |
| [severity](#severity)                   | `integer` | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-conditions-properties-severity.md "definitions.schema.json#/definitions/forta-monitor/properties/conditions/properties/severity")                   |
| [alert-ids](#alert-ids)                 | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-conditions-properties-alertids.md "definitions.schema.json#/definitions/forta-monitor/properties/conditions/properties/alert-ids")                  |

## min-scanner-count



`min-scanner-count`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-conditions-properties-min-scanner-count.md "definitions.schema.json#/definitions/forta-monitor/properties/conditions/properties/min-scanner-count")

### min-scanner-count Type

`integer`

## severity



`severity`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-conditions-properties-severity.md "definitions.schema.json#/definitions/forta-monitor/properties/conditions/properties/severity")

### severity Type

`integer`

### severity Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | :---------- |
| `0`   |             |
| `1`   |             |
| `2`   |             |
| `3`   |             |
| `4`   |             |
| `5`   |             |

## alert-ids



`alert-ids`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-conditions-properties-alertids.md "definitions.schema.json#/definitions/forta-monitor/properties/conditions/properties/alert-ids")

### alert-ids Type

`string[]`
