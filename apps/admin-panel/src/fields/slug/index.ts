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
            validate(value) {
                const slugRegex = /^[a-z0-9-]+$/
                if (!slugRegex.test(value)) {
                    return 'Only lowercase letters, numbers, and dashes are allowed'
                }

                return true
            },
            hooks: {
                beforeValidate: [formatSlug(fieldToUse)],
            },
        },
        overrides,
    )
