import {
    PropMap,
    BaseVariants,
    ResponsivePropMap,
    BaseSizes,
} from '../../../types'

export const variants: PropMap<BaseVariants> = {
    primary: 'ui-textarea-primary',
    secondary: 'ui-textarea-secondary',
    accent: 'ui-textarea-accent',
    neutral: 'ui-textarea-neutral',
    ghost: 'ui-textarea-ghost',
    info: 'ui-textarea-info',
    success: 'ui-textarea-success',
    warning: 'ui-textarea-warning',
    error: 'ui-textarea-error',
}

export const sizes: ResponsivePropMap<BaseSizes> = {
    base: {
        lg: 'ui-textarea-lg',
        md: 'ui-textarea-md',
        sm: 'ui-textarea-sm',
        xs: 'ui-textarea-xs',
    },
    sm: {
        lg: 'sm:ui-textarea-lg',
        md: 'sm:ui-textarea-md',
        sm: 'sm:ui-textarea-sm',
        xs: 'sm:ui-textarea-xs',
    },
    md: {
        lg: 'md:ui-textarea-lg',
        md: 'md:ui-textarea-md',
        sm: 'md:ui-textarea-sm',
        xs: 'md:ui-textarea-xs',
    },
    lg: {
        lg: 'lg:ui-textarea-lg',
        md: 'lg:ui-textarea-md',
        sm: 'lg:ui-textarea-sm',
        xs: 'lg:ui-textarea-xs',
    },
    xl: {
        lg: 'xl:ui-textarea-lg',
        md: 'xl:ui-textarea-md',
        sm: 'xl:ui-textarea-sm',
        xs: 'xl:ui-textarea-xs',
    },
    '2xl': {
        lg: '2xl:ui-textarea-lg',
        md: '2xl:ui-textarea-md',
        sm: '2xl:ui-textarea-sm',
        xs: '2xl:ui-textarea-xs',
    },
}
