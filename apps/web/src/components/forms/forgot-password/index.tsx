'use client'
import { useCurrentLocale } from 'next-i18n-router/client'
import Link from 'next/link'
import { i18nConfig } from '@i18n/config'
import translation from './translations.json'

export function ForgotPassword() {
    const locale = useCurrentLocale(i18nConfig)
    const emailText = locale
        ? translation[locale as keyof typeof translation].email
        : 'Email'

    const buttonText = locale
        ? translation[locale as keyof typeof translation].submit
        : 'Submit'

    const backToLoginText = locale
        ? translation[locale as keyof typeof translation].backToLogin
        : 'Back to Login'

    return (
        <form action="api/forgot-password-company" method="POST">
            <input
                id="forgotPasswordEmailInput"
                name="forgotPasswordEmailInput"
                placeholder={emailText}
                type="email"
            />
            <button type="submit">{buttonText}</button>
            <Link href="/login">{backToLoginText}</Link>
        </form>
    )
}
