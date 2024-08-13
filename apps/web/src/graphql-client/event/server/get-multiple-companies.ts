'use server'

import type { Event } from 'admin-types'
import { cookies } from 'next/headers'
import { getServerGQLClient } from '@requests/base-server'
import type { Paginated } from '@requests/types'
import { MULTIPLE_EVENTS_QUERY } from '../queries/multiple-events-query'
import type { PaginatedEventArguments } from '../types'

export async function getMultipleEvents(
    variables: PaginatedEventArguments,
): Promise<{ Events: Paginated<Event> }> {
    const client = await getServerGQLClient()
    const cookieStore = cookies()
    const cmsCookieName = cookieStore.get('payload-token')?.name
    const cmsCookieValue = cookieStore.get('payload-token')?.value

    return client.request<{ Events: Paginated<Event> }>(
        MULTIPLE_EVENTS_QUERY,
        variables,
        {
            Cookie: `${cmsCookieName}=${cmsCookieValue}`,
        },
    )
}
