import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

const root = resolve(__dirname, "src");

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: resolve(root, "components"),
      utils: resolve(root, "utils"),
      network: resolve(root, "network"),
      store: resolve(root, "store"),
    },
  },
});
