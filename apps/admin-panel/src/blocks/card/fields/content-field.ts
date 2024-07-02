import { slateEditor } from '@payloadcms/richtext-slate'
import { Field } from 'payload/types'

export const ContentField: Field = {
    name: 'content',
    type: 'richText',
    editor: slateEditor({
        admin: {
            elements: [
                'blockquote',
                'indent',
                'link',
                'ol',
                'relationship',
                'textAlign',
                'ul',
            ],
        },
    }),
}
