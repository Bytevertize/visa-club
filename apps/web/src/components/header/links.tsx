import type { Page, Header } from 'admin-types'
import Link from 'next/link'
import type { Locale } from '@i18n/types'

type Props = {
    locale: Locale
    isMobile?: boolean
    data: Header['navItems']['items']
}
export function Links({ data, locale, isMobile }: Props) {
    return (data || []).map((item) => {
        return (
            <li
                className={`p-0  ${
                    isMobile
                        ? 'w-full py-2 border-b border-white-400 focus:color-yellow-400'
                        : 'border-b border-transparent hover:border-yellow-400'
                }`}
                key={item.id}
            >
                <Link
                    className="no-underline"
                    href={getUrl(item, locale)}
                    target={getTarget(item)}
                >
                    {item.link.label}
                </Link>
            </li>
        )
    })
}

function getTarget(item: any) {
    return item.link.newTab ? '_blank' : ''
}
function getUrl(item: any, locale: Locale) {
    switch (item.link.type) {
        case 'reference':
            if (!(item.link.reference?.value as Page).slug) {
                throw new Error('Slug missing for provided page')
            }

            return (item.link.reference?.value as Page).slug === 'index'
                ? `/${locale}`
                : `/${locale}/${(item.link.reference?.value as Page).slug}`
        case 'custom':
            if (!item.link.url) {
                throw new Error('URL missing for provided external page')
            }

            return item.link.url
        default:
            throw new Error('Invalid Link Type provided to Header')
    }
}
