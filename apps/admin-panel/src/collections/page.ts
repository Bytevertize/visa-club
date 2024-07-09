import type { CollectionConfig } from 'payload/types'
import { PageSection, SlugField } from '../fields'
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
                SlugField('title', {
                    unique: true,
                }),
            ],
        },
        { type: 'upload', relationTo: `page-background`, name: 'image' },
        {
            name: 'pageSections',
            type: 'array',
            fields: [PageSection],
        },
    ],
}
