import { AuthLinks } from './auth-links'
import { DesktopHeader } from './desktop-header'
import { MobileHeader } from './mobile-header'
import type { HeaderProps } from './types'

export function Header({ data, locale, slug }: HeaderProps) {
    return (
        <>
            <DesktopHeader data={data} locale={locale} slug={slug} />
            <MobileHeader data={data} locale={locale}>
                <AuthLinks locale={locale} />
            </MobileHeader>
        </>
    )
}
