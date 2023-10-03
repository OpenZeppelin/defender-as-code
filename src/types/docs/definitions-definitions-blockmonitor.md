## 0 Type

`object` ([BlockMonitor](definitions-definitions-blockmonitor.md))

## 0 Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# 0 Properties

| Property                                    | Type      | Required | Nullable       | Defined by                                                                                                                                                                |
| :------------------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [name](#name)                               | `string`  | Required | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-name.md "definitions.schema.json#/definitions/block-monitor/properties/name")                               |
| [type](#type)                               | `string`  | Required | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-type.md "definitions.schema.json#/definitions/block-monitor/properties/type")                               |
| [network](#network)                         | Merged    | Required | cannot be null | [Definitions](definitions-definitions-network.md "definitions.schema.json#/definitions/block-monitor/properties/network")                                                 |
| [addresses](#addresses)                     | `array`   | Required | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-addresses.md "definitions.schema.json#/definitions/block-monitor/properties/addresses")                     |
| [abi](#abi)                                 | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-abitype.md "definitions.schema.json#/definitions/block-monitor/properties/abi")                                                     |
| [alert-threshold](#alert-threshold)         | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-alertthreshold.md "definitions.schema.json#/definitions/block-monitor/properties/alert-threshold")          |
| [paused](#paused)                           | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-paused.md "definitions.schema.json#/definitions/block-monitor/properties/paused")                           |
| [skip-abi-validation](#skip-abi-validation) | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-skip-abi-validation.md "definitions.schema.json#/definitions/block-monitor/properties/skip-abi-validation") |
| [action-condition](#action-condition)       | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-actionordefenderid.md "definitions.schema.json#/definitions/block-monitor/properties/action-condition")                             |
| [action-trigger](#action-trigger)           | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-actionordefenderid.md "definitions.schema.json#/definitions/block-monitor/properties/action-trigger")                               |
| [confirm-level](#confirm-level)             | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-confirm-level.md "definitions.schema.json#/definitions/block-monitor/properties/confirm-level")             |
| [notify-config](#notify-config)             | `object`  | Required | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig.md "definitions.schema.json#/definitions/block-monitor/properties/notify-config")              |
| [conditions](#conditions)                   | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-blockmonitor-properties-conditions.md "definitions.schema.json#/definitions/block-monitor/properties/conditions")                   |
| [risk-category](#risk-category)             | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-riskcategory.md "definitions.schema.json#/definitions/block-monitor/properties/risk-category")                                      |

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-name.md "definitions.schema.json#/definitions/block-monitor/properties/name")

### name Type

`string`

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-type.md "definitions.schema.json#/definitions/block-monitor/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"BLOCK"` |             |

## network



`network`

*   is required

*   Type: merged type ([Network](definitions-definitions-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-network.md "definitions.schema.json#/definitions/block-monitor/properties/network")

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

*   is required

*   Type: `string[]` ([Address](definitions-definitions-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-addresses.md "definitions.schema.json#/definitions/block-monitor/properties/addresses")

### addresses Type

`string[]` ([Address](definitions-definitions-address.md))

## abi



`abi`

*   is optional

*   Type: merged type ([AbiType](definitions-definitions-abitype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-abitype.md "definitions.schema.json#/definitions/block-monitor/properties/abi")

### abi Type

merged type ([AbiType](definitions-definitions-abitype.md))

any of

*   [StringABI](definitions-definitions-abitype-anyof-stringabi.md "check type definition")

*   [ArrayABI](definitions-definitions-abitype-anyof-arrayabi.md "check type definition")

## alert-threshold



`alert-threshold`

*   is optional

*   Type: `object` ([AlertThreshold](definitions-definitions-blockmonitor-properties-alertthreshold.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-alertthreshold.md "definitions.schema.json#/definitions/block-monitor/properties/alert-threshold")

### alert-threshold Type

`object` ([AlertThreshold](definitions-definitions-blockmonitor-properties-alertthreshold.md))

## paused



`paused`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-paused.md "definitions.schema.json#/definitions/block-monitor/properties/paused")

### paused Type

`boolean`

## skip-abi-validation

A boolean value that indicates whether the UI should skip ABI validation checks. Enable this if you wish to use custom or partial ABIs for your monitors.

`skip-abi-validation`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-skip-abi-validation.md "definitions.schema.json#/definitions/block-monitor/properties/skip-abi-validation")

### skip-abi-validation Type

`boolean`

## action-condition



`action-condition`

*   is optional

*   Type: merged type ([ActionOrDefenderID](definitions-definitions-actionordefenderid.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-actionordefenderid.md "definitions.schema.json#/definitions/block-monitor/properties/action-condition")

### action-condition Type

merged type ([ActionOrDefenderID](definitions-definitions-actionordefenderid.md))

any of

*   [Action](definitions-definitions-action.md "check type definition")

*   [DefenderID](definitions-definitions-defenderid.md "check type definition")

### action-condition Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## action-trigger



`action-trigger`

*   is optional

*   Type: merged type ([ActionOrDefenderID](definitions-definitions-actionordefenderid.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-actionordefenderid.md "definitions.schema.json#/definitions/block-monitor/properties/action-trigger")

### action-trigger Type

merged type ([ActionOrDefenderID](definitions-definitions-actionordefenderid.md))

any of

*   [Action](definitions-definitions-action.md "check type definition")

*   [DefenderID](definitions-definitions-defenderid.md "check type definition")

### action-trigger Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## confirm-level



`confirm-level`

*   is optional

*   Type: merged type ([Details](definitions-definitions-blockmonitor-properties-confirm-level.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-confirm-level.md "definitions.schema.json#/definitions/block-monitor/properties/confirm-level")

### confirm-level Type

merged type ([Details](definitions-definitions-blockmonitor-properties-confirm-level.md))

one (and only one) of

*   [Untitled string in Definitions](definitions-definitions-blockmonitor-properties-confirm-level-oneof-0.md "check type definition")

*   [Untitled integer in Definitions](definitions-definitions-blockmonitor-properties-confirm-level-oneof-1.md "check type definition")

## notify-config



`notify-config`

*   is required

*   Type: `object` ([NotifyConfig](definitions-definitions-blockmonitor-properties-notifyconfig.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-notifyconfig.md "definitions.schema.json#/definitions/block-monitor/properties/notify-config")

### notify-config Type

`object` ([NotifyConfig](definitions-definitions-blockmonitor-properties-notifyconfig.md))

## conditions



`conditions`

*   is optional

*   Type: `object` ([Conditions](definitions-definitions-blockmonitor-properties-conditions.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockmonitor-properties-conditions.md "definitions.schema.json#/definitions/block-monitor/properties/conditions")

### conditions Type

`object` ([Conditions](definitions-definitions-blockmonitor-properties-conditions.md))

## risk-category



`risk-category`

*   is optional

*   Type: `string` ([RiskCategory](definitions-definitions-riskcategory.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-riskcategory.md "definitions.schema.json#/definitions/block-monitor/properties/risk-category")

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
