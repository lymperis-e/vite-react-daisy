import { defineConfig, splitVendorChunkPlugin } from "vite";
import { resolve } from "path";

import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react";

const root = resolve(__dirname, "src");
const public_dir = resolve(__dirname, "public");
const basePath = process.env.NODE_ENV === "production" ? "/" : "/";
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  base: basePath,
  publicDir: public_dir,
  plugins: [react(), splitVendorChunkPlugin(), basicSsl()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir,
    emptyOutDir: true,
    manifest: true,
  },
});
