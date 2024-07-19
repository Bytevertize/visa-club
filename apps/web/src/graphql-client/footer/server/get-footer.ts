import type { Footer } from 'admin-types'
import { getServerGQLClient } from '@requests/base-server'
import { FOOTER_QUERY } from '../queries/footer-query'
import type { FooterParams } from '../types'

export async function getFooter(
    variables: FooterParams,
): Promise<{ Footer: Footer }> {
    const client = await getServerGQLClient()

    return client.request<{ Footer: Footer }>(FOOTER_QUERY, variables, {
        'x-draft-token': variables.draft
            ? process.env.PAYLOAD_DRAFT_TOKEN || ''
            : '',
    })
}
