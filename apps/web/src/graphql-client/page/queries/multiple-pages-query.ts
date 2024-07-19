import { gql } from 'graphql-request'
import { PAGE_SECTION_FRAGMENT } from '../fragments/page-section'

export const MULTIPLE_PAGES_QUERY = gql`
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
                # image {
                #     id
                #     alt
                #     url
                # }
                pageSections {
                    ...PageSection
                }
                meta {
                    title
                    description
                    image {
                        id
                        alt
                        sizes {
                            facebook {
                                url
                                width
                                height
                            }
                            twitter {
                                url
                                width
                                height
                            }
                            featured {
                                url
                                width
                                height
                            }
                        }
                    }
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
