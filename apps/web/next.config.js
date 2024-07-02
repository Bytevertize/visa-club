const path = require('node:path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    transpilePackages: ['@repo/ui'],
    output: 'standalone',
    experimental: {
        outputFileTracingRoot: path.join(__dirname, '../../'),
    },
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
