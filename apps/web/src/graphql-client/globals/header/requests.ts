import type { Header } from 'admin-types'
import { client } from '../../base-client'
import { HEADER_QUERY } from './query'
import type { HeaderParams } from './types'

export async function getHeader(
    variables: HeaderParams,
): Promise<{ Header: Header }> {
    return client.request<{ Header: Header }>(HEADER_QUERY, variables, {
        'x-draft-token': variables.draft
            ? process.env.PAYLOAD_DRAFT_TOKEN || ''
            : '',
    })
}
