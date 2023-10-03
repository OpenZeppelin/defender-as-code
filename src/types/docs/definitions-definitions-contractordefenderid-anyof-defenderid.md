## 1 Type

`string` ([DefenderID](definitions-definitions-contractordefenderid-anyof-defenderid.md))

## 1 Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[a-zA-Z0-9]+[-]{1}0x[a-fA-F0-9]{40}$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9%5D%2B%5B-%5D%7B1%7D0x%5Ba-fA-F0-9%5D%7B40%7D%24 "try regular expression with regexr.com")
