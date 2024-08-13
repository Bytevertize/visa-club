import { gql } from 'graphql-request'

export const EVENT_FRAGMENT = gql`
    fragment EventFrag on Event {
        id
        name
        slug
        content
    }
`
