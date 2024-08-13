import type { Event } from 'admin-types'
import { getServerGQLClient } from '@requests/base-server'
import type { Locale } from '@i18n/types'
import { EVENT_QUERY } from '../queries/event-query'

export async function getEvent(variables: {
    id: string
    locale: Locale
}): Promise<{ Event: Event }> {
    const client = await getServerGQLClient()

    return client.request<{ Event: Event }>(EVENT_QUERY, variables)
}
