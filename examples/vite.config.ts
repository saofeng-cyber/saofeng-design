import { fileURLToPath } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@saofeng-design/sui': fileURLToPath(new URL('../packages/sui', import.meta.url)),
      '@saofeng-design/theme': fileURLToPath(new URL('../packages/theme', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0',
    open: true,
  },
});
