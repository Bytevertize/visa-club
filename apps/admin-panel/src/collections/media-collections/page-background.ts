import { CollectionConfig } from 'payload/types'
import { allowAll, allowOnlyAdmin } from '../../access'

export const PageBackground: CollectionConfig = {
    admin: {
        group: 'Media',
    },
    slug: 'page-background',
    access: {
        read: allowAll,
        create: allowOnlyAdmin,
        update: allowOnlyAdmin,
    },
    upload: {
        staticURL: `${process.env.MEDIA_URL}/page-background`,
        staticDir: '../media/page-background',
        imageSizes: [
            {
                name: 'desktop',
                fit: 'fill',
                height: 1080,
                width: 1920,
            },
            {
                name: 'mobile',
                position: 'south',
                fit: 'cover',
                width: 428,
                height: 926,
            },
            {
                name: 'tablet',
                width: 1024,
                position: 'centre',
            },
        ],
        adminThumbnail: 'desktop',
        mimeTypes: ['image/*'],
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
        },
    ],
}
