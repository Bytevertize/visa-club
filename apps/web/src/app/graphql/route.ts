import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const gqlResponse = await fetch(process.env.GRAPHQL_ECHO_ENDPOINT!, {
        method: 'POST',
        credentials: 'include',
        body: req.body,
    })

    return NextResponse.json(await gqlResponse.json())
}
