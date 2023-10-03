## actions Type

`object` ([Actions](resources-properties-actions.md))

# actions Properties

| Property              | Type   | Required | Nullable       | Defined by                                                                                                                  |
| :-------------------- | :----- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | Merged | Optional | cannot be null | [Resources](definitions-definitions-actionordefenderid.md "resources.schema.json#/properties/actions/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: merged type ([ActionOrDefenderID](definitions-definitions-actionordefenderid.md))

*   cannot be null

*   defined in: [Resources](definitions-definitions-actionordefenderid.md "resources.schema.json#/properties/actions/additionalProperties")

### additionalProperties Type

merged type ([ActionOrDefenderID](definitions-definitions-actionordefenderid.md))

any of

*   [Action](definitions-definitions-action.md "check type definition")

*   [DefenderID](definitions-definitions-defenderid.md "check type definition")

### additionalProperties Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")
