import { gql } from 'graphql-request'
import { COMPANY_FRAGMENT } from '../fragments/company-fragment'

export const COMPANY_LOGIN_MUTATION = gql`
    mutation CompanyLoginMutation($email: String, $password: String) {
        loginCompany(email: $email, password: $password) {
            token
            exp
            user {
                ...Comp
            }
        }
    }
    ${COMPANY_FRAGMENT}
`
