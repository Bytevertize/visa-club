export type BaseVariants =
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'neutral'
    | 'ghost'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'

export type BaseSizes = 'lg' | 'md' | 'sm' | 'xs'

export type PropMap<T extends string = string> = Record<T, string>

export type ResponsivePropMap<T extends string = string> = {
    base: PropMap<T>
    sm: PropMap<T>
    md: PropMap<T>
    lg: PropMap<T>
    xl: PropMap<T>
    '2xl': PropMap<T>
}

export type ResponsiveMap<T> = {
    base: T
    sm: T
    md: T
    lg: T
    xl: T
    '2xl': T
}

export type ResponsiveProp<T> = {
    base?: T
    sm?: T
    md?: T
    lg?: T
    xl?: T
    '2xl'?: T
}
