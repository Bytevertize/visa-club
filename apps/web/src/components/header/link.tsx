import Link from 'next/link'
import type { HTMLAttributeAnchorTarget } from 'react'

type Props = {
    isMobile?: boolean
    target: HTMLAttributeAnchorTarget
    href: string
    label: string
}
export function HeaderLink({ isMobile = false, href, label, target }: Props) {
    return (
        <li
            className={`p-0  ${
                isMobile
                    ? 'w-full py-2 border-b border-white-400 focus:color-yellow-400'
                    : 'border-b border-transparent hover:border-yellow-400'
            }`}
        >
            <Link className="no-underline" href={href} target={target}>
                {label}
            </Link>
        </li>
    )
}
