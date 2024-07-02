import { DetailedHTMLProps, HTMLAttributes, ReactNode, forwardRef } from 'react'

export type BreadcrumbsProps = {
    items: {
        id: string | number
        item: ReactNode
    }[]
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
    function Breadcrumbs({ items, className = '', ...props }, ref) {
        return (
            <div className={`ui-breadcrumbs ${className}`} {...props} ref={ref}>
                <ul>
                    {items.map(({ id, item }) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    },
)
