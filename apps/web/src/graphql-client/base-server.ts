'use server'

import { GraphQLClient } from 'graphql-request'

export async function getServeverGQLClient() {
    return new GraphQLClient(process.env.GRAPHQL_ENDPOINT!, {
        errorPolicy: 'all',
        fetch,
    })
}
