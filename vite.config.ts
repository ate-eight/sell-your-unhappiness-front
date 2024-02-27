/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, './src') },
            { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
            { find: '@components', replacement: path.resolve(__dirname, './src/components') },
            { find: '@common', replacement: path.resolve(__dirname, './src/components/common') },
        ],
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://3.39.74.150:8080',
                // changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
});
