import type { GlobalConfig } from 'payload/types'
import link from '../../fields/link'
import { BackgroundSelect } from '../../fields'

export const HeaderGlobal: GlobalConfig = {
    access: {
        read: () => true,
    },

    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    name: 'navItems',
                    fields: [
                        {
                            name: 'itemsToShow',
                            type: 'number',
                            defaultValue: 7,
                            max: 7,
                            min: 0,
                            required: true,
                        },
                        {
                            name: 'items',
                            type: 'array',
                            required: true,
                            localized: true,
                            fields: [
                                link({
                                    appearances: false,
                                }),
                            ],
                        },
                    ],
                },
                {
                    name: 'logo',
                    fields: [
                        {
                            name: 'image',
                            type: 'upload',
                            relationTo: 'media',
                            required: true,
                        },
                        {
                            name: 'hideOnHomepage',
                            type: 'checkbox',
                            required: true,
                            defaultValue: true,
                        },
                    ],
                },
                {
                    name: 'i18n',
                    fields: [
                        {
                            name: 'toggleIcon',
                            type: 'checkbox',
                            defaultValue: false,
                        },
                        {
                            name: 'text',
                            type: 'text',
                            required: true,
                            defaultValue: 'bg | en',
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
    slug: 'header',
}
