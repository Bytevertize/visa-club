import { gql } from 'graphql-request'

export const PAGE_SECTION_FRAGMENT = gql`
    fragment PageSection on Page_PageSections {
        id
        content {
            richText
        }
        animationSettings {
            onEnter
            onLeave
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
`
