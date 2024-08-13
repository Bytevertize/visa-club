'use client'

import type { Event } from 'admin-types'
import useGQLClient from '@requests/base-client'
import type { Paginated } from '@requests/types'
import type { PaginatedEventArguments } from '../types'
import { MULTIPLE_EVENTS_QUERY } from '../queries/multiple-events-query'

type Props = {
    loadOnInit?: boolean
    variables: PaginatedEventArguments
}

export function useGetMultipleEvents({ variables, loadOnInit }: Props) {
    return useGQLClient<PaginatedEventArguments, { Events: Paginated<Event> }>({
        queryName: 'EventsQuery',
        query: MULTIPLE_EVENTS_QUERY,
        variables,
        loadOnInit,
    })
}
