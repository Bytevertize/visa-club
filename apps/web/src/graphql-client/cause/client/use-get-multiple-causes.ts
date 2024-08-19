'use client'

import type { Cause } from 'admin-types'
import useGQLClient from '@requests/base-client'
import type { Paginated } from '@requests/types'
import type { PaginatedCauseArguments } from '../types'
import { MULTIPLE_CAUSES_QUERY } from '../queries/multiple-causes-query'

type Props = {
    loadOnInit?: boolean
    variables: PaginatedCauseArguments
}

export function useGetMultipleCauses({ variables, loadOnInit }: Props) {
    return useGQLClient<PaginatedCauseArguments, { Causes: Paginated<Cause> }>({
        queryName: 'CausesQuery',
        query: MULTIPLE_CAUSES_QUERY,
        variables,
        loadOnInit,
    })
}
