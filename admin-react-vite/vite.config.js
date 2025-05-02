/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    outDir: "dist",
    mode: "development",
    plugins: [react()],

    server: {
        port: 5173,
    },
})