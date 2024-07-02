import { CollectionConfig } from 'payload/types'
import { allowAll, allowOnlyAdmin } from '../access'

export const Media: CollectionConfig = {
    slug: 'media',
    access: {
        read: allowAll,
        create: allowOnlyAdmin,
        update: allowOnlyAdmin,
    },
    upload: {
        staticURL: process.env.MEDIA_URL,
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
                // By specifying `undefined` or leaving a height undefined,
                // the image will be sized to a certain width,
                // but it will retain its original aspect ratio
                // and calculate a height automatically.
                position: 'centre',
            },
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
                position: 'centre',
            },
            {
                name: 'card',
                width: 768,
                height: 1024,
                position: 'centre',
            },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
        },
    ],
}
