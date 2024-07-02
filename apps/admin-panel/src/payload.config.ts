import path from 'path'
import { payloadCloud } from '@payloadcms/plugin-cloud'
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

/* eslint-disable-import/prefer-default-export */
export default buildConfig({
    admin: {
        user: Users.slug,
        bundler: webpackBundler(),
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
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    },
    plugins: [payloadCloud()],
    db: mongooseAdapter({
        url: process.env.DATABASE_URI as string,
    }),
})
