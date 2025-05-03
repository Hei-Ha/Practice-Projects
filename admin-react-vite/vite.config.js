/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    outDir: "dist",
    mode: "development",
    plugins: [
        react(),
        tailwindcss()
    ],

    server: {
        port: 5173,
    },
})