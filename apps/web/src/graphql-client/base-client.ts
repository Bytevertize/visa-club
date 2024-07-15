'use client'

import { useCallback, useEffect, useState } from 'react'

type Props<T extends Record<string, any>> = {
    query: string
    loadOnInit?: boolean
    queryName: string
    variables: T
}

type State<T> = {
    error: null | string
    data: T | null
    loading: boolean
}

/**
 * Custom hook to fetch data from GraphQL server.
 *
 * @param {string} props.query - GraphQL query
 * @param {string} props.queryName - GraphQL query name
 * @param {boolean} [props.loadOnInit=false] - Toggle if data should be fetched when the hook is mounted
 * @param {Record<string, any>} props.variables - Variables for the query
 * @returns {State<TReturn> & {call: (fetchVariables?: Props<TVar>['variables']) => Promise<void>}} State and call function
 */
export default function useGQLClient<
    TVar extends Record<string, any>,
    TReturn,
>({ variables, loadOnInit = false, queryName, query }: Props<TVar>) {
    const [{ data, error, loading }, setState] = useState<State<TReturn>>({
        data: null,
        error: null,
        loading: Boolean(loadOnInit),
    })

    /**
     * Call the GraphQL server.
     *
     * @param {Props<TVar>['variables']} [fetchVariables] - Variables for the query
     * @return {Promise<TReturn>} Promise that resolves when the data is fetched
     */
    const call = useCallback(async function (
        fetchVariables?: Props<TVar>['variables'],
    ) {
        try {
            setState((prev) => ({ ...prev, loading: true }))

            const response = await GQLClient(query, {
                operationName: queryName,
                variables: fetchVariables || variables,
                draft: variables.draft,
            })

            const data: TReturn = await response.json()

            setState((prev) => ({ ...prev, data: data }))

            return data
        } catch (e) {
            setState((prev) => ({ ...prev, error: JSON.stringify(e) }))
        } finally {
            setState((prev) => ({ ...prev, loading: false }))
        }
    }, [])

    useEffect(() => {
        if (loadOnInit) {
            call()
        }
    }, [loadOnInit])

    return {
        data,
        error,
        loading,
        call,
    }
}

type Args = {
    operationName: string
    variables: Record<string, any>
    headers?: Record<string, string>
    draft?: boolean
}
function GQLClient(
    query: string,
    { operationName, variables, headers, draft }: Args,
) {
    return fetch('/api/graphql', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'x-draft-token': draft ? process.env.PAYLOAD_DRAFT_TOKEN! : '',
            'Content-Type': 'application/json',
            ...headers,
        },
        body: JSON.stringify({
            query,
            variables,
            operationName,
        }),
    })
}
