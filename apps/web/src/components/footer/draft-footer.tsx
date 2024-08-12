'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import type { Footer as FooterType } from 'admin-types'
import type { Locale } from '@i18n/types'
import { Footer } from './footer'

type FooterProps = {
    data: FooterType
    locale: Locale
}
export function DraftFooter({ data: initialData, locale }: FooterProps) {
    const { data } = useLivePreview<FooterType>({
        initialData,
        serverURL: process.env.NEXT_PUBLIC_CMS_BASE_ENDPOINT || '',
        depth: 1,
        apiRoute: `${process.env.NEXT_PUBLIC_CMS_BASE_ENDPOINT}/api/globals/footer`,
    })

    return <Footer data={data} locale={locale} />
}
