import { Block } from 'payload/types'
import { ActionsField, ContentField, HeaderField, ImageField } from './fields'

export const CardBlock: Block = {
    slug: 'card',
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    name: 'content',
                    fields: [HeaderField, ContentField],
                },
                {
                    name: 'actions',
                    fields: [ActionsField],
                },
                {
                    name: 'image',
                    fields: [ImageField],
                },
            ],
        },
    ],
}
