'use client'

import type { Company } from 'admin-types'
import useGQLClient from '@requests/base-client'
import { COMPANY_QUERY } from '../queries/company-query'
import type { CompanyArguments } from '../types'

type Props = {
    variables: CompanyArguments
    loadOnInit?: boolean
}

export function useGetCopmpany({ variables, loadOnInit }: Props) {
    return useGQLClient<CompanyArguments, { Company: Company }>({
        queryName: 'CompanyQuery',
        query: COMPANY_QUERY,
        variables,
        loadOnInit,
    })
}
