# hello_npm_pkg

> 🧪 Demo React component library built with TypeScript, [tsup](https://tsup.egoist.dev/), and ESLint. Supports ESM/CJS output and ready for local or npm use.

## ✨ Features

- ⚡️ React + TypeScript
- 🚀 Fast builds with [tsup](https://tsup.egoist.dev)
- 🧩 Linting with ESLint and TypeScript
- 🧪 Ready for local development and testing (`npm link`)
- 🌐 Zero-config compatibility with Vite, Next.js, Create React App, etc.

## 📦 Installation

After publishing:

```bash
npm install hello_npm_pkg
# or
yarn add hello_npm_pkg
```

For local development using `npm link`:

```bash
cd hello_npm_pkg
npm run build
npm link
# In your consumer app:
npm link hello_npm_pkg
```

## 🚀 Usage

```tsx
import HelloWorld from "hello_npm_pkg";

function App() {
  return;
}
```

## 🛠️ Development & Testing

1. **Clone and install:**
   ```bash
   git clone https://github.com/m4dd0c/hello_npm_pkg.git
   cd hello_npm_pkg
   npm install
   ```
2. **Build the package:**
   ```bash
   npm run build          # Builds JS (ESM + CJS) and type declarations
   ```
3. **Lint code:**

   ```bash
   npm run lint
   ```

4. **Link locally:**

   ```bash
   npm link
   # In your consuming app:
   npm link hello_npm_pkg
   ```

5. **Testing:**
   (Add tests with Jest or Vitest if desired and run via `npm run test`.)

## 📐 Exported Files

- **ESM module:** `dist/index.mjs`
- **CommonJS module:** `dist/index.js`
- **TypeScript types:** `dist/index.d.ts`

## 📁 Project Structure

```
hello_npm_pkg/
├── src/
│   └── index.tsx         # Main React component (HelloWorld)
├── dist/                 # Output files
├── tsup.config.ts        # tsup build config
├── tsconfig.json         # TypeScript config
└── package.json
```

## 🔧 Build Commands

| Command       | Description                |
| ------------- | -------------------------- |
| npm run build | Build JS (ESM+CJS) & types |
| npm run lint  | Run ESLint                 |
| npm link      | Symlink for local dev/test |

## 📝 Publishing

After building:

```bash
npm publish
```

Update `"version"` and push git tags as needed.

## 💡 Tips for Consumers

- Install `react` and `react-dom` in your consumer project—these are peer dependencies.

## 📄 License

[ISC](./LICENSE)

## 💬 Feedback

See [GitHub issues](https://github.com/m4dd0c/hello_npm_pkg/issues) for bug reports, suggestions, or questions.

## Credits

Boilerplate/guide based on:

- [tsup docs](https://tsup.egoist.dev/)
- [Publishing React component libraries with ESM/CJS support](https://dev.to/this-is-learning/how-to-make-your-own-react-component-library-and-publish-on-npm-27c/)
