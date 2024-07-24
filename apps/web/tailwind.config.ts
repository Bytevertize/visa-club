// tailwind config is required for editor support

import type { Config } from 'tailwindcss'
import sharedConfig from '@repo/tailwind-config'

const config: Pick<Config, 'content' | 'presets' | 'theme'> = {
    theme: {
        extend: {
            screens: {
                '4k': '2800px',
            },
        },
    },
    content: ['./src/app/**/*.tsx', './src/components/**/*.{ts,tsx}'],
    presets: [sharedConfig],
}

export default config
