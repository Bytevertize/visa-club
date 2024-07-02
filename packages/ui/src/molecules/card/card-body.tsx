import { DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react'

type CardBodyProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
    function CardBody({ children, className = '', ...props }, ref) {
        return (
            <div className={`ui-card-body ${className}`} {...props} ref={ref}>
                {children}
            </div>
        )
    },
)
