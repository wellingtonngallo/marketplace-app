import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    tailwind(),
    federation({
      name: 'marketplace-host',
      filename: 'remoteEntry.js',
      remotes: {
        'marketplace-host': 'http://localhost:5000/assets/remoteEntry.js',
        header: 'http://localhost:5001/assets/remoteEntry.js',
        cards:  'http://localhost:5003/assets/remoteEntry.js',
      },
      exposes: {
        './context': './src/context/remote.ts',
      },
      shared: ['react','react-dom'],
    })
  ],
  server: {
    port: 5000,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  preview: {
    port: 5000,
    strictPort: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  build: {
    sourcemap: true,
  },
})