import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import type { Locale } from '@i18n/types'
import { PageTemplate } from '@components'
import { getFooter, getHeader, getMultiplePages } from '@requests'

type PageProps = {
    params: { locale: Locale; slug: string }
    searchParams: { token: string }
}

export default async function Page({
    params: { locale, slug },
    searchParams: { token },
}: PageProps) {
    const { isEnabled } = draftMode()

    const isHeaderBeingEdited = slug === 'header'
    const isFooterBeingEdited = slug === 'footer'
    const isPageBeingEdited = !(isHeaderBeingEdited || isFooterBeingEdited)

    if (isEnabled && token === process.env.PAYLOAD_DRAFT_TOKEN) {
        const { Header: headerData } = await getHeader({
            draft: isHeaderBeingEdited,
            locale,
        })

        const {
            Pages: {
                docs: [pageData],
            },
        } = await getMultiplePages({
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
