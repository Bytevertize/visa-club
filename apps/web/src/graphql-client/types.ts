/**
 * A paginated result with metadata
 */
export type Paginated<T> = {
    /**
     * The documents for the current page
     */
    docs: T[]
    /**
     * The index of the first document in the current page, or null if no
     * documents were returned
     */
    offset: number | null
    /**
     * Whether there is a page after the current page
     */
    hasNextPage: boolean
    /**
     * Whether there is a page before the current page
     */
    hasPrevPage: boolean
    /**
     * The index of the next page, or null if there is no next page
     */
    nextPage: number | null
    /**
     * The index of the previous page, or null if there is no previous page
     */
    prevPage: number | null
    /**
     * The total number of documents in all pages
     */
    totalDocs: number
}

/**
 * A query for a field that supports string comparisons
 */
export type BaseWhereQuery<T> = {
    /**
     * The exact value to match
     */
    equals?: T
    /**
     * The value to exclude from matching
     */
    not_equals?: T
    /**
     * The values to match at least one of
     */
    like?: T[]
}

/**
 * A query for a field that supports string searches
 */
export type StringWhereQuery = BaseWhereQuery<string> & {
    /**
     * Whether the field contains the given substring
     */
    contains?: string
    /**
     * Whether the field exactly matches one of the given values
     */
    in?: string[]
    /**
     * Whether the field does not exactly match any of the given values
     */
    not_in?: string[]
    /**
     * Whether the field matches all of the given values
     */
    all?: string[]
}

/**
 * A query for a field that supports date and time comparisons
 */
export type DateTimeWhereQuery = BaseWhereQuery<string> & {
    /**
     * Whether the field occurs after the given time
     */
    greater_than?: string
    /**
     * Whether the field occurs on or after the given time
     */
    greater_than_equal?: string
    /**
     * Whether the field occurs before the given time
     */
    less_than?: string
    /**
     * Whether the field occurs on or before the given time
     */
    less_than_equal?: string
}

/**
 * A query for a field that may or may not be present
 */
export type OptionalFieldWhereQuery = {
    /**
     * Whether the field exists
     */
    exists?: boolean
}

export type Locale = 'en' | 'bg'
