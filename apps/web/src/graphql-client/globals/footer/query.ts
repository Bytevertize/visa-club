import { gql } from 'graphql-request'

export const FOOTER_QUERY = gql`
    query Footer {
        Footer {
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
