import { LogoutForm } from '@components/forms/logout'
import type { Locale } from '@i18n/types'
import { getMeCompany } from '@requests/company'
import { HeaderLink } from './link'

type Props = {
    locale: Locale
    isMobile?: boolean
}
export async function AuthLinks({ locale, isMobile = false }: Props) {
    const company = await getMeCompany()

    return company ? (
        <>
            <HeaderLink
                href="/companies"
                isMobile={isMobile}
                label={locale === 'bg' ? 'Компании' : 'Companies'}
                target="_self"
            />
            {/* TODO: Add on seperate branch */}
            <HeaderLink
                href="/events"
                isMobile={isMobile}
                label={locale === 'bg' ? 'Събития' : 'Events'}
                target="_self"
            />
            <li
                className={`p-0  ${
                    isMobile
                        ? 'w-full py-2 border-b border-white-400 focus:color-yellow-400'
                        : 'border-b border-transparent hover:border-yellow-400'
                }`}
            >
                <LogoutForm isMobile={isMobile} locale={locale} />
            </li>
        </>
    ) : (
        <HeaderLink
            href="/login"
            label={locale === 'bg' ? 'Вход' : 'Login'}
            target="_self"
        />
    )
}
