import type { CollectionConfig } from 'payload/types'
import { PageSection, SlugField } from '../fields'

export const Pages: CollectionConfig = {
    slug: 'pages',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            unique: true,
        },
        SlugField('title', {
            unique: true,
        }),
        {
            name: 'pageSections',
            type: 'array',
            fields: [PageSection],
        },
    ],
}
