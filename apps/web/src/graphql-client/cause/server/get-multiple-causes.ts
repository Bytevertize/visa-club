'use server'

import type { Cause } from 'admin-types'
import { cookies } from 'next/headers'
import { getServerGQLClient } from '@requests/base-server'
import type { Paginated } from '@requests/types'
import { MULTIPLE_CAUSES_QUERY } from '../queries/multiple-causes-query'
import type { PaginatedCauseArguments } from '../types'

export async function getMultipleCauses(
    variables: PaginatedCauseArguments,
): Promise<{ Causes: Paginated<Cause> }> {
    const client = await getServerGQLClient()
    const cookieStore = cookies()
    const cmsCookieName = cookieStore.get('payload-token')?.name
    const cmsCookieValue = cookieStore.get('payload-token')?.value

    return client.request<{ Causes: Paginated<Cause> }>(
        MULTIPLE_CAUSES_QUERY,
        variables,
        {
            Cookie: `${cmsCookieName}=${cmsCookieValue}`,
        },
    )
}
