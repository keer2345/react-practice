# [How to structure your next React App - A boilerplate using Tailwind, MobX, TypeScript, and Vite](https://www.youtube.com/watch?v=9VWH1txqvgI)

```sh
yarn add tailwindcss postcss autoprefixer -D
```

## tailwindcss

`tailwindconfig.js`:

```sh
npx tailwindcss init
```

```js
module.exports = {
  content: ['./src/**/*.{ts,tsx}', 'index.html'],
  theme: {
    extend: {}
  },
  plugins: []
}
```

`postcss.config.cjs`:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
```

`src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## Router

```sh
yarn add react-router react-router-dom
```
## Mobx
```sh
yarn add mobx mobx-react-lite
```