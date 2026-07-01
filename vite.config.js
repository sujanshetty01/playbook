import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/playbook/',
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: true
  }
})
