'use client'

import { useCurrentLocale } from 'next-i18n-router/client'
import { i18nConfig } from '@i18n/config'
import translation from './translations.json'

export function LogoutForm() {
    const locale = useCurrentLocale(i18nConfig)
    const submitText = locale
        ? translation[locale as keyof typeof translation].submit
        : 'Submit'

    return (
        <form action="/api/logout-company" method="POST">
            <button type="submit">{submitText}</button>
        </form>
    )
}
