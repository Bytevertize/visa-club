'use client'

import type { Company } from 'admin-types'
import useGQLClient from '@requests/base-client'
import type { Paginated } from '@requests/types'
import type { PaginatedCompanyArguments } from '../types'
import { MULTIPLE_COMPANIES_QUERY } from '../queries/multiple-companies-query'

type Props = {
    loadOnInit?: boolean
    variables: PaginatedCompanyArguments
}

export function useGetMultipleCompanies({ variables, loadOnInit }: Props) {
    return useGQLClient<
        PaginatedCompanyArguments,
        { Comapanies: Paginated<Company> }
    >({
        queryName: 'CompaniesQuery',
        query: MULTIPLE_COMPANIES_QUERY,
        variables,
        loadOnInit,
    })
}
