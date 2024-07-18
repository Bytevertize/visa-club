import type { Company } from 'admin-types'
import { getServeverGQLClient } from '@requests/base-server'
import type { Locale } from '@i18n/types'
import { COMPANY_QUERY } from '../queries/company-query'

export async function getCompany(variables: {
    id: string
    locale: Locale
}): Promise<{ Company: Company }> {
    const client = await getServeverGQLClient()

    return client.request<{ Company: Company }>(COMPANY_QUERY, variables)
}
