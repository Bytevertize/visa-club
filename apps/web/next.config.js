/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const config = {
    reactStrictMode: true,
    transpilePackages: ['@repo/ui'],
    images: {
        remotePatterns: [
            {
                port: '4000',
                protocol: 'http',
                hostname: 'localhost',
            },
        ],
    },
}

module.exports = withBundleAnalyzer(config)
