import { Field } from 'payload/types'

export const BackgroundImageField: Field = {
    name: 'image',
    type: 'upload',
    relationTo: 'media',
}
