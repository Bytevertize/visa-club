import { NextResponse } from 'next/server'

export async function POST() {
    const cmsResponse = await fetch(
        `${process.env.NEXT_PUBLIC_PAYLOAD_ENDPOINT}/api/company/logout`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    )

    const nextResponse = NextResponse.redirect('/', {
        status: 200,
    })

    nextResponse.headers.set(
        'Set-Cookie',
        cmsResponse.headers.get('Set-Cookie') || '',
    )

    return nextResponse
}
