## contracts Type

`object` ([Contracts](resources-properties-contracts.md))

# contracts Properties

| Property              | Type   | Required | Nullable       | Defined by                                                                                                                      |
| :-------------------- | :----- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| Additional Properties | Merged | Optional | cannot be null | [Resources](definitions-definitions-contractordefenderid.md "resources.schema.json#/properties/contracts/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: merged type ([ContractOrDefenderID](definitions-definitions-contractordefenderid.md))

*   cannot be null

*   defined in: [Resources](definitions-definitions-contractordefenderid.md "resources.schema.json#/properties/contracts/additionalProperties")

### additionalProperties Type

merged type ([ContractOrDefenderID](definitions-definitions-contractordefenderid.md))

any of

*   [Contract](definitions-definitions-contract.md "check type definition")

*   [DefenderID](definitions-definitions-defenderid.md "check type definition")

### additionalProperties Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")
