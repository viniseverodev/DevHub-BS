import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',  // A raiz do projeto é a pasta onde está o index.html
  server: {
    port: 8080
  },
  base: '/',  // Certifica que o caminho base será a raiz do servidor
});
