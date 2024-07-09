import type { Page } from 'admin-types'
import Link from 'next/link'
import { Locale } from '@i18n/types'
import type { Header } from 'admin-types'
type Props = {
    locale: Locale
    isMobile?: boolean
    data: Header['navItems']['items']
}
export function Links({ data, locale, isMobile }: Props) {
    return data.map((item) => {
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

function getTarget(item: Header['navItems']['items'][0]) {
    return item.link.newTab ? '_blank' : ''
}
function getUrl(item: Header['navItems']['items'][0], locale: Locale) {
    switch (item.link.type) {
        case 'reference':
            const slug = (item.link.reference?.value as Page)?.slug

            if (!slug) {
                throw new Error('Slug missing for provided page')
            }

            return slug === 'index' ? `/${locale}` : `/${locale}/${slug}`
        case 'custom':
            if (!item.link.url) {
                throw new Error('URL missing for provided external page')
            }

            return item.link.url
        default:
            throw new Error('Invalid Link Type provided to Header')
    }
}
