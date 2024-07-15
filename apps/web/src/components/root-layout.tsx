import type { ReactNode } from 'react'
import type { NextFont } from 'next/dist/compiled/@next/font'
import type { Locale } from '@i18n/types'

type Props = {
    children: ReactNode
    font: NextFont
    locale?: Locale
}

export function RootLayout({ locale = 'en', children, font }: Props) {
    return (
        <html data-theme="visa" lang={locale}>
            <body
                className={`${font.className} prose prose-base max-w-none h-screen max-h-screen`}
            >
                {children}
            </body>
        </html>
    )
}
