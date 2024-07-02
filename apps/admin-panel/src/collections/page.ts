import type { CollectionConfig } from 'payload/types'
import { PageSection, SlugField } from '../fields'

export const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        SlugField(),
        {
            name: 'pageSections',
            type: 'array',
            fields: [PageSection],
        },
    ],
}
