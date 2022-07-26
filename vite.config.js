import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
