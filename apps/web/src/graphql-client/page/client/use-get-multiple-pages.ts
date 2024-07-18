'use client'

import type { Page } from 'admin-types'
import useGQLClient from '@requests/base-client'
import type { Paginated } from '@requests/types'
import type { PaginatedPageArguments } from '../types'
import { MULTIPLE_PAGES_QUERY } from '../queries/multiple-pages-query'

type Props = {
    loadOnInit?: boolean
    variables: PaginatedPageArguments
}

export function useGetMultiplePages({ variables, loadOnInit }: Props) {
    return useGQLClient<PaginatedPageArguments, { Pages: Paginated<Page> }>({
        queryName: 'PageQuery',
        query: MULTIPLE_PAGES_QUERY,
        variables,
        loadOnInit,
    })
}
