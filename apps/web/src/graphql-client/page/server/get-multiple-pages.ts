import type { Page } from 'admin-types'
import type { Paginated } from '@requests/types'
import { getServerGQLClient } from '@requests/base-server'
import type { PaginatedPageArguments } from '../types'
import { MULTIPLE_PAGES_QUERY } from '../queries/multiple-pages-query'

export async function getMultiplePages(
    variables: PaginatedPageArguments,
): Promise<{ Pages: Paginated<Page> }> {
    const client = await getServerGQLClient()

    return client.request<{ Pages: Paginated<Page> }>(
        MULTIPLE_PAGES_QUERY,
        variables,
        {
            'x-draft-token': variables.draft
                ? process.env.PAYLOAD_DRAFT_TOKEN || ''
                : '',
        },
    )
}
