import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const cookieStore = cookies()
        const payloadTokenCookie = cookieStore.get('payload-token')
        const body = await req.json()

        const gqlResponse = await fetch(process.env.GRAPHQL_ENDPOINT || '', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                Cookie: `payload-token=${payloadTokenCookie?.value}`,
            },
            body: JSON.stringify({
                query: body.query,
                variables: body.variables,
                operationName: body.operationName,
            }),
        })

        const response = NextResponse.json(await gqlResponse.json())

        response.headers.set(
            'Set-Cookie',
            gqlResponse.headers.get('Set-Cookie') || '',
        )

        return response
    } catch (e) {
        return NextResponse.error()
    }
}
