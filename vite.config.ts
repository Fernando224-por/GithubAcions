/// <reference types="vitest" />
/// <reference types="Vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/gh-pages-ga/',
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true
  }
})
