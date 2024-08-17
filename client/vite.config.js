import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import nodePolyfills from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // To include Buffer polyfill
      protocolImports: true,
    }),
  ],
  resolve: {
    alias: {
      // Add polyfills for Buffer and other Node.js globals
      buffer: "rollup-plugin-node-polyfills/polyfills/buffer-es6",
    },
  },
});
