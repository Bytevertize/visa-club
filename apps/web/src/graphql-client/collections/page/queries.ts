import { gql } from 'graphql-request'
import { PAGE_SECTION_FRAGMENT } from './fragments'

export const PAGE_QUERY = gql`
    query PageQuery($id: String!, $draft: Boolean!, $locale: LocaleInputType!) {
        Page(id: $id, draft: $draft, locale: $locale) {
            id
            title
            slug
            pageSections {
                ...PageSection
            }
        }
    }
    ${PAGE_SECTION_FRAGMENT}
`
export const PAGES_QUERY = gql`
    query PagesQuery(
        $limit: Int!
        $page: Int
        $draft: Boolean!
        $sort: String
        $where: Page_where
        $locale: LocaleInputType!
    ) {
        Pages(
            locale: $locale
            limit: $limit
            page: $page
            draft: $draft
            sort: $sort
            where: $where
        ) {
            docs {
                id
                title
                slug
                pageSections {
                    ...PageSection
                }
            }
            offset
            hasNextPage
            hasPrevPage
            nextPage
            prevPage
            totalDocs
        }
    }
    ${PAGE_SECTION_FRAGMENT}
`
