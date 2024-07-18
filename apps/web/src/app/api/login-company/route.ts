import { NextResponse, type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
    const formData = await request.formData()
    const password = formData.get('passwordLoginField')
    const email = formData.get('emailLoginField')

    const cmsResponse = await fetch(
        `${process.env.NEXT_PUBLIC_PAYLOAD_ENDPOINT}/api/company/login`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        },
    )

    const nextResponse = NextResponse.redirect(new URL('/', request.url), {
        status: 302,
    })

    nextResponse.headers.set(
        'Set-Cookie',
        cmsResponse.headers.get('Set-Cookie') || '',
    )

    return nextResponse
}
