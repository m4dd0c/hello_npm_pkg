import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm', 'cjs'],
  dts: true, // generate d.ts files
  sourcemap: true, // generate sourcemap
  clean: true, // clean dist before build
  // external, so they won't be bundled, since `react` and `react-dom` should already be available in consumers package.
  external: ['react', 'react-dom'] // mark peer deps as external
  // splitting: false, 
})
