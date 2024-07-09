'use client'
import type { Locale } from './types'

export function changeLanguage() {
    const newLocale = getLocale() === 'bg' ? 'en' : 'bg'
    document.cookie = `${process.env.NEXT_PUBLIC_LANG_COOKIE}=${newLocale}`

    window.location.reload()
}

export function getLocale(): Locale | undefined {
    const regex = new RegExp(
        `${process.env.NEXT_PUBLIC_LANG_COOKIE}=(?<locale>bg|en)`,
    )

    try {
        const match = regex.exec(document.cookie)
        if (match) {
            return match[1] as Locale | undefined
        }
    } catch (_) {
        return undefined
    }
}
