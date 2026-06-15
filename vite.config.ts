import viteReact from "@vitejs/plugin-react";
import tailwindCss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import { nitro } from "nitro/vite"

export default defineConfig({
  plugins: [tanstackStart(), nitro(), tailwindCss(), viteReact()],
  resolve: {
    tsconfigPaths: true,
  },
});
