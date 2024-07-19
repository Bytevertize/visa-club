import type { CollectionConfig } from 'payload/types'
import { PageSection } from '../fields'
import { allowPublishedToPublic } from '../access'

export const Pages: CollectionConfig = {
    slug: 'pages',
    access: {
        read: allowPublishedToPublic,
    },
    versions: {
        drafts: { autosave: true },
    },
    admin: {
        useAsTitle: 'title',
    },
    hooks: {
        beforeChange: [
            function ({ data }) {
                return {
                    ...data,
                    slug:
                        data.title === 'index' || !data.title
                            ? 'index'
                            : data.title
                                  .toLowerCase()
                                  .trim()
                                  .replace(/[^\w\s-]/g, '')
                                  .replace(/[\s_-]+/g, '-')
                                  .replace(/^-+|-+$/g, ''),
                }
            },
        ],
    },
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    localized: true,
                    required: true,
                    unique: true,
                },
                {
                    type: 'text',
                    name: 'slug',
                    admin: {
                        // hidden: true,
                        readOnly: true,
                    },
                },
                // SlugField('title', {
                //     unique: true,
                // }),
            ],
        },
        // { type: 'upload', relationTo: `page-background`, name: 'image' },
        {
            name: 'pageSections',
            type: 'array',
            fields: [PageSection],
        },
    ],
}
