'use client'

import type { Company } from 'admin-types'
import useGQLClient from '@requests/base-client'
import { COMPANY_ME_QUERY } from '../queries/me-query'

type Return = {
    meCompany: { user: Company }
}

export function useGetMeCompany() {
    return useGQLClient<Record<string, never>, Return>({
        queryName: 'CompanyMeQuery',
        query: COMPANY_ME_QUERY,
        variables: {},
        loadOnInit: false,
    })
}
