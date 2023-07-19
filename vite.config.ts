import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'node:path'
export default defineConfig({
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, './src/shared'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@features': path.resolve(__dirname, './src/features')
    }
  },
  plugins: [react()],
})
