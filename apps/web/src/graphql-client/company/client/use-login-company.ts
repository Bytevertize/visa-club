'use client'
import type { Company } from 'admin-types'
import useGQLClient from '@requests/base-client'
import { COMPANY_LOGIN_MUTATION } from '../mutations/login-mutation'

type Props = {
    email: string
    password: string
}

type Return = {
    loginCompany: {
        token: string
        exp: number
        user: Company
    }
}

export function useLoginCompany(variables: Props) {
    return useGQLClient<Props, Return>({
        queryName: 'CompanyLoginMutation',
        query: COMPANY_LOGIN_MUTATION,
        variables,
        loadOnInit: false,
    })
}
