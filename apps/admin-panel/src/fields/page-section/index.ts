import { Field } from 'payload/types'
import { AnimationField } from './animation'
import { BackgroundSelect } from '../background-select'

export const PageSection: Field = {
    type: 'tabs',
    tabs: [
        {
            name: 'content',
            fields: [
                {
                    name: 'richText',
                    label: false,
                    type: 'richText',
                    localized: true,
                },
            ],
        },
        {
            name: 'animationSettings',
            fields: [
                {
                    label: 'Animation Settings',
                    type: 'collapsible',
                    localized: true,
                    fields: [
                        AnimationField('onEnter'),
                        AnimationField('onLeave'),
                    ],
                },
            ],
        },
        {
            name: 'background',
            fields: [BackgroundSelect],
        },
    ],
}
