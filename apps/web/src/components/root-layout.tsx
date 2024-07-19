import type { ReactNode } from 'react'
import type { NextFont } from 'next/dist/compiled/@next/font'
import Image from 'next/image'
import type { Footer as FooterType, Header as HeaderType } from 'admin-types'
import type { Locale } from '@i18n/types'
import pageBg from '../../public/page-background.jpg'
import { Header } from './header'
import { Footer } from './footer'
import { PageWrapper } from './page-template/page-wrapper'

type Props = {
    children: ReactNode
    font: NextFont
    locale?: Locale
    headerData?: HeaderType
    footerData?: FooterType
}

export function RootLayout({
    locale = 'en',
    children,
    font,
    footerData,
    headerData,
}: Props) {
    return (
        <html data-theme="visa" lang={locale}>
            <body
                className={`${font.className} prose prose-base max-w-none h-screen max-h-screen`}
                style={{ background: 'transparent' }}
            >
                <div className="fixed h-screen w-screen overflow-hidden z-[-1]">
                    <Image
                        alt="Page Background"
                        fill
                        placeholder="blur"
                        quality={100}
                        sizes="100vw"
                        src={pageBg}
                        style={{
                            objectFit: 'cover',
                            margin: 0,
                        }}
                    />
                </div>
                <PageWrapper>
                    {headerData ? (
                        <Header data={headerData} locale={locale} slug="" />
                    ) : null}
                    {children}
                    {footerData ? (
                        <Footer data={footerData} locale={locale} />
                    ) : null}
                </PageWrapper>
            </body>
        </html>
    )
}
