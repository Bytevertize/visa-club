import { gql } from 'graphql-request'
import { EVENT_FRAGMENT } from '../fragments/event-fragment'

export const EVENT_QUERY = gql`
    query EventQuery($id: String!, $locale: LocaleInputType!) {
        Event(id: $id, locale: $locale) {
            ...EventFrag
        }
    }
    ${EVENT_FRAGMENT}
`
