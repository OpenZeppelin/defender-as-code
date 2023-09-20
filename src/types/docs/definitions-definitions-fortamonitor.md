## 1 Type

`object` ([FortaMonitor](definitions-definitions-fortamonitor.md))

## 1 Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# 1 Properties

| Property                                                | Type      | Required | Nullable       | Defined by                                                                                                                                                                            |
| :------------------------------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [name](#name)                                           | `string`  | Required | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-name.md "definitions.schema.json#/definitions/forta-monitor/properties/name")                                           |
| [type](#type)                                           | `string`  | Required | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-type.md "definitions.schema.json#/definitions/forta-monitor/properties/type")                                           |
| [network](#network)                                     | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-network.md "definitions.schema.json#/definitions/forta-monitor/properties/network")                                                             |
| [addresses](#addresses)                                 | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-addresses.md "definitions.schema.json#/definitions/forta-monitor/properties/addresses")                                 |
| [abi](#abi)                                             | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-abitype.md "definitions.schema.json#/definitions/forta-monitor/properties/abi")                                                                 |
| [alert-threshold](#alert-threshold)                     | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-alertthreshold.md "definitions.schema.json#/definitions/forta-monitor/properties/alert-threshold")                      |
| [paused](#paused)                                       | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-paused.md "definitions.schema.json#/definitions/forta-monitor/properties/paused")                                       |
| [action-condition](#action-condition)                   | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-action.md "definitions.schema.json#/definitions/forta-monitor/properties/action-condition")                                                     |
| [action-trigger](#action-trigger)                       | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-action.md "definitions.schema.json#/definitions/forta-monitor/properties/action-trigger")                                                       |
| [notify-config](#notify-config)                         | `object`  | Required | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-notifyconfig.md "definitions.schema.json#/definitions/forta-monitor/properties/notify-config")                          |
| [conditions](#conditions)                               | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-conditions.md "definitions.schema.json#/definitions/forta-monitor/properties/conditions")                               |
| [forta-node-id](#forta-node-id)                         | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-forta-node-id.md "definitions.schema.json#/definitions/forta-monitor/properties/forta-node-id")                         |
| [forta-last-processed-time](#forta-last-processed-time) | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-forta-last-processed-time.md "definitions.schema.json#/definitions/forta-monitor/properties/forta-last-processed-time") |
| [agent-ids](#agent-ids)                                 | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-fortamonitor-properties-agentids.md "definitions.schema.json#/definitions/forta-monitor/properties/agent-ids")                                  |
| [risk-category](#risk-category)                         | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-riskcategory.md "definitions.schema.json#/definitions/forta-monitor/properties/risk-category")                                                  |

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-name.md "definitions.schema.json#/definitions/forta-monitor/properties/name")

### name Type

`string`

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-type.md "definitions.schema.json#/definitions/forta-monitor/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"FORTA"` |             |

## network



`network`

*   is optional

*   Type: merged type ([Network](definitions-definitions-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-network.md "definitions.schema.json#/definitions/forta-monitor/properties/network")

### network Type

merged type ([Network](definitions-definitions-network.md))

any of

*   one (and only one) of

    *   [PublicNetwork](definitions-definitions-publicnetwork.md "check type definition")

    *   [CustomNetwork](definitions-definitions-customnetwork.md "check type definition")

*   [ForkedNetwork](definitions-definitions-forkednetwork.md "check type definition")

### network Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## addresses



`addresses`

*   is optional

*   Type: `string[]` ([Address](definitions-definitions-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-addresses.md "definitions.schema.json#/definitions/forta-monitor/properties/addresses")

### addresses Type

`string[]` ([Address](definitions-definitions-address.md))

## abi



`abi`

*   is optional

*   Type: merged type ([AbiType](definitions-definitions-abitype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-abitype.md "definitions.schema.json#/definitions/forta-monitor/properties/abi")

### abi Type

merged type ([AbiType](definitions-definitions-abitype.md))

any of

*   [StringABI](definitions-definitions-abitype-anyof-stringabi.md "check type definition")

*   [ArrayABI](definitions-definitions-abitype-anyof-arrayabi.md "check type definition")

## alert-threshold



`alert-threshold`

*   is optional

*   Type: `object` ([AlertThreshold](definitions-definitions-fortamonitor-properties-alertthreshold.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-alertthreshold.md "definitions.schema.json#/definitions/forta-monitor/properties/alert-threshold")

### alert-threshold Type

`object` ([AlertThreshold](definitions-definitions-fortamonitor-properties-alertthreshold.md))

## paused



`paused`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-paused.md "definitions.schema.json#/definitions/forta-monitor/properties/paused")

### paused Type

`boolean`

## action-condition



`action-condition`

*   is optional

*   Type: `object` ([Action](definitions-definitions-action.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action.md "definitions.schema.json#/definitions/forta-monitor/properties/action-condition")

### action-condition Type

`object` ([Action](definitions-definitions-action.md))

### action-condition Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## action-trigger



`action-trigger`

*   is optional

*   Type: `object` ([Action](definitions-definitions-action.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-action.md "definitions.schema.json#/definitions/forta-monitor/properties/action-trigger")

### action-trigger Type

`object` ([Action](definitions-definitions-action.md))

### action-trigger Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## notify-config



`notify-config`

*   is required

*   Type: `object` ([NotifyConfig](definitions-definitions-fortamonitor-properties-notifyconfig.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-notifyconfig.md "definitions.schema.json#/definitions/forta-monitor/properties/notify-config")

### notify-config Type

`object` ([NotifyConfig](definitions-definitions-fortamonitor-properties-notifyconfig.md))

## conditions



`conditions`

*   is optional

*   Type: `object` ([Conditions](definitions-definitions-fortamonitor-properties-conditions.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-conditions.md "definitions.schema.json#/definitions/forta-monitor/properties/conditions")

### conditions Type

`object` ([Conditions](definitions-definitions-fortamonitor-properties-conditions.md))

## forta-node-id



`forta-node-id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-forta-node-id.md "definitions.schema.json#/definitions/forta-monitor/properties/forta-node-id")

### forta-node-id Type

`string`

## forta-last-processed-time



`forta-last-processed-time`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-forta-last-processed-time.md "definitions.schema.json#/definitions/forta-monitor/properties/forta-last-processed-time")

### forta-last-processed-time Type

`string`

## agent-ids



`agent-ids`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortamonitor-properties-agentids.md "definitions.schema.json#/definitions/forta-monitor/properties/agent-ids")

### agent-ids Type

`string[]`

## risk-category



`risk-category`

*   is optional

*   Type: `string` ([RiskCategory](definitions-definitions-riskcategory.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-riskcategory.md "definitions.schema.json#/definitions/forta-monitor/properties/risk-category")

### risk-category Type

`string` ([RiskCategory](definitions-definitions-riskcategory.md))

### risk-category Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"NONE"`           |             |
| `"GOVERNANCE"`     |             |
| `"ACCESS-CONTROL"` |             |
| `"SUSPICIOUS"`     |             |
| `"FINANCIAL"`      |             |
| `"TECHNICAL"`      |             |
