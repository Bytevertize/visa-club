'use server'

import type { Company } from 'admin-types'
import { cookies } from 'next/headers'
import { getServerGQLClient } from '@requests/base-server'
import type { Paginated } from '@requests/types'
import { MULTIPLE_COMPANIES_QUERY } from '../queries/multiple-companies-query'
import type { PaginatedCompanyArguments } from '../types'

export async function getMultipleCompanies(
    variables: PaginatedCompanyArguments,
): Promise<{ Companies: Paginated<Company> }> {
    const client = await getServerGQLClient()
    const cookieStore = cookies()
    const cmsCookieName = cookieStore.get('payload-token')?.name
    const cmsCookieValue = cookieStore.get('payload-token')?.value

    return client.request<{ Companies: Paginated<Company> }>(
        MULTIPLE_COMPANIES_QUERY,
        variables,
        {
            Cookie: `${cmsCookieName}=${cmsCookieValue}`,
        },
    )
}
