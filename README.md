# typescript-react-shared-components

AUTH_TOKEN Must be Write access to be able to publish.

If it is possible to have another way of setting up env vars avoid using export and uset and only execute line 2 and 3.

```
export AUTH_TOKEN={PUT THE TOKEN HERE WITHOUT CURLY BRACES}
npm config set '//npm.pkg.github.com/:_authToken' "${AUTH_TOKEN}"
npm publish
unset AUTH_TOKEN
```
