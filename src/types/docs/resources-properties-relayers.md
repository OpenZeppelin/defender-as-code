## relayers Type

`object` ([Relayers](resources-properties-relayers.md))

# relayers Properties

| Property              | Type   | Required | Nullable       | Defined by                                                                                                                    |
| :-------------------- | :----- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | Merged | Optional | cannot be null | [Resources](definitions-definitions-relayerordefenderid.md "resources.schema.json#/properties/relayers/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: merged type ([RelayerOrDefenderID](definitions-definitions-relayerordefenderid.md))

*   cannot be null

*   defined in: [Resources](definitions-definitions-relayerordefenderid.md "resources.schema.json#/properties/relayers/additionalProperties")

### additionalProperties Type

merged type ([RelayerOrDefenderID](definitions-definitions-relayerordefenderid.md))

any of

*   [Relayer](definitions-definitions-relayer.md "check type definition")

*   [DefenderID](definitions-definitions-defenderid.md "check type definition")

### additionalProperties Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")
