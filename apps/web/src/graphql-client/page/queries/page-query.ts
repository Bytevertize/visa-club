import { gql } from 'graphql-request'
import { PAGE_SECTION_FRAGMENT } from '../fragments/page-section'

export const PAGE_QUERY = gql`
    query PageQuery($id: String!, $draft: Boolean!, $locale: LocaleInputType!) {
        Page(id: $id, draft: $draft, locale: $locale) {
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
    }

    ${PAGE_SECTION_FRAGMENT}
`
