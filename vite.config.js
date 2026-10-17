import { defineConfig } from 'vite';

// GitHub Pages serves the site under /<repo>/; BASE_PATH sets that prefix at build time.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
});
