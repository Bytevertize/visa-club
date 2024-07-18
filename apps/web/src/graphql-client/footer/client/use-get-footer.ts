import type { Footer } from 'admin-types'
import useGQLClient from '@requests/base-client'
import type { FooterParams } from '../types'
import { FOOTER_QUERY } from '../queries/footer-query'

type Props = {
    variables: FooterParams
    loadOnInit?: boolean
}

export function useGetFooter({ variables, loadOnInit }: Props) {
    return useGQLClient<FooterParams, { Footer: Footer }>({
        queryName: 'Footer',
        query: FOOTER_QUERY,
        variables,
        loadOnInit,
    })
}
