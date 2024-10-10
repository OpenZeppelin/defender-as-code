## relayer-groups Type

`object` ([RelayerGroups](resources-properties-relayergroups.md))

# relayer-groups Properties

| Property              | Type   | Required | Nullable       | Defined by                                                                                                                               |
| :-------------------- | :----- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | Merged | Optional | cannot be null | [Resources](definitions-definitions-relayergroupordefenderid.md "resources.schema.json#/properties/relayer-groups/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: merged type ([RelayerGroupOrDefenderID](definitions-definitions-relayergroupordefenderid.md))

*   cannot be null

*   defined in: [Resources](definitions-definitions-relayergroupordefenderid.md "resources.schema.json#/properties/relayer-groups/additionalProperties")

### additionalProperties Type

merged type ([RelayerGroupOrDefenderID](definitions-definitions-relayergroupordefenderid.md))

any of

*   [RelayerGroup](definitions-definitions-relayergroup.md "check type definition")

*   [DefenderID](definitions-definitions-defenderid.md "check type definition")

### additionalProperties Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")
