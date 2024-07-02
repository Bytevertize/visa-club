'use client'

import type { Locale } from '@i18n/types'
import { changeLanguage } from '@i18n/utils'

type Props = {
    children: string
    locale: Locale
}

export function ChangeLang({ children, locale }: Props) {
    return (
        <button
            onClick={() => {
                changeLanguage(locale)
            }}
            type="button"
        >
            {children}
        </button>
    )
}
