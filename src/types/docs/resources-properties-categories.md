## categories Type

`object` ([Categories](resources-properties-categories.md))

# categories Properties

| Property              | Type   | Required | Nullable       | Defined by                                                                                                                       |
| :-------------------- | :----- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | Merged | Optional | cannot be null | [Resources](definitions-definitions-categoryordefenderid.md "resources.schema.json#/properties/categories/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: merged type ([CategoryOrDefenderID](definitions-definitions-categoryordefenderid.md))

*   cannot be null

*   defined in: [Resources](definitions-definitions-categoryordefenderid.md "resources.schema.json#/properties/categories/additionalProperties")

### additionalProperties Type

merged type ([CategoryOrDefenderID](definitions-definitions-categoryordefenderid.md))

any of

*   [Category](definitions-definitions-category.md "check type definition")

*   [DefenderID](definitions-definitions-defenderid.md "check type definition")

### additionalProperties Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")
