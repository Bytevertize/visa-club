import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { BaseVariants } from '../../types'

export type TooltipProps = {
    isOpen?: boolean
    position: 'top' | 'bottom' | 'left' | 'right'
    label: string
    variant?: BaseVariants
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const variants: Record<BaseVariants, string> = {
    primary: 'ui-tooltip-primary',
    secondary: 'ui-tooltip-secondary',
    accent: 'ui-tooltip-accent',
    neutral: 'ui-tooltip-neutral',
    ghost: 'ui-tooltip-ghost',
    info: 'ui-tooltip-info',
    success: 'ui-tooltip-success',
    warning: 'ui-tooltip-warning',
    error: 'ui-tooltip-error',
}

const positions: Record<'top' | 'bottom' | 'left' | 'right', string> = {
    top: 'ui-tooltip-top',
    bottom: 'ui-tooltip-bottom',
    left: 'ui-tooltip-left',
    right: 'ui-tooltip-right',
}

export function Tooltip({
    isOpen,
    position,
    label,
    variant,
    children,
    ...props
}: TooltipProps) {
    return (
        <div
            className={`ui-tooltip ${variant ? variants[variant] : ''} ${
                positions[position]
            } ${isOpen ? 'ui-tooltip-open' : ''}`}
            data-tip={label}
            {...props}
        >
            {children}
        </div>
    )
}
