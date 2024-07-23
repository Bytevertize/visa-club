'use client'

import type { Locale } from '@i18n/types'
import translation from './translations.json'

type Props = {
    locale: Locale
    isMobile: boolean
}

export function LogoutForm({ locale, isMobile }: Props) {
    const submitText = translation[locale as keyof typeof translation].submit

    return (
        <form
            action="/api/logout-company"
            className={isMobile ? 'w-full' : ''}
            method="POST"
        >
            <button type="submit">{submitText}</button>
        </form>
    )
}
