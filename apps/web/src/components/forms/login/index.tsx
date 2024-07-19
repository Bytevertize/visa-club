'use client'

// import Link from 'next/link'
import { UserCircleIcon, LockClosedIcon } from '@heroicons/react/16/solid'
import type { Locale } from '@i18n/types'
import translation from './translations.json'

type Props = {
    locale: Locale
}

export function LoginForm({ locale }: Props) {
    const emailText = translation[locale as keyof typeof translation].email

    const passwordText =
        translation[locale as keyof typeof translation].password

    // const forgotPassword =
    //     translation[locale as keyof typeof translation]['forgot-password']

    const buttonText = translation[locale as keyof typeof translation].submit

    return (
        <form
            action="/api/login-company"
            className="flex-1 flex flex-col overflow-auto max-h-screen w-full gap-2 items-center px-5 py-5 mx-auto max-w-[400px]"
            method="POST"
        >
            <label className="flex items-center gap-2 input input-bordered input-ghost bg-transparent min-w-[200px] w-full">
                {emailText}
                <UserCircleIcon className="h-4 w-4 opacity-70 z-[-1]" />
                <input
                    className=""
                    id="emailLoginField"
                    name="emailLoginField"
                    required
                    type="email"
                />
            </label>

            <label className="flex items-center gap-2 input input-bordered input-ghost bg-transparent min-w-[200px] w-full">
                {passwordText}
                <LockClosedIcon className="h-4 w-4 opacity-70 z-[-1]" />
                <input
                    id="passwordLoginField"
                    name="passwordLoginField"
                    required
                    type="password"
                />
            </label>
            {/* <Link href={`/${locale}/forgot-password`}>{forgotPassword}</Link> */}
            <button
                className="btn btn-primary min-w-[200px] w-full"
                type="submit"
            >
                {buttonText}
            </button>
        </form>
    )
}
