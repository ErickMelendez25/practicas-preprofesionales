import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/practicas-preprofesionales/',  // Asegúrate de que el base esté bien configurado para la subcarpeta en GitHub Pages
  plugins: [react()],
});
