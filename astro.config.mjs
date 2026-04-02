import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://gdgtarija.com",
  base: "/",
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
});
