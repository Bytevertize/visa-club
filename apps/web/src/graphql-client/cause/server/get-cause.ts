import type { Cause } from 'admin-types'
import { getServerGQLClient } from '@requests/base-server'
import type { Locale } from '@i18n/types'
import { CAUSE_QUERY } from '../queries/cause-query'

export async function getEvent(variables: {
    id: string
    locale: Locale
}): Promise<{ Cause: Cause }> {
    const client = await getServerGQLClient()

    return client.request<{ Cause: Cause }>(CAUSE_QUERY, variables)
}
