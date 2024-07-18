import { gql } from 'graphql-request'
import { COMPANY_FRAGMENT } from '../fragments/company-fragment'

export const MULTIPLE_COMPANIES_QUERY = gql`
    query CompaniesQuery(
        $limit: Int!
        $page: Int
        $sort: String
        $where: Company_where
        $locale: LocaleInputType!
    ) {
        Companies(
            locale: $locale
            limit: $limit
            page: $page
            sort: $sort
            where: $where
        ) {
            docs {
                ...Comp
            }
            offset
            hasNextPage
            hasPrevPage
            nextPage
            prevPage
            totalDocs
        }
    }
    ${COMPANY_FRAGMENT}
`
