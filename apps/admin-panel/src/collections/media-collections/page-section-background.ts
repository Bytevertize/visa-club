import { CollectionConfig } from 'payload/types'
import { allowAll, allowOnlyAdmin } from '../../access'

export const PageSectionBackground: CollectionConfig = {
    admin: {
        group: 'Media',
    },
    slug: 'page-section-background',
    access: {
        read: allowAll,
        create: allowOnlyAdmin,
        update: allowOnlyAdmin,
    },
    upload: {
        staticDir: '../media/page-section-background',
        staticURL: `${process.env.MEDIA_URL}/page-section-background`,
        adminThumbnail: 'wide',
        mimeTypes: ['image/*'],
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
        },
    ],
}
