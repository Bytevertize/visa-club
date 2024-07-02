import {
    BaseVariants,
    BaseSizes,
    PropMap,
    ResponsivePropMap,
} from '../../../types'

export const variants: PropMap<BaseVariants> = {
    primary: 'ui-checkbox-primary',
    secondary: 'ui-checkbox-secondary',
    accent: 'ui-checkbox-accent',
    neutral: 'ui-checkbox-neutral',
    ghost: 'ui-checkbox-ghost',
    info: 'ui-checkbox-info',
    success: 'ui-checkbox-success',
    warning: 'ui-checkbox-warning',
    error: 'ui-checkbox-error',
}

export const sizes: ResponsivePropMap<BaseSizes> = {
    base: {
        lg: 'ui-checkbox-lg',
        md: 'ui-checkbox-md',
        sm: 'ui-checkbox-sm',
        xs: 'ui-checkbox-xs',
    },
    sm: {
        lg: 'sm:ui-checkbox-lg',
        md: 'sm:ui-checkbox-md',
        sm: 'sm:ui-checkbox-sm',
        xs: 'sm:ui-checkbox-xs',
    },
    md: {
        lg: 'md:ui-checkbox-lg',
        md: 'md:ui-checkbox-md',
        sm: 'md:ui-checkbox-sm',
        xs: 'md:ui-checkbox-xs',
    },
    lg: {
        lg: 'lg:ui-checkbox-lg',
        md: 'lg:ui-checkbox-md',
        sm: 'lg:ui-checkbox-sm',
        xs: 'lg:ui-checkbox-xs',
    },
    xl: {
        lg: 'xl:ui-checkbox-lg',
        md: 'xl:ui-checkbox-md',
        sm: 'xl:ui-checkbox-sm',
        xs: 'xl:ui-checkbox-xs',
    },
    '2xl': {
        lg: '2xl:ui-checkbox-lg',
        md: '2xl:ui-checkbox-md',
        sm: '2xl:ui-checkbox-sm',
        xs: '2xl:ui-checkbox-xs',
    },
}
