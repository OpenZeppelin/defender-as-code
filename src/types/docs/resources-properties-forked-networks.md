## forked-networks Type

`object` ([Forked Networks](resources-properties-forked-networks.md))

# forked-networks Properties

| Property              | Type   | Required | Nullable       | Defined by                                                                                                                                 |
| :-------------------- | :----- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | Merged | Optional | cannot be null | [Resources](definitions-definitions-forkednetworkordefenderid.md "resources.schema.json#/properties/forked-networks/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: merged type ([ForkedNetworkOrDefenderID](definitions-definitions-forkednetworkordefenderid.md))

*   cannot be null

*   defined in: [Resources](definitions-definitions-forkednetworkordefenderid.md "resources.schema.json#/properties/forked-networks/additionalProperties")

### additionalProperties Type

merged type ([ForkedNetworkOrDefenderID](definitions-definitions-forkednetworkordefenderid.md))

any of

*   [ForkedNetworkRequest](definitions-definitions-forkednetworkrequest.md "check type definition")

*   [DefenderID](definitions-definitions-defenderid.md "check type definition")

### additionalProperties Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")
