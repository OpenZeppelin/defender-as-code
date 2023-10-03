## policies Type

`object` ([Policies](resources-properties-policies.md))

# policies Properties

| Property              | Type   | Required | Nullable       | Defined by                                                                                                                   |
| :-------------------- | :----- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | Merged | Optional | cannot be null | [Resources](definitions-definitions-policyordefenderid.md "resources.schema.json#/properties/policies/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: merged type ([PolicyOrDefenderID](definitions-definitions-policyordefenderid.md))

*   cannot be null

*   defined in: [Resources](definitions-definitions-policyordefenderid.md "resources.schema.json#/properties/policies/additionalProperties")

### additionalProperties Type

merged type ([PolicyOrDefenderID](definitions-definitions-policyordefenderid.md))

any of

*   [Policy](definitions-definitions-policy.md "check type definition")

*   [DefenderID](definitions-definitions-defenderid.md "check type definition")

### additionalProperties Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")
