import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        // ... Specify options here.
        globals: true,
        environment: 'jsdom',
        setupFiles: ['vitest.setup.ts'],
    },
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
            { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
        ],
    },
});
