import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getFooter, getHeader } from '@requests'
import '@repo/ui/styles.css'
import type { Locale } from '@i18n/types'
import { Header, Footer } from '@components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Turborepo',
    description: 'Generated by create turbo',
}

export default async function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode
    params: {
        locale: Locale
    }
}): Promise<Promise<JSX.Element>> {
    const footerData = await getFooter({ locale, draft: false })
    const headerData = await getHeader({ locale, draft: false })

    return (
        <html lang={locale}>
            <body className={inter.className}>
                <Header data={headerData.Header} />
                {children}
                <Footer data={footerData.Footer} />
            </body>
        </html>
    )
}

export function generateStaticParams(): { locale: Locale }[] {
    return [{ locale: 'en' }, { locale: 'bg' }]
}
