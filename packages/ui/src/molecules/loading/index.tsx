import { DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react'
import { BaseSizes } from '../../types'

type LoadingVariants =
    | 'spinner'
    | 'dots'
    | 'ring'
    | 'ball'
    | 'bars'
    | 'infinity'

export type LoadingProps = {
    size?: BaseSizes
    variant?: LoadingVariants
} & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

const sizes: Record<BaseSizes, string> = {
    lg: 'ui-loading-lg',
    md: 'ui-loading-md',
    sm: 'ui-loading-sm',
    xs: 'ui-loading-xs',
}

const variants: Record<LoadingVariants, string> = {
    spinner: 'ui-loading-spinner',
    dots: 'ui-loading-dots',
    ring: 'ui-loading-ring',
    ball: 'ui-loading-ball',
    bars: 'ui-loading-bars',
    infinity: 'ui-loading-infinity',
}

export const Loading = forwardRef<HTMLSpanElement, LoadingProps>(
    function Loading(
        { size = 'md', variant = 'spinner', className = '', ...props },
        ref,
    ) {
        const sizeClass = sizes[size]
        const variantClass = variants[variant]

        return (
            <span
                className={`ui-loading ${sizeClass} ${variantClass} ${className}`}
                {...props}
                ref={ref}
            />
        )
    },
)
