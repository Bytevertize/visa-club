import { gql } from 'graphql-request'
import { COMPANY_FRAGMENT } from '../fragments/company-fragment'

export const COMPANY_ME_QUERY = gql`
    query CompanyMeQuery {
        meCompany {
            exp
            token
            user {
                ...Comp
            }
        }
    }
    ${COMPANY_FRAGMENT}
`
