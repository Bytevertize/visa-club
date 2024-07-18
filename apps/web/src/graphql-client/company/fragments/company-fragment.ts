import { gql } from 'graphql-request'

export const COMPANY_FRAGMENT = gql`
    fragment Comp on Company {
        id
        slug
        content
        logo {
            id
            alt
            url
        }
        contactPerson {
            contactPersonName
            contactPersonTitle
            phoneNumber
            contactEmail
        }
    }
`
