import type { Config } from 'tailwindcss'
import daisyUI from 'daisyui'
import Typography from '@tailwindcss/typography'

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
    daisyui: {
        themes: [
            {
                visa: {
                    primary: '#001A70',
                    secondary: '#FFD76F',
                    accent: '#6b5900',
                    neutral: '#241e1c',
                    'base-100': '#0D4671',
                    info: '#00cbff',
                    success: '#1B9A1B',
                    warning: '#ffcf00',
                    error: '#ff5072',
                },
            },
        ],
    },

    plugins: [Typography, daisyUI],
}
export default config
