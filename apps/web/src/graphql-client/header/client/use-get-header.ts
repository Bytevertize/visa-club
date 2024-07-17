import type { Header } from 'admin-types'
import useGQLClient from '@requests/base-client'
import { HEADER_QUERY } from '../queries/header-query'
import type { HeaderParams } from '../types'

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
