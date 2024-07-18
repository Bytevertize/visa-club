'use client'

import useGQLClient from '@requests/base-client'
import { COMPANY_LOGOUT_MUTATION } from '../mutations/logout-mutation'

type Return = {
    logoutCompany: string
}

export function useLogoutCompany() {
    return useGQLClient<Record<string, never>, Return>({
        queryName: 'CompanyLogoutMutation',
        query: COMPANY_LOGOUT_MUTATION,
        variables: {},
        loadOnInit: false,
    })
}
