
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './Marrt/', // Use './' for relative paths or '/repo-name/' for GitHub Pages
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
