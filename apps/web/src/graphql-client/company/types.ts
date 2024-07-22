import type { Locale } from '@i18n/types'
import type {
    StringWhereQuery,
    OptionalFieldWhereQuery,
    DateTimeWhereQuery,
} from '@requests/types'

/**
 * Arguments for the Company query
 */
export type CompanyArguments = {
    /**
     * The ID of the company to fetch
     */
    id: string

    /**
     * The locale of the company to fetch.
     */
    locale: Locale
}

/**
 * Arguments for the Paginated Company query
 */
export type PaginatedCompanyArguments = {
    /**
     * The locale of the company to fetch.
     */
    locale: Locale
    /**
     * The maximum number of pages to return 0 can be used to fetch all
     */
    limit: number

    /**
     * The page number to fetch. If not provided, fetch the first page.
     */
    page?: number

    /**
     * The filter to apply to the page results
     */
    where?: CompanyWhere

    /**
     * Pass the name of a top-level field to sort by that field in ascending order.
     * Prefix the name of the field with a minus symbol ("-") to sort in descending order.
     */
    sort?: string
}
export type CompanyWhere = {
    /**
     * The name to search for. If not provided, no filtering is applied.
     */
    name?: StringWhereQuery

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
     *
     * A logical AND operation on other PageWhere inputs. If not provided, no filtering is applied.
     */
    AND?: CompanyWhere

    /**
     * A logical OR operation on other PageWhere inputs. If not provided, no filtering is applied.
     */
    OR?: CompanyWhere
}
