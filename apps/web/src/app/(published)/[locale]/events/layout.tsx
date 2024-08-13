import { Divider } from '@repo/ui'
import type { PropsWithChildren } from 'react'
import type { Locale } from '@i18n/types'

export default function Layout({
    children,
    params: { locale },
}: PropsWithChildren<{ params: { locale: Locale } }>) {
    // TODO: Unify Layouts at some point
    return (
        <main className="flex-1 flex flex-col items-center overflow-auto max-h-screen">
            <Divider className="w-[80%] mx-auto" variant="ghost">
                {locale === 'bg' ? 'Събития' : 'Events'}
            </Divider>
            {/* TODO: Company Search */}
            {/* <CompanySearchForm locale={locale} /> */}
            {children}
        </main>
    )
}
