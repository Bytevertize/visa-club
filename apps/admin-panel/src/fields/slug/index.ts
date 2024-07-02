import type { Field } from 'payload/types'

import { deepMerge } from '../../utils'
import { formatSlug } from './before-validate-hook'

export const SlugField = (
    fieldToUse: string = 'title',
    overrides: Partial<Field> = {},
) =>
    deepMerge<Field, Partial<Field>>(
        {
            name: 'slug',
            label: 'Slug',
            type: 'text',
            index: true,
            admin: {
                position: 'sidebar',
            },
            hooks: {
                beforeValidate: [formatSlug(fieldToUse)],
            },
        },
        overrides,
    )
