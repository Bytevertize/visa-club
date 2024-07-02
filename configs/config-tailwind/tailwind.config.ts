import type { Config } from 'tailwindcss'
import daisyUI from 'daisyui'

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
    theme: {
        extend: {
            backgroundImage: {
                'glow-conic':
                    'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
            },
        },
    },
    plugins: [daisyUI],
}
export default config
