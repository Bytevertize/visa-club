import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import type { Locale } from '@i18n/types'
import { PageTemplate } from '@components'
import { getPages } from '@requests/collections'
import { getFooter, getHeader } from '@requests/globals'

type PageProps = {
    searchParams: { slug: string; token: string; locale: Locale }
}

export default async function Page({
    searchParams: { slug, token, locale },
}: PageProps) {
    const { isEnabled } = draftMode()

    const isHeaderBeingEdited = slug === 'header'
    const isPageBeingEdited = slug !== 'header' && slug !== 'footer'
    const isFooterBeingEdited = slug === 'footer'

    if (isEnabled && token === process.env.PAYLOAD_DRAFT_TOKEN) {
        const { Header: headerData } = await getHeader({
            draft: isHeaderBeingEdited,
            locale,
        })
        const {
            Pages: {
                docs: [pageData],
            },
        } = await getPages({
            limit: 1,
            draft: isPageBeingEdited,
            locale,
            where: {
                slug: {
                    equals: isPageBeingEdited ? slug : 'index',
                },
            },
        })
        const { Footer: footerData } = await getFooter({
            draft: isFooterBeingEdited,
            locale,
        })

        return (
            <PageTemplate
                footerData={footerData}
                headerData={headerData}
                isFooterBeingEdited={isFooterBeingEdited}
                isHeaderBeingEdited={isHeaderBeingEdited}
                isPageBeingEdited={isPageBeingEdited}
                locale={locale}
                pageData={pageData}
                slug={slug}
            />
        )
    }

    notFound()
}
