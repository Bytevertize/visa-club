import type { Footer } from 'admin-types'
import { FOOTER_QUERY } from '../queries/footer-query'
import { FooterParams } from '../types'
import { getServeverGQLClient } from '@requests/base-server'

export async function getFooter(
    variables: FooterParams,
): Promise<{ Footer: Footer }> {
    const client = await getServeverGQLClient()

    return client.request<{ Footer: Footer }>(FOOTER_QUERY, variables, {
        'x-draft-token': variables.draft
            ? process.env.PAYLOAD_DRAFT_TOKEN || ''
            : '',
    })
}
