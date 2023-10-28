## conditions Type

`object` ([Conditions](definitions-definitions-blockmonitor-properties-conditions.md))

# conditions Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                            |
| :-------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [event](#event)             | `array`  | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-conditions-properties-event.md "definitions.schema.json#/definitions/block-monitor/properties/conditions/properties/event")             |
| [function](#function)       | `array`  | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-conditions-properties-function.md "definitions.schema.json#/definitions/block-monitor/properties/conditions/properties/function")       |
| [transaction](#transaction) | `string` | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-conditions-properties-transaction.md "definitions.schema.json#/definitions/block-monitor/properties/conditions/properties/transaction") |

## event



`event`

*   is optional

*   Type: `object[]` ([EventItems](definitions-definitions-blockmonitor-properties-conditions-properties-event-eventitems.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-conditions-properties-event.md "definitions.schema.json#/definitions/block-monitor/properties/conditions/properties/event")

### event Type

`object[]` ([EventItems](definitions-definitions-blockmonitor-properties-conditions-properties-event-eventitems.md))

## function



`function`

*   is optional

*   Type: `object[]` ([FunctionItems](definitions-definitions-blockmonitor-properties-conditions-properties-function-functionitems.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-conditions-properties-function.md "definitions.schema.json#/definitions/block-monitor/properties/conditions/properties/function")

### function Type

`object[]` ([FunctionItems](definitions-definitions-blockmonitor-properties-conditions-properties-function-functionitems.md))

## transaction



`transaction`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-conditions-properties-transaction.md "definitions.schema.json#/definitions/block-monitor/properties/conditions/properties/transaction")

### transaction Type

`string`
