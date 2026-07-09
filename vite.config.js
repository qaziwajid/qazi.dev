import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build works when hosted at
// https://<username>.github.io/<repo-name>/ (a GitHub Pages "project site").
// If you ever host this at the root of a domain instead, change base to "/".
export default defineConfig({
  plugins: [react()],
  base: "./",
});
