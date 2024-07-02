import { DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react'

export type CardHeadingProps = DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
>

export const CardHeading = forwardRef<HTMLHeadingElement, CardHeadingProps>(
    function CardHeading({ children, className = '', ...props }, ref) {
        return (
            <h3 className={`ui-card-title ${className}`} {...props} ref={ref}>
                {children}
            </h3>
        )
    },
)
