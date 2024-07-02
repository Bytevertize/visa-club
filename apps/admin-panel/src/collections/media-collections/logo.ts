import { CollectionConfig } from 'payload/types'
import { allowAll, allowOnlyAdmin } from '../../access'

export const LogoMedia: CollectionConfig = {
    slug: 'logo',
    access: {
        read: allowAll,
        create: allowOnlyAdmin,
        update: allowOnlyAdmin,
    },
    upload: {
        staticURL: `${process.env.MEDIA_URL}/logo`,
        staticDir: '../media/logo',
        mimeTypes: ['image/svg'],
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
        },
    ],
}
