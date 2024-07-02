import type { Page } from 'admin-types'
import Link from 'next/link'
import type { HeaderProps } from './types'

export function Links({
    data,
    locale,
    isMobile,
}: Omit<HeaderProps, 'slug'> & { isMobile?: boolean }) {
    return data.navItems.items.map((item) => {
        const page = item.link.reference?.value as Page
        const link =
            page.slug === 'index' ? `/${locale}` : `/${locale}/${page.slug}`
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
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- TODO: Fix during refactoring
                    href={page.slug ? link : item.link.url!}
                    target={item.link.newTab ? '_blank' : ''}
                >
                    {item.link.label}
                </Link>
            </li>
        )
    })
}
