'use server'

import type { Company } from 'admin-types'
import { cookies } from 'next/headers'
import { getServerGQLClient } from '@requests/base-server'
import { COMPANY_ME_QUERY } from '@requests/company/queries/me-query'

export async function getMeCompany(): Promise<Company | null> {
    const cookieStore = cookies()
    const client = await getServerGQLClient()
    const payloadCookie = cookieStore.get('payload-token')

    const {
        meCompany: { user },
    } = await client.request<{ meCompany: { user: Company } }>(
        COMPANY_ME_QUERY,
        {},
        {
            Cookie: `${payloadCookie?.name}=${payloadCookie?.value}`,
        },
    )

    return user
}
