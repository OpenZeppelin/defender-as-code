## 1 Type

`string` ([DefenderID](definitions-definitions-defenderid.md))

## 1 Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-(8|9|a|b)[0-9a-fA-F]{3}-[0-9a-fA-F]{12}$
```

[try pattern](https://regexr.com/?expression=%5E%5B0-9a-fA-F%5D%7B8%7D-%5B0-9a-fA-F%5D%7B4%7D-4%5B0-9a-fA-F%5D%7B3%7D-\(8%7C9%7Ca%7Cb\)%5B0-9a-fA-F%5D%7B3%7D-%5B0-9a-fA-F%5D%7B12%7D%24 "try regular expression with regexr.com")

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")
