import viteReact from "@vitejs/plugin-react";
import tailwindCss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tanstackStart(),
    tailwindCss(),
    viteReact(),
  ],
  resolve : {
    tsconfigPaths: true,
  }
});
