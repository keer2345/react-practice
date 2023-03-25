# Setting up vite, React, TypeScript, eslint, prettier, vitest, testing-library and react-router

- [Video](https://www.youtube.com/watch?v=cchqeWY0Nak)
- [Source Code](https://github.com/CodingGarden/react-ts-starter)

## Airbnb

Relpace `eslint` with `[airbnb](https://www.npmjs.com/package/eslint-config-airbnb)`.

Remove `'eslint:recommended'` in `.eslintrc.cjs`:

```diff
   extends: [
-    'eslint:recommended',
+    'airbnb',
+    'airbnb/hooks',
     'plugin:react/recommended',
     'plugin:@typescript-eslint/recommended'
   ],
```
