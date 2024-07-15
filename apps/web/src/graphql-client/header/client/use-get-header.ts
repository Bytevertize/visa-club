import useGQLClient from '@requests/base-client'
import { Header } from 'admin-types'
import { HEADER_QUERY } from '../queries/header-query'
import { HeaderParams } from '../types'

type Props = {
    variables: HeaderParams
    loadOnInit?: boolean
}

export function useGetHeader({ variables, loadOnInit }: Props) {
    return useGQLClient<HeaderParams, { Header: Header }>({
        queryName: 'Header',
        query: HEADER_QUERY,
        variables,
        loadOnInit,
    })
}
