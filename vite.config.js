import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',  // Se seu repositório tiver um nome, coloque como '/nome-do-repositorio/'
  build: {
    outDir: 'dist',  // Diretório de saída para o build
    rollupOptions: {
      input: resolve(__dirname, 'src', 'index.html'),  // Garante que o Vite usa o index.html na pasta 'src'
    }
  },
  server: {
    port: 8080  // Ajuste a porta para o seu ambiente de desenvolvimento, se necessário
  }
});
