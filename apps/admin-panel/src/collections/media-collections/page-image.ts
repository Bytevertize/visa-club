import { CollectionConfig } from 'payload/types'
import { allowAll, allowOnlyAdmin } from '../../access'

export const PageImage: CollectionConfig = {
    slug: 'page-image',
    access: {
        read: allowAll,
        create: allowOnlyAdmin,
        update: allowOnlyAdmin,
    },
    upload: {
        staticDir: '../media/page-image',
        staticURL: `${process.env.MEDIA_URL}/page-image`,
        imageSizes: [
            {
                name: 'wide',
                fit: 'cover',
                height: 225,
                width: 400,
            },
            {
                name: 'square',
                position: 'south',
                fit: 'cover',
                width: 400,
                height: 300,
            },
        ],
        adminThumbnail: 'wide',
        mimeTypes: ['image/*'],
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
        },
        {
            name: 'size',
            type: 'select',
            defaultValue: 'square',
            options: [
                { label: 'Square', value: 'square' },
                { label: 'Original', value: 'original' },
                { label: 'Wide', value: 'wide' },
            ],
        },
        {
            name: 'borderRadius',
            defaultValue: 0,
            max: 100,
            min: 0,
            type: 'number',
        },
        {
            name: 'alignment',
            type: 'select',
            defaultValue: 'center',
            options: [
                { label: 'Left', value: 'left' },
                { label: 'Center', value: 'center' },
                { label: 'Right', value: 'right' },
            ],
        },
    ],
}
