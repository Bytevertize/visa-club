import { gql } from 'graphql-request'
import { EVENT_FRAGMENT } from '../fragments/event-fragment'

export const MULTIPLE_EVENTS_QUERY = gql`
    query EventsQuery(
        $limit: Int!
        $page: Int
        $sort: String
        $where: Event_where
        $locale: LocaleInputType!
    ) {
        Events(
            locale: $locale
            limit: $limit
            page: $page
            sort: $sort
            where: $where
        ) {
            docs {
                ...EventFrag
            }
            offset
            hasNextPage
            hasPrevPage
            nextPage
            prevPage
            totalDocs
        }
    }
    ${EVENT_FRAGMENT}
`
