import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages base URL settings
  // IMPORTANT: This must match your repository name exactly, surrounded by slashes.
  // Repository: https://github.com/mmattic/Lanlonge-App
  // URL: https://mmattic.github.io/Lanlonge-App/
  base: '/Lanlonge-App/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  }
})