import { GraphQLClient } from 'graphql-request'

console.log(
    process.env.GRAPHQL_ENDPOINT,
    process.env.NEXT_PUBLIC_PAYLOAD_ENDPOINT,
)
export const client = new GraphQLClient(process.env.GRAPHQL_ENDPOINT || '', {
    errorPolicy: 'all',
})
