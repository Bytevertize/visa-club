import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type FooterColumnProps = DetailedHTMLProps<
    HTMLAttributes<HTMLElement>,
    HTMLElement
>

export function FooterColumn(props: FooterColumnProps) {
    return <nav {...props} />
}
