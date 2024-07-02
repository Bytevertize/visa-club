import type { Footer } from 'admin-types'
import { client } from '../../base-client'
import { FOOTER_QUERY } from './query'
import type { FooterParams } from './types'

export function getFooter(
    variables: FooterParams,
): Promise<{ Footer: Footer }> {
    return client.request<{ Footer: Footer }>(FOOTER_QUERY, variables, {
        'x-draft-token': variables.draft
            ? process.env.PAYLOAD_DRAFT_TOKEN || ''
            : '',
    })
}
