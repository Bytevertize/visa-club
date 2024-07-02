import {
    BaseVariants,
    PropMap,
    ResponsiveMap,
    ResponsivePropMap,
} from '../../types'

export const variants: PropMap<BaseVariants> = {
    primary: 'ui-divider-primary',
    secondary: 'ui-divider-secondary',
    accent: 'ui-divider-accent',
    neutral: 'ui-divider-neutral',
    ghost: 'ui-divider-ghost',
    info: 'ui-divider-info',
    success: 'ui-divider-success',
    warning: 'ui-divider-warning',
    error: 'ui-divider-error',
}

export const verticalOptions: ResponsiveMap<string> = {
    base: 'ui-divider-vertical',
    sm: 'sm:ui-divider-vertical',
    md: 'md:ui-divider-vertical',
    lg: 'lg:ui-divider-vertical',
    xl: 'xl:ui-divider-vertical',
    '2xl': '2xl:ui-divider-vertical',
}

export const horizontalOptions: ResponsiveMap<string> = {
    base: 'ui-divider-horizontal',
    sm: 'sm:ui-divider-horizontal',
    md: 'md:ui-divider-horizontal',
    lg: 'lg:ui-divider-horizontal',
    xl: 'xl:ui-divider-horizontal',
    '2xl': '2xl:ui-divider-horizontal',
}

export const positionOptions: ResponsivePropMap<'start' | 'middle' | 'end'> = {
    base: {
        end: 'ui-divider-end',
        middle: '',
        start: 'ui-divider-start',
    },
    sm: { end: 'sm:ui-divider-end', middle: '', start: 'sm:ui-divider-start' },
    md: { end: 'md:ui-divider-end', middle: '', start: 'md:ui-divider-start' },
    lg: { end: 'lg:ui-divider-end', middle: '', start: 'lg:ui-divider-start' },
    xl: { end: 'xl:ui-divider-end', middle: '', start: 'xl:ui-divider-start' },
    '2xl': {
        end: '2xl:ui-divider-end',
        middle: '',
        start: '2xl:ui-divider-start',
    },
}
