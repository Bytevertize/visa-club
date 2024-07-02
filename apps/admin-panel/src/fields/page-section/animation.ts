import { Field } from 'payload/types'

export function AnimationField(name: string): Field {
    return {
        name,
        type: 'select',
        defaultValue: 'none',
        options: [
            { label: 'None', value: 'none' },
            { label: 'Fade', value: 'fade' },
            { label: 'Slide', value: 'slide' },
        ],
    }
}
