import { gql } from 'graphql-request'

export const HEADER_QUERY = gql`
    query Header($draft: Boolean!, $locale: LocaleInputType) {
        Header(draft: $draft, locale: $locale) {
            navItems {
                items {
                    link {
                        type
                        newTab
                        url
                        label
                    }
                    id
                }
                itemsToShow
            }
            logo {
                image {
                    id
                    alt
                    url
                    width
                    height
                }
                hideOnHomepage
            }
            background {
                background {
                    type
                    color
                    image {
                        id
                        alt
                        url
                        width
                        height
                    }
                }
            }
        }
    }
`
