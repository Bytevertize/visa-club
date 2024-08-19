import { CollectionConfig } from 'payload/types'
import { allowOnlyAdmin } from '../../access'
import {
    BoldTextFeature,
    HeadingFeature,
    IndentFeature,
    ItalicTextFeature,
    lexicalEditor,
    LinkFeature,
    ParagraphFeature,
    StrikethroughTextFeature,
    UnderlineTextFeature,
} from '@payloadcms/richtext-lexical'

const editor = lexicalEditor({
    features: [
        BoldTextFeature(),
        ItalicTextFeature(),
        UnderlineTextFeature(),
        StrikethroughTextFeature(),
        ParagraphFeature(),
        HeadingFeature({ enabledHeadingSizes: ['h3', 'h4', 'h5'] }),
        IndentFeature(),
        LinkFeature({}),
    ],
})

export const Cause: CollectionConfig = {
    access: {
        create: allowOnlyAdmin,
        update: allowOnlyAdmin,
        delete: allowOnlyAdmin,
        unlock: allowOnlyAdmin,
        readVersions: allowOnlyAdmin,
        read({ req }) {
            if (req.user) return true

            return false
        },
    },
    admin: {
        useAsTitle: 'name',
        group: 'Data Page',
        disableDuplicate: true,
        listSearchableFields: ['name'],
    },
    hooks: {
        beforeChange: [
            // create slug on save or update
            function ({ data }) {
                return {
                    ...data,
                    slug: data.name
                        .toLowerCase()
                        .trim()
                        .replace(/[^\w\s-]/g, '')
                        .replace(/[\s_-]+/g, '-')
                        .replace(/^-+|-+$/g, ''),
                }
            },
        ],
    },
    slug: 'cause',
    fields: [
        {
            type: 'row',
            fields: [
                {
                    type: 'text',
                    name: 'name',
                    unique: true,
                    required: true,
                },
                {
                    type: 'text',
                    name: 'slug',
                    admin: {
                        readOnly: true,
                    },
                },
            ],
        },
        {
            type: 'richText',
            name: 'content',
            localized: true,
            editor,
        },
    ],
}
