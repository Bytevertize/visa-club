import {
    PropMap,
    BaseVariants,
    ResponsivePropMap,
    BaseSizes,
} from '../../types'

export const variants: PropMap<BaseVariants> = {
    neutral: 'ui-badge-neutral',
    primary: 'ui-badge-primary',
    secondary: 'ui-badge-secondary',
    accent: 'ui-badge-accent',
    ghost: 'ui-badge-ghost',
    info: 'ui-badge-info',
    success: 'ui-badge-success',
    warning: 'ui-badge-warning',
    error: 'ui-badge-error',
}

export const responsiveSizes: ResponsivePropMap<BaseSizes> = {
    base: {
        lg: 'ui-badge-lg',
        md: 'ui-badge-md',
        sm: 'ui-badge-sm',
        xs: 'ui-badge-xs',
    },
    sm: {
        lg: 'sm:ui-badge-lg',
        md: 'sm:ui-badge-md',
        sm: 'sm:ui-badge-sm',
        xs: 'sm:ui-badge-xs',
    },
    md: {
        lg: 'md:ui-badge-lg',
        md: 'md:ui-badge-md',
        sm: 'md:ui-badge-sm',
        xs: 'md:ui-badge-xs',
    },
    lg: {
        lg: 'lg:ui-badge-lg',
        md: 'lg:ui-badge-md',
        sm: 'lg:ui-badge-sm',
        xs: 'lg:ui-badge-xs',
    },
    xl: {
        lg: 'xl:ui-badge-lg',
        md: 'xl:ui-badge-md',
        sm: 'xl:ui-badge-sm',
        xs: 'xl:ui-badge-xs',
    },
    '2xl': {
        lg: '2xl:ui-badge-lg',
        md: '2xl:ui-badge-md',
        sm: '2xl:ui-badge-sm',
        xs: '2xl:ui-badge-xs',
    },
}
