import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
 plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: ["src", "src/assets/icons"],
        additionalData: `@use "./styles/abstracts" as *;`,
      },
    },
  },
});
