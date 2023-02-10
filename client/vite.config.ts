import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path-browserify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      path: "path-browserify",
    },
  },
});
