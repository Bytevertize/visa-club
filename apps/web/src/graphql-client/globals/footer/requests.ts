import type { Footer } from 'admin-types'
import { client } from '../../base-client'
import { FOOTER_QUERY } from './query'

export function getFooter(): Promise<Footer> {
    return client.request<Footer>(FOOTER_QUERY)
}
