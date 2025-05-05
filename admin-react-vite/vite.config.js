/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
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


    resolve: {
        alias: {
            "@src": path.resolve(__dirname, "./src"),
        },
    },
})