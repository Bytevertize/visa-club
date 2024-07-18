import { NextResponse, type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
    const body = await request.json()

    const cmsResponse = await fetch(
        `${process.env.NEXT_PUBLIC_PAYLOAD_ENDPOINT}/api/company/forgot-password`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: body.email,
            }),
        },
    )

    const nextResponse = NextResponse.redirect('/login', {
        status: 200,
    })

    nextResponse.headers.set(
        'Set-Cookie',
        cmsResponse.headers.get('Set-Cookie') || '',
    )

    return nextResponse
}
