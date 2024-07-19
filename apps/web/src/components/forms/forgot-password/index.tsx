'use client'
import Link from 'next/link'
import type { Locale } from '@i18n/types'
import translation from './translations.json'

type Props = {
    locale: Locale
}

export function ForgotPasswordForm({ locale }: Props) {
    const emailText = translation[locale as keyof typeof translation].email

    const buttonText = translation[locale as keyof typeof translation].submit

    const backToLoginText =
        translation[locale as keyof typeof translation].backToLogin

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
