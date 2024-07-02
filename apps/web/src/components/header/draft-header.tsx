'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import type { Header as HeaderType } from 'admin-types'
import type { Locale } from '@i18n/types'
import { Header } from './header'

type HeaderProps = {
    data: HeaderType
    locale: Locale
    slug: string
}
export function DraftHeader({ data: initialData, locale, slug }: HeaderProps) {
    const { data } = useLivePreview<HeaderType>({
        initialData,
        serverURL: process.env.NEXT_PUBLIC_PAYLOAD_ENDPOINT || '',
        depth: 0,
        apiRoute: `${process.env.NEXT_PUBLIC_PAYLOAD_ENDPOINT}/api/globals/header`,
    })

    return <Header data={data} locale={locale} slug={slug} />
}
