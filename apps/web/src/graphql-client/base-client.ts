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

export default function useGQLClient<
    TVar extends Record<string, any>,
    TReturn,
>({ variables, loadOnInit = false, queryName, query }: Props<TVar>) {
    const [{ data, error, loading }, setState] = useState<State<TReturn>>({
        data: null,
        error: null,
        loading: Boolean(loadOnInit),
    })

    const call = useCallback(
        async function call(fetchVariables?: Props<TVar>['variables']) {
            try {
                setState((prevState) => ({
                    ...prevState,
                    error: null,
                    loading: true,
                }))

                const response = await GQLClient(query, {
                    operationName: queryName,
                    variables: fetchVariables || variables,
                    draft: variables.draft,
                })

                const _data: TReturn = await response.json()

                setState((prev) => ({ ...prev, data: _data }))

                return _data
            } catch (e) {
                setState((prev) => ({ ...prev, error: JSON.stringify(e) }))
            } finally {
                setState((prev) => ({ ...prev, loading: false }))
            }
        },
        [query, queryName, variables],
    )

    useEffect(() => {
        if (loadOnInit) {
            void call()
        }
    }, [call, loadOnInit])

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
            'x-draft-token': draft ? process.env.PAYLOAD_DRAFT_TOKEN || '' : '',
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
