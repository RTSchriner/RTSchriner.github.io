import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  root: '.', // project root
  build: {
    outDir: 'dist', // output folder
    rollupOptions: {
      input: '/index.html'
    }
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({}) // add options if needed
      ],
    }
  }
});