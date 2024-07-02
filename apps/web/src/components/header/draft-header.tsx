'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import type { Header as HeaderType } from 'admin-types'
import { Header } from './header'

type HeaderProps = {
    data: HeaderType
}
export function DraftHeader({ data: initialData }: HeaderProps) {
    const { data } = useLivePreview<HeaderType>({
        initialData,
        serverURL: process.env.NEXT_PUBLIC_PAYLOAD_ENDPOINT || '',
        depth: 2,
    })

    return <Header data={data} />
}
