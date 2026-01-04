// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Noto Sans Japanese',
        cssVariable: '--font-noto-sans-jp',
      },
      {
        provider: fontProviders.google(),
        name: 'Montserrat Alternates',
        cssVariable: '--font-montserrat-alternates',
      },
    ],
  },
});
