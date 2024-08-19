'use client'

import type { Cause } from 'admin-types'
import useGQLClient from '@requests/base-client'
import { CAUSE_QUERY } from '../queries/cause-query'
import type { CauseArguments } from '../types'

type Props = {
    variables: CauseArguments
    loadOnInit?: boolean
}

export function useGetCause({ variables, loadOnInit }: Props) {
    return useGQLClient<CauseArguments, { Cause: Cause }>({
        queryName: 'CauseQuery',
        query: CAUSE_QUERY,
        variables,
        loadOnInit,
    })
}
