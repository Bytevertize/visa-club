import type { GlobalConfig } from 'payload/types'
import { BackgroundSelect } from '../../fields'

export const FooterGlobal: GlobalConfig = {
    slug: 'footer',
    access: {
        read: () => true,
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
                    fields: [BackgroundSelect],
                },
            ],
        },
    ],
}
