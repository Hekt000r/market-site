import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   server: {
    port: 5172,
    proxy: {
      '/api': {
        target: 'http://localhost:5173', // Dont forget to update this when switching from dev to prod (5173 = prod, 5172 = dev)
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
  plugins: [react()],
})
