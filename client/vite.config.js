import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis",
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
  resolve: {
    alias: {
      // Polyfill for Buffer
      buffer: "buffer",
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        // Inject Buffer globally for browser compatibility
        {
          name: "provide-buffer",
          transform(code, id) {
            if (id.includes("google-auth-library")) {
              return {
                code: code.replace(/buffer\.Buffer/g, "globalThis.Buffer"),
                map: null,
              };
            }
            return null;
          },
        },
      ],
    },
  },
  define: {
    global: {},
  },
});
