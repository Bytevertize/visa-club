import { gql } from 'graphql-request'
import { PAGE_SECTION_FRAGMENT } from './fragments'

export const PAGE_QUERY = gql`
    query PageQuery($id: String!, $draft: Boolean!) {
        Page(id: $id, draft: $draft) {
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
    ) {
        Pages(
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
