import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import tailwindcss from 'tailwindcss'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { sync } from 'glob'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, './src/index.ts'),
            name: '@repo/ui',
            formats: ['es'],
        },
        rollupOptions: {
            external: [
                'react',
                'react/jsx-runtime',
                'react-dom',
                'tailwindcss',
            ],
            input: Object.fromEntries(
                sync('src/**/*.{ts,tsx}').map((file) => [
                    // The name of the entry point
                    // src/nested/foo.ts becomes nested/foo
                    relative(
                        'src',
                        file.slice(0, file.length - extname(file).length),
                    ),
                    // The absolute path to the entry file
                    // src/nested/foo.ts becomes /project/src/nested/foo.ts
                    fileURLToPath(new URL(file, import.meta.url)),
                ]),
            ),
            output: {
                assetFileNames: 'assets/[name][extname]',
                entryFileNames: '[name].js',
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
    plugins: [react(), libInjectCss(), dts({ include: ['src'] })],
    css: {
        postcss: {
            plugins: [tailwindcss],
        },
    },
})
