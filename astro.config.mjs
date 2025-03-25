import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({
    // Configure Tailwind Options
    config: { path: './tailwind.config.js' }
  })],
  site: 'https://davidumiri.github.io',
  base: '/portfolio-dauc',
});