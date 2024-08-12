'use server'

import { GraphQLClient } from 'graphql-request'

// eslint-disable-next-line @typescript-eslint/require-await -- This is a server function but won't be marked as such unless it's async
export async function getServerGQLClient() {
    return new GraphQLClient(process.env.CMS_GRAPHQL_ENDPOINT || '', {
        errorPolicy: 'all',
        fetch,
    })
}
