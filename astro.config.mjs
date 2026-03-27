import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://gdgtarija.com",
  base: "/",
  integrations: [tailwind()],
});
