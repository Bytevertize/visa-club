import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Field } from 'payload/types'

export const ContentField: Field = {
    name: 'content',
    type: 'richText',
    editor: lexicalEditor({}),
}
