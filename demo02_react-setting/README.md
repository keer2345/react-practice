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

## eslint-config-airbnb-typescript
```sh
yarn add eslint-config-airbnb-typescript -D
```

`.eslintrc.cjs`:
```diff
 extends: [
     'airbnb',
+    'airbnb-typescript',
     'airbnb/hooks',
     'plugin:react/recommended',
     'plugin:@typescript-eslint/recommended'
],
overrides: [],
parser: '@typescript-eslint/parser',
parserOptions: {
     ecmaVersion: 'latest',
-    sourceType: 'module'
+    sourceType: 'module',
+    project: './tsconfig.json'
},
plugins: ['react', '@typescript-eslint'],
-  rules: {}
+  rules: {
+    'react/react-in-jsx-scope': 0
+  }
```

`tsconfig.json`
```diff
-  "include": ["src"],
+  "include": [".eslintrc.cjs", "src"],
```