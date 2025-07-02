import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/VENTE-FLASH/',  // nom du repo GitHub
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    hmr: {
      overlay: false,  // désactive l'overlay d'erreurs
    },
  },
});
