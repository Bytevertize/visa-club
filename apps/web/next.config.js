/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const config = {
    reactStrictMode: true,
    transpilePackages: ['@repo/ui'],
}

module.exports = withBundleAnalyzer(config)
