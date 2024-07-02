'use client'
import type { Locale } from './types'

export function changeLanguage(locale: Locale) {
    document.cookie = `${process.env.NEXT_PUBLIC_LANG_COOKIE}=${
        locale === 'bg' ? 'en' : 'bg'
    }`
    window.location.reload()
}

export function getLocale(): Locale | undefined {
    const regex = /LANGUAGE=(?<locale>bg|en)/

    try {
        const match = regex.exec(document.cookie)
        if (match) {
            return match[1] as Locale | undefined
        }
    } catch (_) {
        return undefined
    }
}
