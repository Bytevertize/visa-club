export type Item = {
    id: string
    slug: string
    name: string
    // Copied over from `admin-types` package
    content: {
        root: {
            type: string
            children: {
                type: string
                version: number
                [k: string]: unknown
            }[]
            direction: ('ltr' | 'rtl') | null
            format:
                | 'left'
                | 'start'
                | 'center'
                | 'right'
                | 'end'
                | 'justify'
                | ''
            indent: number
            version: number
        }
        [k: string]: unknown
    } | null
}
