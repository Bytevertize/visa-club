'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import type { Page } from 'admin-types'
import type { Locale } from '@i18n/types'
import { Content } from './content'

type Props = {
    data: Page
    locale: Locale
}

export function DraftContent({ data: initialData, locale }: Props) {
    const { data } = useLivePreview<Page>({
        initialData,
        serverURL: process.env.NEXT_PUBLIC_PAYLOAD_ENDPOINT || '',
        depth: 1,
        apiRoute: `${process.env.NEXT_PUBLIC_PAYLOAD_ENDPOINT}/api/pages/${initialData.id}`,
    })

    return <Content data={data} locale={locale} />
}
