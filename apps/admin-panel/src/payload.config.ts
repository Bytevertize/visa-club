import path from 'path'
import dotenv from 'dotenv'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { lexicalEditor, BlocksFeature } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload/config'
import { Users, Pages, Media } from './collections'
import { LayoutFeature, DividerFeature } from './rich-text'
import { RichTextTheme } from './rich-text/theme'
import { CardBlock } from './blocks'
import { HeaderGlobal } from './globals'
import { FooterGlobal } from './globals/footer'
import seoPlugin from '@payloadcms/plugin-seo'

dotenv.config()
/* eslint-disable-import/prefer-default-export */
export default buildConfig({
    admin: {
        user: Users.slug,
        bundler: webpackBundler(),
        livePreview: {
            url({ data, locale }) {
                return `${
                    process.env.PAYLOAD_PUBLIC_WEB_ENDPOINT
                }/api/draft?secret=${
                    process.env.PAYLOAD_PUBLIC_WEB_DRAFT_TOKEN
                }&slug=${data.slug || 'index'}&locale=${locale}`
            },
            collections: ['pages'],
            globals: ['header', 'footer'],
            breakpoints: [
                {
                    label: 'Mobile',
                    name: 'mobile',
                    width: 375,
                    height: 667,
                },
                {
                    label: 'Tablet',
                    name: 'tablet',
                    width: 768,
                    height: 1024,
                },
                {
                    label: 'Desktop',
                    name: 'desktop',
                    width: 1440,
                    height: 900,
                },
            ],
        },
    },
    editor: lexicalEditor({
        lexical: {
            namespace: 'payload',
            theme: RichTextTheme,
        },
        features({ defaultFeatures }) {
            return [
                ...defaultFeatures,
                LayoutFeature(),
                DividerFeature(),
                BlocksFeature({
                    blocks: [CardBlock],
                }),
            ]
        },
    }),
    collections: [Users, Pages, Media],
    globals: [HeaderGlobal, FooterGlobal],
    typescript: {
        outputFile: '../../packages/admin-types/types.d.ts',
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    },
    localization: {
        defaultLocale: 'bg',
        locales: [
            { code: 'bg', label: 'Bulgarian' },
            { code: 'en', label: 'English' },
        ],
        fallback: true,
    },
    plugins: [
        seoPlugin({
            collections: ['pages'],
            uploadsCollection: 'media',
            generateTitle({ doc }) {
                return `Website.com — ${(doc as any).title.value}`
            },
            generateURL({ doc, locale }) {
                const slug =
                    (doc as any).slug.value === 'index'
                        ? ''
                        : (doc as any).slug.value
                return `${process.env.PAYLOAD_PUBLIC_WEB_ENDPOINT}/${locale}/${slug}`
            },
            fieldOverrides: {
                title: {
                    required: false,
                    localized: true,
                },
                description: {
                    required: false,
                    localized: true,
                },
            },
        }),
    ],
    db: mongooseAdapter({
        url: process.env.DATABASE_URI as string,
    }),
})
