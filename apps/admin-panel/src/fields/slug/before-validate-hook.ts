import type { FieldHook } from 'payload/types'

const format = (val: string): string =>
    val
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
        .toLowerCase()

export const formatSlug =
    (fallback: string): FieldHook =>
    ({ operation, value, originalDoc, data }) => {
        if (typeof value === 'string') {
            return value.trim() ? format(value) : 'index'
        }

        if (operation === 'create') {
            const fallbackData = data?.[fallback] || originalDoc?.[fallback]

            if (fallbackData && typeof fallbackData === 'string') {
                const formatted = format(fallbackData)

                return !formatted || formatted.includes('home')
                    ? 'index'
                    : formatted
            }
        }

        return value
    }
