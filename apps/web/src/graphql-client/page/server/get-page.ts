import { Page } from 'admin-types'
import { PageArguments } from '../types'
import { PAGE_QUERY } from '../queries/page-query'
import { getServeverGQLClient } from '@requests/base-server'

export async function getPage(
    variables: PageArguments,
): Promise<{ Page: Page }> {
    const client = await getServeverGQLClient()

    return client.request<{ Page: Page }>(PAGE_QUERY, variables, {
        'x-draft-token': variables.draft
            ? process.env.PAYLOAD_DRAFT_TOKEN!
            : '',
    })
}
