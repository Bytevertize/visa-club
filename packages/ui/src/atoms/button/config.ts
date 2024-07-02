import {
    PropMap,
    BaseVariants,
    BaseSizes,
    ResponsivePropMap,
    ResponsiveMap,
} from '../../types'

export const variants: PropMap<BaseVariants | 'glass'> = {
    neutral: 'ui-btn-neutral',
    primary: 'ui-btn-primary',
    secondary: 'ui-btn-secondary',
    accent: 'ui-btn-accent',
    ghost: 'ui-btn-ghost',
    info: 'ui-btn-info',
    glass: 'ui-glass',
    success: 'ui-btn-success',
    warning: 'ui-btn-warning',
    error: 'ui-btn-error',
}

export const responsiveSizes: ResponsivePropMap<BaseSizes> = {
    base: {
        lg: 'ui-btn-lg',
        md: 'ui-btn-md',
        sm: 'ui-btn-sm',
        xs: 'ui-btn-xs',
    },
    sm: {
        lg: 'sm:ui-btn-lg',
        md: 'sm:ui-btn-md',
        sm: 'sm:ui-btn-sm',
        xs: 'sm:ui-btn-xs',
    },
    md: {
        lg: 'md:ui-btn-lg',
        md: 'md:ui-btn-md',
        sm: 'md:ui-btn-sm',
        xs: 'md:ui-btn-xs',
    },
    lg: {
        lg: 'lg:ui-btn-lg',
        md: 'lg:ui-btn-md',
        sm: 'lg:ui-btn-sm',
        xs: 'lg:ui-btn-xs',
    },
    xl: {
        lg: 'xl:ui-btn-lg',
        md: 'xl:ui-btn-md',
        sm: 'xl:ui-btn-sm',
        xs: 'xl:ui-btn-xs',
    },
    '2xl': {
        lg: '2xl:ui-btn-lg',
        md: '2xl:ui-btn-md',
        sm: '2xl:ui-btn-sm',
        xs: '2xl:ui-btn-xs',
    },
}

export const responsiveWide: ResponsiveMap<string> = {
    base: 'ui-btn-wide',
    sm: 'sm:ui-btn-wide',
    md: 'md:ui-btn-wide',
    lg: 'lg:ui-btn-wide',
    xl: 'xl:ui-btn-wide',
    '2xl': '2xl:ui-btn-wide',
}

export const responsiveBlock: ResponsiveMap<string> = {
    base: 'ui-btn-block',
    sm: 'sm:ui-btn-block',
    md: 'md:ui-btn-block',
    lg: 'lg:ui-btn-block',
    xl: 'xl:ui-btn-block',
    '2xl': '2xl:ui-btn-block',
}

export const responsiveCircle: ResponsiveMap<string> = {
    base: 'ui-btn-circle',
    sm: 'sm:ui-btn-circle',
    md: 'md:ui-btn-circle',
    lg: 'lg:ui-btn-circle',
    xl: 'xl:ui-btn-circle',
    '2xl': '2xl:ui-btn-circle',
}

export const responsiveSquare: ResponsiveMap<string> = {
    base: 'ui-btn-square',
    sm: 'sm:ui-btn-square',
    md: 'md:ui-btn-square',
    lg: 'lg:ui-btn-square',
    xl: 'xl:ui-btn-square',
    '2xl': '2xl:ui-btn-square',
}
