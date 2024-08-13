'use client'

import type { Event } from 'admin-types'
import useGQLClient from '@requests/base-client'
import { EVENT_QUERY } from '../queries/event-query'
import type { EventArguments } from '../types'

type Props = {
    variables: EventArguments
    loadOnInit?: boolean
}

export function useGetEvent({ variables, loadOnInit }: Props) {
    return useGQLClient<EventArguments, { Event: Event }>({
        queryName: 'EventQuery',
        query: EVENT_QUERY,
        variables,
        loadOnInit,
    })
}
