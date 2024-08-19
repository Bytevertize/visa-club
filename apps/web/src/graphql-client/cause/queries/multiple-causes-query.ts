import { gql } from 'graphql-request'
import { CAUSES_FRAGMENT } from '../fragments/causes-fragment'

export const MULTIPLE_CAUSES_QUERY = gql`
    query CausesQuery(
        $limit: Int!
        $page: Int
        $sort: String
        $where: Cause_where
        $locale: LocaleInputType!
    ) {
        Causes(
            locale: $locale
            limit: $limit
            page: $page
            sort: $sort
            where: $where
        ) {
            docs {
                ...CauseFrag
            }
            offset
            hasNextPage
            hasPrevPage
            nextPage
            prevPage
            totalDocs
        }
    }
    ${CAUSES_FRAGMENT}
`
