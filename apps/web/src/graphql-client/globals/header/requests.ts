import type { Header } from 'admin-types'
import { client } from '../../base-client'
import { HEADER_QUERY } from './query'

export async function getHeader(): Promise<{ Header: Header }> {
    return client.request<{ Header: Header }>(HEADER_QUERY)
}
