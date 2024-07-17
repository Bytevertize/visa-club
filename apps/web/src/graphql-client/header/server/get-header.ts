import type { Header } from 'admin-types'
import { getServeverGQLClient } from '@requests/base-server'
import { HEADER_QUERY } from '../queries/header-query'
import type { HeaderParams } from '../types'

export async function getHeader(
    variables: HeaderParams,
): Promise<{ Header: Header }> {
    const client = await getServeverGQLClient()

    return client.request<{ Header: Header }>(HEADER_QUERY, variables, {
        'x-draft-token': variables.draft
            ? process.env.PAYLOAD_DRAFT_TOKEN || ''
            : '',
    })
}
