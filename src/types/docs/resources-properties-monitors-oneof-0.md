## 0 Type

unknown

# 0 Properties

| Property              | Type   | Required | Nullable       | Defined by                                                                                                                |
| :-------------------- | :----- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------ |
| Additional Properties | Merged | Optional | cannot be null | [Resources](definitions-definitions-monitor.md "resources.schema.json#/properties/monitors/oneOf/0/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: `object` ([Monitor](definitions-definitions-monitor.md))

*   cannot be null

*   defined in: [Resources](definitions-definitions-monitor.md "resources.schema.json#/properties/monitors/oneOf/0/additionalProperties")

### additionalProperties Type

`object` ([Monitor](definitions-definitions-monitor.md))

one (and only one) of

*   [BlockMonitor](definitions-definitions-blockmonitor.md "check type definition")

*   [FortaMonitor](definitions-definitions-fortamonitor.md "check type definition")

### additionalProperties Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")
