import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        // Easter egg lol
        // Birthdate: 09/07/2005
        port: 9705,
    },
    base: '/andrewcwhy.me/',
})
