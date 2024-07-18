import type { Company } from 'admin-types'
import { getServeverGQLClient } from '@requests/base-server'
import type { Paginated } from '@requests/types'
import { MULTIPLE_COMPANIES_QUERY } from '../queries/multiple-companies-query'
import type { PaginatedCompanyArguments } from '../types'

export async function getMultipleCompanies(
    variables: PaginatedCompanyArguments,
): Promise<{ Companies: Paginated<Company> }> {
    const client = await getServeverGQLClient()

    return client.request<{ Companies: Paginated<Company> }>(
        MULTIPLE_COMPANIES_QUERY,
        variables,
    )
}
