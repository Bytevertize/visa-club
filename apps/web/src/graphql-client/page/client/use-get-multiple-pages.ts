'use client'

import { PaginatedPageArguments } from '../types'
import useGQLClient from '@requests/base-client'
import { Page } from 'admin-types'
import { MULTIPLE_PAGES_QUERY } from '../queries/multiple-pages-query'
import { Paginated } from '@requests/types'

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
