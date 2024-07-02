import {
    PropMap,
    BaseVariants,
    ResponsivePropMap,
    BaseSizes,
} from '../../../types'

export const variants: PropMap<BaseVariants> = {
    primary: 'ui-radio-primary',
    secondary: 'ui-radio-secondary',
    accent: 'ui-radio-accent',
    neutral: 'ui-radio-neutral',
    ghost: 'ui-radio-ghost',
    info: 'ui-radio-info',
    success: 'ui-radio-success',
    warning: 'ui-radio-warning',
    error: 'ui-radio-error',
}

export const sizes: ResponsivePropMap<BaseSizes> = {
    base: {
        lg: 'ui-radio-lg',
        md: 'ui-radio-md',
        sm: 'ui-radio-sm',
        xs: 'ui-radio-xs',
    },
    sm: {
        lg: 'sm:ui-radio-lg',
        md: 'sm:ui-radio-md',
        sm: 'sm:ui-radio-sm',
        xs: 'sm:ui-radio-xs',
    },
    md: {
        lg: 'md:ui-radio-lg',
        md: 'md:ui-radio-md',
        sm: 'md:ui-radio-sm',
        xs: 'md:ui-radio-xs',
    },
    lg: {
        lg: 'lg:ui-radio-lg',
        md: 'lg:ui-radio-md',
        sm: 'lg:ui-radio-sm',
        xs: 'lg:ui-radio-xs',
    },
    xl: {
        lg: 'xl:ui-radio-lg',
        md: 'xl:ui-radio-md',
        sm: 'xl:ui-radio-sm',
        xs: 'xl:ui-radio-xs',
    },
    '2xl': {
        lg: '2xl:ui-radio-lg',
        md: '2xl:ui-radio-md',
        sm: '2xl:ui-radio-sm',
        xs: '2xl:ui-radio-xs',
    },
}
