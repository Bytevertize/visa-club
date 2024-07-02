'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import type { Footer as FooterType } from 'admin-types'
import { Footer } from './footer'

type FooterProps = {
    data: FooterType
}
export function DraftFooter({ data: initialData }: FooterProps) {
    const { data } = useLivePreview<FooterType>({
        initialData,
        serverURL: process.env.NEXT_PUBLIC_PAYLOAD_ENDPOINT || '',
        depth: 2,
    })

    return <Footer data={data} />
}
