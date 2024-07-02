import { gql } from 'graphql-request'

export const FOOTER_QUERY = gql`
    query Footer($draft: Boolean!, $locale: LocaleInputType) {
        Footer(draft: $draft, locale: $locale) {
            content {
                content
            }
            background {
                background {
                    type
                    color
                    image {
                        id
                        alt
                        url
                        height
                        width
                    }
                }
            }
        }
    }
`
