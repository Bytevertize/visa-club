import { gql } from 'graphql-request'
import { COMPANY_FRAGMENT } from '../fragments/company-fragment'

export const COMPANY_QUERY = gql`
    query CompanyQuery($id: String!, $locale: LocaleInputType!) {
        Company(id: $id, locale: $locale) {
            ...Comp
        }
    }
    ${COMPANY_FRAGMENT}
`
