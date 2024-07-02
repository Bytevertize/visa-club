import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type FooterProps = {
    isCentered?: boolean
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

export function Footer({
    isCentered,
    className,
    children,
    ...props
}: FooterProps) {
    return (
        <footer
            className={`ui-footer ${
                isCentered ? 'ui-footer-center' : ''
            } ${className}`}
            {...props}
        >
            {children}
        </footer>
    )
}
