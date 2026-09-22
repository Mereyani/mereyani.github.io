import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mereyani.github.io',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', ar: 'ar', tr: 'tr' } },
    }),
  ],
});
