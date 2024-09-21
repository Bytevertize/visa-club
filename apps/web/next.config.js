const path = require('node:path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const config = {
    async rewrites() {
        return [
            {
                source: '/media/:path*',
                destination: `${process.env.PUBLIC_CMS_IMAGE_HOSTNAME}/media/:path*`,
            },
        ]
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
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
            {
                protocol: 'https',
                hostname: process.env.PAYLOAD_HOSTNAME,
            },
        ],
    },
}

module.exports = withBundleAnalyzer(config)
