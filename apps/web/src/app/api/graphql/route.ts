import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()

        const gqlResponse = await fetch(process.env.GRAPHQL_ENDPOINT!, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: body.query,
                variables: body.variables,
                operationName: body.operationName,
            }),
        })

        return NextResponse.json(await gqlResponse.json())
    } catch (e) {
        return NextResponse.error()
    }
}
