import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  // Ensure correct asset paths when hosted at /amritaraj-nair-portfolio/
  base: "/amritaraj-nair-portfolio/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), wasm(), topLevelAwait()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ["@dimforge/rapier3d-compat"],
    // Pre-bundle the whole 3D stack. If any of it is discovered lazily instead,
    // Vite re-optimizes mid-load and the page ends up with two copies of React.
    include: [
      "three",
      "react",
      "react-dom",
      "react/jsx-runtime",
      "@react-three/fiber",
      "@react-three/drei",
      "@react-three/rapier",
      "@react-three/postprocessing",
      "postprocessing",
    ],
  },
}));
