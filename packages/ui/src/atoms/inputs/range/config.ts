import {
    BaseSizes,
    BaseVariants,
    PropMap,
    ResponsivePropMap,
} from '../../../types'

export const variants: PropMap<BaseVariants> = {
    primary: 'ui-range-primary',
    secondary: 'ui-range-secondary',
    accent: 'ui-range-accent',
    neutral: 'ui-range-neutral',
    ghost: 'ui-range-ghost',
    info: 'ui-range-info',
    success: 'ui-range-success',
    warning: 'ui-range-warning',
    error: 'ui-range-error',
}

export const sizes: ResponsivePropMap<BaseSizes> = {
    base: {
        lg: 'ui-range-lg',
        md: 'ui-range-md',
        sm: 'ui-range-sm',
        xs: 'ui-range-xs',
    },
    sm: {
        lg: 'sm:ui-range-lg',
        md: 'sm:ui-range-md',
        sm: 'sm:ui-range-sm',
        xs: 'sm:ui-range-xs',
    },
    md: {
        lg: 'md:ui-range-lg',
        md: 'md:ui-range-md',
        sm: 'md:ui-range-sm',
        xs: 'md:ui-range-xs',
    },
    lg: {
        lg: 'lg:ui-range-lg',
        md: 'lg:ui-range-md',
        sm: 'lg:ui-range-sm',
        xs: 'lg:ui-range-xs',
    },
    xl: {
        lg: 'xl:ui-range-lg',
        md: 'xl:ui-range-md',
        sm: 'xl:ui-range-sm',
        xs: 'xl:ui-range-xs',
    },
    '2xl': {
        lg: '2xl:ui-range-lg',
        md: '2xl:ui-range-md',
        sm: '2xl:ui-range-sm',
        xs: '2xl:ui-range-xs',
    },
}
