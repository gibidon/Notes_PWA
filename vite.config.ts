import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

const vitePWA = VitePWA({
  registerType: 'autoUpdate',
  outDir: 'dist',
  manifest: {
    name: 'NotesPWA',
    short_name: 'NotesPWA',
    description: 'simple notes app with pwa',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'assets/images/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'assets/images/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'assets/images/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'assets/images/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  },
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePWA],
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
