import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/SemneleCorpului/', // numele repo-ului, pentru GitHub Pages
  plugins: [react()],
  build: { chunkSizeWarningLimit: 1200, target: 'es2019' }, // compatibil și cu telefoane mai vechi
})
