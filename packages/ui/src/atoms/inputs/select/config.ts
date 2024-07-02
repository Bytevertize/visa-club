import {
    PropMap,
    BaseSizes,
    BaseVariants,
    ResponsivePropMap,
} from '../../../types'

export const sizes: ResponsivePropMap<BaseSizes> = {
    base: {
        lg: 'ui-select-lg',
        md: 'ui-select-md',
        sm: 'ui-select-sm',
        xs: 'ui-select-xs',
    },
    sm: {
        lg: 'sm:ui-select-lg',
        md: 'sm:ui-select-md',
        sm: 'sm:ui-select-sm',
        xs: 'sm:ui-select-xs',
    },
    md: {
        lg: 'md:ui-select-lg',
        md: 'md:ui-select-md',
        sm: 'md:ui-select-sm',
        xs: 'md:ui-select-xs',
    },
    lg: {
        lg: 'lg:ui-select-lg',
        md: 'lg:ui-select-md',
        sm: 'lg:ui-select-sm',
        xs: 'lg:ui-select-xs',
    },
    xl: {
        lg: 'xl:ui-select-lg',
        md: 'xl:ui-select-md',
        sm: 'xl:ui-select-sm',
        xs: 'xl:ui-select-xs',
    },
    '2xl': {
        lg: '2xl:ui-select-lg',
        md: '2xl:ui-select-md',
        sm: '2xl:ui-select-sm',
        xs: '2xl:ui-select-xs',
    },
}

export const variants: PropMap<BaseVariants> = {
    primary: 'ui-select-primary',
    secondary: 'ui-select-secondary',
    accent: 'ui-select-accent',
    neutral: 'ui-select-neutral',
    ghost: 'ui-select-ghost',
    info: 'ui-select-info',
    success: 'ui-select-success',
    warning: 'ui-select-warning',
    error: 'ui-select-error',
}
