import { defineConfig } from "vite";

export default defineConfig({
  root: "app/javascript",
  base: "/_site",
  build: {
    outDir: "../../app/builds",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        application: "app/javascript/application.js",
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
