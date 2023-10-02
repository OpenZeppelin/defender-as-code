## monitors Type

`object` ([Monitors](resources-properties-monitors.md))

# monitors Properties

| Property              | Type   | Required | Nullable       | Defined by                                                                                                                           |
| :-------------------- | :----- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | Merged | Optional | cannot be null | [Resources](resources-properties-monitors-additionalproperties.md "resources.schema.json#/properties/monitors/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: merged type ([Details](resources-properties-monitors-additionalproperties.md))

*   cannot be null

*   defined in: [Resources](resources-properties-monitors-additionalproperties.md "resources.schema.json#/properties/monitors/additionalProperties")

### additionalProperties Type

merged type ([Details](resources-properties-monitors-additionalproperties.md))

one (and only one) of

*   one (and only one) of

    *   [BlockMonitor](definitions-definitions-blockmonitor.md "check type definition")

    *   [FortaMonitor](definitions-definitions-fortamonitor.md "check type definition")

*   [DefenderID](definitions-definitions-defenderid.md "check type definition")
