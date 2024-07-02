import type { GlobalConfig } from 'payload/types'
import { BackgroundSelect } from '../../fields'
import { allowPublishedToPublic } from '../../access'

export const FooterGlobal: GlobalConfig = {
    slug: 'footer',
    access: {
        read: allowPublishedToPublic,
    },
    versions: {
        drafts: { autosave: true },
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    name: 'content',
                    fields: [
                        {
                            label: false,
                            localized: true,
                            name: 'content',
                            type: 'richText',
                        },
                    ],
                },
                {
                    name: 'background',
                    fields: [BackgroundSelect('page-section-background')],
                },
            ],
        },
    ],
}
