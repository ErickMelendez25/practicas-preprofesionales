import { defineConfig } from 'vite';

export default defineConfig({
  base: '/practicas-preprofesionales/',  // Ruta de la subcarpeta en GitHub Pages
  build: {
    outDir: 'dist',  // Directorio de salida para los archivos construidos
  },
});
