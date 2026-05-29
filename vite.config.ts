import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/ds881-curriculo-GRR20241278/",
  plugins: [react(), tailwindcss()],
});
