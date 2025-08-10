import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    tailwind(),
    federation({
      remotes: {
        header: `http://localhost:5001/assets/remoteEntry.js`,
        cards: `http://localhost:5003/assets/remoteEntry.js`,
      },
      shared: ['react', 'react-dom', 'flowbite-react', 'flowbite'],
    }),
  ],
  server: {
    port: 5000,
    fs: {
      allow: [
        '..',
      ],
    },
  },
})