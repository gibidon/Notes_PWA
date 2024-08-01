import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      contexts: '/src/contexts',
      hooks: '/src/hooks',
      layouts: '/src/layouts',
      types: '/src/types',
      pages: '/src/pages',
      utils: '/src/utils',
      constants: '/src/constants',
    },
  },
})
