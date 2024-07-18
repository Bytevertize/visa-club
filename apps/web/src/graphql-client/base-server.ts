'use server'

import { GraphQLClient } from 'graphql-request'

// eslint-disable-next-line @typescript-eslint/require-await -- This is a server function but won't be marked as such unless it's async
export async function getServeverGQLClient() {
    return new GraphQLClient(process.env.GRAPHQL_ENDPOINT || '', {
        errorPolicy: 'all',
        fetch,
    })
}
