import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import type { Locale } from '@i18n/types'
import { DraftFooter, DraftHeader, DraftTemplate } from '@components'
import { getPages } from '@requests/collections'
import { getFooter, getHeader } from '@requests/globals'

type PageProps = {
    searchParams: { slug: 'string'; token: string; locale: Locale }
}

export default async function Page({
    searchParams: { slug, token, locale },
}: PageProps) {
    const { isEnabled } = draftMode()

    if (isEnabled && token === process.env.PAYLOAD_DRAFT_TOKEN) {
        const { Header: headerData } = await getHeader({ draft: true, locale })
        const {
            Pages: {
                docs: [pageData],
            },
        } = await getPages({
            limit: 1,
            draft: true,
            locale,
            where: {
                slug: {
                    equals: slug,
                },
            },
        })
        const { Footer: footerData } = await getFooter({ draft: true, locale })

        return (
            <>
                <DraftHeader data={headerData} />
                <DraftTemplate data={pageData} />
                <DraftFooter data={footerData} />
            </>
        )
    }

    notFound()
}
