import type { Page } from 'admin-types'
import { client } from '../../base-client'
import type { Paginated } from '../../types'
import { PAGE_QUERY, PAGES_QUERY } from './queries'
import type { PageArguments, PaginatedPageArguments } from './types'

export function getPage(variables: PageArguments): Promise<{ Page: Page }> {
    return client.request<{ Page: Page }>(PAGE_QUERY, variables)
}

export function getPages(
    variables: PaginatedPageArguments,
): Promise<{ Pages: Paginated<Page> }> {
    return client.request<{ Pages: Paginated<Page> }>(PAGES_QUERY, variables)
}
