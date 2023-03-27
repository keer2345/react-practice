# Configuration
## Alias
Add dependency
```sh
yarn add @types/node --dev
```

`vite.config.ts`:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      // 配置路径别名@
      '@': path.resolve(__dirname, 'src')
    }
  }
})
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  // ...
}

```

## Eslint
```sh
npx eslint --init
```
## Prettier
```sh
yarn add prettier -D
```