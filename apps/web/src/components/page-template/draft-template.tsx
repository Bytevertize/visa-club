'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import type { Page } from 'admin-types'
import { PageTemplate } from './page-template'

type PageProps = {
    data: Page
}
export function DraftTemplate({ data: initialData }: PageProps) {
    const { data } = useLivePreview<Page>({
        initialData,
        serverURL: process.env.NEXT_PUBLIC_PAYLOAD_ENDPOINT || '',
        depth: 2,
    })

    return <PageTemplate data={data} />
}
