import type { Config } from 'next-i18n-router/dist/types'

export const i18nConfig: Config = {
    locales: ['en', 'bg'],
    prefixDefault: true,
    defaultLocale: 'bg',
    serverSetCookie: 'never',
    localeCookie: process.env.NEXT_PUBLIC_LANG_COOKIE || 'NEXT_LOCALE',
}
