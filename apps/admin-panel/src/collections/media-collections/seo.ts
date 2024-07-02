import { CollectionConfig } from 'payload/types'
import { allowAll, allowOnlyAdmin } from '../../access'

export const SEOMedia: CollectionConfig = {
    slug: 'seo',
    access: {
        read: allowAll,
        create: allowOnlyAdmin,
        update: allowOnlyAdmin,
    },
    upload: {
        staticDir: '../media/seo',
        staticURL: `${process.env.MEDIA_URL}/seo`,
        imageSizes: [
            { name: 'facebook', width: 1200, height: 630 },
            { name: 'twitter', width: 1024, height: 512 },
            { name: 'featured', width: 250, height: 250 },
        ],
        adminThumbnail: 'featured',
        mimeTypes: ['image/*'],
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
        },
    ],
}
