'use client'
import useGQLClient from '@requests/base-client'
import { FORGOT_PASSWORD_MUTATION } from '../mutations/forgot-password-mutation'

type Props = {
    email: string
}

type Return = {
    forgotPasswordCompany: boolean
}

export function useForgotPasswordCompany(variables: Props) {
    return useGQLClient<Props, Return>({
        queryName: 'ForgotPasswordMutation',
        query: FORGOT_PASSWORD_MUTATION,
        variables,
        loadOnInit: false,
    })
}
