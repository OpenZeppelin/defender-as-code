## monitors Type

`object` ([Monitors](resources-properties-monitors.md))

# monitors Properties

| Property              | Type   | Required | Nullable       | Defined by                                                                                                                    |
| :-------------------- | :----- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | Merged | Optional | cannot be null | [Resources](definitions-definitions-monitorordefenderid.md "resources.schema.json#/properties/monitors/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: merged type ([MonitorOrDefenderID](definitions-definitions-monitorordefenderid.md))

*   cannot be null

*   defined in: [Resources](definitions-definitions-monitorordefenderid.md "resources.schema.json#/properties/monitors/additionalProperties")

### additionalProperties Type

merged type ([MonitorOrDefenderID](definitions-definitions-monitorordefenderid.md))

any of

*   one (and only one) of

    *   [BlockMonitor](definitions-definitions-blockmonitor.md "check type definition")

*   [DefenderID](definitions-definitions-defenderid.md "check type definition")

### additionalProperties Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")
