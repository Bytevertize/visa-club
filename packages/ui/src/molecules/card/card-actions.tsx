import { DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react'

export type CardActionProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>

export const CardActions = forwardRef<HTMLDivElement, CardActionProps>(
    function CardActions({ className = '', children, ...props }, ref) {
        return (
            <div
                className={`ui-card-actions ${className}`}
                {...props}
                ref={ref}
            >
                {children}
            </div>
        )
    },
)
