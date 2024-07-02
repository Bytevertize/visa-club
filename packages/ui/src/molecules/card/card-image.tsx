import { DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react'

export type CardImageProps = DetailedHTMLProps<
    HTMLAttributes<HTMLElement>,
    HTMLElement
>

export const CardImage = forwardRef<HTMLElement, CardImageProps>(
    function CardImage({ children, ...props }, ref) {
        return (
            <figure {...props} ref={ref}>
                {children}
            </figure>
        )
    },
)
