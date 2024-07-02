import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type FooterSection = {
    title?: string
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

export function FooterSection({ title, children, ...props }: FooterSection) {
    return (
        <aside {...props}>
            <h6 className="ui-footer-title">{title}</h6>
            {children}
        </aside>
    )
}
