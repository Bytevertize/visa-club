import type { Page, Header } from 'admin-types'
import type { Locale } from '@i18n/types'
import { HeaderLink } from './link'

type Props = {
    locale: Locale
    isMobile?: boolean
    data: Header['navItems']['items']
}
export function Links({ data, locale, isMobile }: Props) {
    return (data || []).map((item) => {
        return (
            <HeaderLink
                href={getUrl(item, locale)}
                isMobile={isMobile}
                key={item.id}
                label={item.link.label}
                target={getTarget(item)}
            />
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
