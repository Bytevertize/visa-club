'use client'

import type { Page } from 'admin-types'
import useGQLClient from '@requests/base-client'
import type { PageArguments } from '../types'
import { PAGE_QUERY } from '../queries/page-query'

type Props = {
    loadOnInit?: boolean
    variables: PageArguments
}

export function useGetPage({ variables, loadOnInit }: Props) {
    return useGQLClient<PageArguments, { Page: Page }>({
        queryName: 'PageQuery',
        query: PAGE_QUERY,
        variables,
        loadOnInit,
    })
}
