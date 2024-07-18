'use client'

import { useCurrentLocale } from 'next-i18n-router/client'
import Link from 'next/link'
import { i18nConfig } from '@i18n/config'
import translation from './translations.json'
import { loginAction } from './action'

export function LoginForm() {
    const locale = useCurrentLocale(i18nConfig)
    const emailText = locale
        ? translation[locale as keyof typeof translation].email
        : 'Email'

    const passwordText = locale
        ? translation[locale as keyof typeof translation].password
        : 'Password'

    const forgotPassword = locale
        ? translation[locale as keyof typeof translation]['forgot-password']
        : 'Back to Login'

    const buttonText = locale
        ? translation[locale as keyof typeof translation].submit
        : 'Submit'

    return (
        <form action={void loginAction}>
            <input
                id="emailLoginField"
                name="emailLoginField"
                placeholder={emailText}
                required
                type="email"
            />
            <input
                id="passwordLoginField"
                name="passwordLoginField"
                placeholder={passwordText}
                required
                type="password"
            />
            <Link href={`/${locale}/forgot-password`}>{forgotPassword}</Link>
            <button type="submit">{buttonText}</button>
        </form>
    )
}
