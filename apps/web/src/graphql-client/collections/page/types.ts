import type {
    DateTimeWhereQuery,
    OptionalFieldWhereQuery,
    StringWhereQuery,
} from '@requests/types'

/**
 * Arguments for the Page query
 */
export type PageArguments = {
    /**
     * The ID of the page to fetch
     */
    id: string

    /**
     * If true, fetch the draft version of the page. If false or not
     * provided, fetch the published version.
     */
    draft?: boolean
}

/**
 * Arguments for the Paginated Page query
 */
export type PaginatedPageArguments = {
    /**
     * The maximum number of pages to return 0 can be used to fetch all
     */
    limit: number

    /**
     * The page number to fetch. If not provided, fetch the first page.
     */
    page?: number

    /**
     * If true, fetch the draft version of the pages. If false
     * provided, fetch the published version.
     */
    draft: boolean

    /**
     * The filter to apply to the page results
     */
    where?: PageWhere

    /**
     * Pass the name of a top-level field to sort by that field in ascending order.
     * Prefix the name of the field with a minus symbol ("-") to sort in descending order.
     */
    sort?: string
}

/**
 * The filter to apply to the page results
 */
export type PageWhere = {
    /**
     * The title to search for. If not provided, no filtering is applied.
     */
    title?: StringWhereQuery

    /**
     * The slug to search for. If not provided, no filtering is applied.
     */
    slug?: StringWhereQuery & OptionalFieldWhereQuery

    /**
     * The ID to search for. If not provided, no filtering is applied.
     */
    id?: StringWhereQuery & OptionalFieldWhereQuery

    /**
     * The createdAt value to search for. If not provided, no filtering is applied.
     */
    createdAt?: DateTimeWhereQuery

    /**
     * The updatedAt value to search for. If not provided, no filtering is applied.
     */
    updatedAt?: DateTimeWhereQuery

    /**
     * A logical AND operation on other PageWhere inputs. If not provided, no filtering is applied.
     */
    AND?: PageWhere

    /**
     * A logical OR operation on other PageWhere inputs. If not provided, no filtering is applied.
     */
    OR?: PageWhere
}
