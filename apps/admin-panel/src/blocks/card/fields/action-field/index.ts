import { Field as FieldType } from 'payload/types'
import { Field } from './components/field'

export const ActionsField: FieldType = {
    name: 'actions',
    type: 'array',
    fields: [
        {
            name: 'text',
            type: 'text',
        },
        {
            name: 'variant',
            type: 'select',
            options: [
                { label: 'Primary', value: 'primary' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Full Width', value: 'fullWidth' },
                { label: 'Neutral', value: 'neutral' },
                { label: 'Square', value: 'square' },
                { label: 'Round', value: 'round' },
            ],
            defaultValue: 'neutral',
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'iconType',
                    type: 'select',
                    defaultValue: 'solid',
                    options: [
                        { label: 'Solid', value: 'solid' },
                        { label: 'Outline', value: 'outline' },
                    ],
                },
                {
                    name: 'iconPosition',
                    type: 'select',
                    options: [
                        { label: 'Left', value: 'left' },
                        { label: 'Right', value: 'right' },
                    ],
                },
                {
                    name: 'icon',
                    type: 'text',
                    admin: {
                        components: {
                            Field,
                        },
                    },
                },
            ],
        },
    ],
}
