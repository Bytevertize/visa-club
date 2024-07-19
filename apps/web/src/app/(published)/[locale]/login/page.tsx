import { LoginForm } from '@components/forms/login'
import type { Locale } from '@i18n/types'

type Props = {
    params: {
        locale: Locale
    }
}

export default function Page({ params: { locale } }: Props) {
    return <LoginForm locale={locale} />
}
