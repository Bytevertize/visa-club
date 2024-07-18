import { gql } from 'graphql-request'

export const COMPANY_LOGOUT_MUTATION = gql`
    mutation CompanyLogoutMutation {
        logoutCompany
    }
`
