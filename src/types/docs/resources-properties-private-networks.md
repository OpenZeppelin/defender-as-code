## private-networks Type

`object` ([Private Networks](resources-properties-private-networks.md))

# private-networks Properties

| Property              | Type   | Required | Nullable       | Defined by                                                                                                                                   |
| :-------------------- | :----- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | Merged | Optional | cannot be null | [Resources](definitions-definitions-privatenetworkordefenderid.md "resources.schema.json#/properties/private-networks/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: merged type ([PrivateNetworkOrDefenderID](definitions-definitions-privatenetworkordefenderid.md))

*   cannot be null

*   defined in: [Resources](definitions-definitions-privatenetworkordefenderid.md "resources.schema.json#/properties/private-networks/additionalProperties")

### additionalProperties Type

merged type ([PrivateNetworkOrDefenderID](definitions-definitions-privatenetworkordefenderid.md))

any of

*   [PrivateNetworkRequest](definitions-definitions-privatenetworkrequest.md "check type definition")

*   [DefenderID](definitions-definitions-defenderid.md "check type definition")

### additionalProperties Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")
