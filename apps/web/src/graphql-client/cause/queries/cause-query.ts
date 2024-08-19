import { gql } from 'graphql-request'
import { CAUSES_FRAGMENT } from '../fragments/causes-fragment'

export const CAUSE_QUERY = gql`
    query CauseQuery($id: String!, $locale: LocaleInputType!) {
        Cause(id: $id, locale: $locale) {
            ...CauseFrag
        }
    }
    ${CAUSES_FRAGMENT}
`
