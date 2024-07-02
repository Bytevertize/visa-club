import { Field } from 'payload/types'
import { AnimationField } from './animation'
import { BackgroundSelect } from '../background-select'

export const PageSection: Field = {
    // name: 'pageSection',
    type: 'tabs',
    tabs: [
        {
            name: 'content',
            fields: [
                {
                    name: 'richText',
                    label: false,
                    type: 'richText',
                },
            ],
        },
        {
            name: 'animationSettings',
            fields: [
                {
                    label: 'Animation Settings',
                    type: 'collapsible',
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
