import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  // Relative asset URLs work on GitHub Pages, Vercel, and local preview
  base: './',
  build: {
    rollupOptions: {
      // Vite only emits index.html by default; list every HTML page for production
      input: {
        index: resolve(__dirname, 'index.html'),
        menu: resolve(__dirname, 'menu.html'),
        booktable: resolve(__dirname, 'booktable.html'),
        contactus: resolve(__dirname, 'contactus.html'),
      },
    },
  },
});
