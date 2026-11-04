import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://gdgtarija.com',
  base: '/',
  integrations: [],
  redirects: {
    '/devfest': 'https://eventos.gdgtarija.com/e/devfest',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
