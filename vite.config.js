import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/DevHub-BS/',  // Substitua pelo nome do seu repositório

  build: {
    outDir: 'dist',  // Pasta de saída
    rollupOptions: {
      input: resolve(__dirname, 'src', 'index.html'),  // Garante que o Vite use o index.html da pasta 'src'
    }
  },
  server: {
    port: 8080  // Ajuste a porta para o seu ambiente de desenvolvimento, se necessário
  }
});
