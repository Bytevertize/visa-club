import { LogoutForm } from '@components/forms/logout'
import type { Locale } from '@i18n/types'
import { getMeCompany } from '@requests/company'
import { HeaderLink } from './link'

type Props = {
    locale: Locale
}
export async function AuthLinks({ locale }: Props) {
    const company = await getMeCompany()

    return company ? (
        <LogoutForm locale={locale} />
    ) : (
        <HeaderLink href="/login" label="Login" target="_self" />
    )
}
