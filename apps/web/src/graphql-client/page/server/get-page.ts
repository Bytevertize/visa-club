import type { Page } from 'admin-types'
import { getServerGQLClient } from '@requests/base-server'
import type { PageArguments } from '../types'
import { PAGE_QUERY } from '../queries/page-query'

export async function getPage(
    variables: PageArguments,
): Promise<{ Page: Page }> {
    const client = await getServerGQLClient()

    return client.request<{ Page: Page }>(PAGE_QUERY, variables, {
        'x-draft-token': variables.draft
            ? process.env.PAYLOAD_DRAFT_TOKEN || ''
            : '',
    })
}
