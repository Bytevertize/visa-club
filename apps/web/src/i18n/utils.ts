'use client'
import type { Locale } from './types'

export function changeLanguage(locale: Locale) {
    const newLocale = locale === 'bg' ? 'en' : 'bg'
    document.cookie = `${process.env.NEXT_PUBLIC_LANG_COOKIE}=${newLocale}`

    const [domain, slug] = window.location.href.split(/en|bg/)

    window.location.href = `${domain}/${newLocale}${slug ? `/${slug}` : ''}`
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
