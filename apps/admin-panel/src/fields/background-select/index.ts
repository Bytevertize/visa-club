import { Field } from 'payload/types'
import InputField from './color-field/components/select'
import Cell from './color-field/components/cell'

export function BackgroundSelect(imageCollection: string): Field {
    return {
        name: 'background',
        type: 'group',
        localized: true,
        fields: [
            {
                name: 'type',
                label: 'Background Type',
                type: 'select',
                defaultValue: 'none',
                options: [
                    { label: 'None', value: 'none' },
                    { label: 'Color', value: 'color' },
                    { label: 'Image', value: 'image' },
                ],
            },
            {
                admin: {
                    condition(data, siblingData) {
                        return siblingData.type === 'image'
                    },
                },
                type: 'upload',
                name: 'image',
                relationTo: imageCollection,
            },
            {
                name: 'color',
                type: 'text',
                required: true,
                admin: {
                    components: {
                        Field: InputField,
                        Cell: Cell,
                    },
                    condition(data, siblingData) {
                        return siblingData.type === 'color'
                    },
                },
            },
        ],
    }
}
