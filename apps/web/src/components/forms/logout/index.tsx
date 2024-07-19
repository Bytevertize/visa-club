'use client'

import type { Locale } from '@i18n/types'
import translation from './translations.json'

type Props = {
    locale: Locale
}

export function LogoutForm({ locale }: Props) {
    const submitText = translation[locale as keyof typeof translation].submit

    return (
        <form action="/api/logout-company" method="POST">
            <button className="btn btn-ghost" type="submit">
                {submitText}
            </button>
        </form>
    )
}
