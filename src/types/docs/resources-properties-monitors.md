## monitors Type

`object` ([Monitors](resources-properties-monitors.md))

# monitors Properties

| Property              | Type   | Required | Nullable       | Defined by                                                                                            |
| :-------------------- | :----- | :------- | :------------- | :---------------------------------------------------------------------------------------------------- |
| Additional Properties | Merged | Optional | cannot be null | [Resources](definitions-definitions-monitor.md "#/properties/monitors/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: `object` ([Monitor](definitions-definitions-monitor.md))

*   cannot be null

*   defined in: [Resources](definitions-definitions-monitor.md "#/properties/monitors/additionalProperties")

### additionalProperties Type

`object` ([Monitor](definitions-definitions-monitor.md))

one (and only one) of

*   [BlockMonitor](definitions-definitions-blockmonitor.md "check type definition")

*   any of

    *   [Untitled  type in Definitions](definitions-definitions-fortamonitor-anyof-0.md "check type definition")

    *   [Untitled  type in Definitions](definitions-definitions-fortamonitor-anyof-1.md "check type definition")

### additionalProperties Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")
