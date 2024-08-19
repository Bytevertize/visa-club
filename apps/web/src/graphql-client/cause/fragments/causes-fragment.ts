import { gql } from 'graphql-request'

export const CAUSES_FRAGMENT = gql`
    fragment CauseFrag on Cause {
        id
        name
        slug
        content
    }
`
