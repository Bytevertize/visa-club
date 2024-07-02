import {
    BaseSizes,
    BaseVariants,
    PropMap,
    ResponsivePropMap,
} from '../../../types'

export const sizes: ResponsivePropMap<BaseSizes> = {
    base: {
        lg: 'ui-file-input-lg',
        md: 'ui-file-input-md',
        sm: 'ui-file-input-sm',
        xs: 'ui-file-input-xs',
    },
    sm: {
        lg: 'sm:ui-file-input-lg',
        md: 'sm:ui-file-input-md',
        sm: 'sm:ui-file-input-sm',
        xs: 'sm:ui-file-input-xs',
    },
    md: {
        lg: 'md:ui-file-input-lg',
        md: 'md:ui-file-input-md',
        sm: 'md:ui-file-input-sm',
        xs: 'md:ui-file-input-xs',
    },
    lg: {
        lg: 'lg:ui-file-input-lg',
        md: 'lg:ui-file-input-md',
        sm: 'lg:ui-file-input-sm',
        xs: 'lg:ui-file-input-xs',
    },

    xl: {
        lg: 'xl:ui-file-input-lg',
        md: 'xl:ui-file-input-md',
        sm: 'xl:ui-file-input-sm',
        xs: 'xl:ui-file-input-xs',
    },
    '2xl': {
        lg: '2xl:ui-file-input-lg',
        md: '2xl:ui-file-input-md',
        sm: '2xl:ui-file-input-sm',
        xs: '2xl:ui-file-input-xs',
    },
}

export const variants: PropMap<BaseVariants> = {
    primary: 'ui-file-input-primary',
    secondary: 'ui-file-input-secondary',
    accent: 'ui-file-input-accent',
    neutral: 'ui-file-input-neutral',
    ghost: 'ui-file-input-ghost',
    info: 'ui-file-input-info',
    success: 'ui-file-input-success',
    warning: 'ui-file-input-warning',
    error: 'ui-file-input-error',
}
