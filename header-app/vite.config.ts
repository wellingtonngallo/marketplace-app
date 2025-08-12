import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import flowbiteReact from "flowbite-react/plugin/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    flowbiteReact(),
    federation({
      name: "header",
      filename: "remoteEntry.js",
      remotes: {
        'marketplace-host': 'http://localhost:5000/assets/remoteEntry.js',
      },
      exposes: {
        "./Header": "./src/components/Header/Header.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5001,
    strictPort: true,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  preview: {
    port: 5001,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    modulePreload: false,
    rollupOptions: {
      external: ['marketplace-host/context'],
    },
    sourcemap: true,
  },
  optimizeDeps: {
    exclude: ['marketplace-host/context'],
  }
});
