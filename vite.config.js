import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isGitHubPages = process.env.BUILD_TARGET === "gh-pages";

// https://vite.dev/config/
export default defineConfig({
  base: isGitHubPages ? "/Sunshine_University/" : "./",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
