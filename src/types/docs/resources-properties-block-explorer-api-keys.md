## block-explorer-api-keys Type

`object` ([Block Explorer Api Keys](resources-properties-block-explorer-api-keys.md))

# block-explorer-api-keys Properties

| Property              | Type   | Required | Nullable       | Defined by                                                                                                                                               |
| :-------------------- | :----- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | Merged | Optional | cannot be null | [Resources](definitions-definitions-blockexplorerapikeyordefenderid.md "resources.schema.json#/properties/block-explorer-api-keys/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: merged type ([BlockExplorerApiKeyOrDefenderID](definitions-definitions-blockexplorerapikeyordefenderid.md))

*   cannot be null

*   defined in: [Resources](definitions-definitions-blockexplorerapikeyordefenderid.md "resources.schema.json#/properties/block-explorer-api-keys/additionalProperties")

### additionalProperties Type

merged type ([BlockExplorerApiKeyOrDefenderID](definitions-definitions-blockexplorerapikeyordefenderid.md))

any of

*   [BlockExplorerApiKey](definitions-definitions-blockexplorerapikey.md "check type definition")

*   [DefenderID](definitions-definitions-defenderid.md "check type definition")

### additionalProperties Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")
