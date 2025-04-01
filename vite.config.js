import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  base: '/DevHub-BS/', // Nome do repositório
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
});
