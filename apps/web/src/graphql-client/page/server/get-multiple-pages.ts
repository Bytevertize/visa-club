import { Page } from 'admin-types'
import { PaginatedPageArguments } from '../types'
import { Paginated } from '@requests/types'
import { getServeverGQLClient } from '@requests/base-server'
import { MULTIPLE_PAGES_QUERY } from '../queries/multiple-pages-query'

export async function getMultiplePages(
    variables: PaginatedPageArguments,
): Promise<{ Pages: Paginated<Page> }> {
    const client = await getServeverGQLClient()

    return client.request<{ Pages: Paginated<Page> }>(
        MULTIPLE_PAGES_QUERY,
        variables,
        {
            'x-draft-token': variables.draft
                ? process.env.PAYLOAD_DRAFT_TOKEN!
                : '',
        },
    )
}
