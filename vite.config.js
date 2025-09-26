import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: import.meta.env.MODE === 'production' ? '/portfolio/' : '/',  // Dynamic base: '/' in dev, '/portfolio/' in prod
  resolve: {
    alias: {
        "@": path.resolve(__dirname, "./src")
    }
  }
})
