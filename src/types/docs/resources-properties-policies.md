## policies Type

`object` ([Policies](resources-properties-policies.md))

# policies Properties

| Property              | Type   | Required | Nullable       | Defined by                                                                                                                           |
| :-------------------- | :----- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | Merged | Optional | cannot be null | [Resources](resources-properties-policies-additionalproperties.md "resources.schema.json#/properties/policies/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: merged type ([Details](resources-properties-policies-additionalproperties.md))

*   cannot be null

*   defined in: [Resources](resources-properties-policies-additionalproperties.md "resources.schema.json#/properties/policies/additionalProperties")

### additionalProperties Type

merged type ([Details](resources-properties-policies-additionalproperties.md))

one (and only one) of

*   [Policy](definitions-definitions-policy.md "check type definition")

*   [DefenderID](definitions-definitions-defenderid.md "check type definition")
