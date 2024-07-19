import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const cookieStore = cookies()
    const cmsResponse = await fetch(
        `${process.env.NEXT_PUBLIC_PAYLOAD_ENDPOINT}/api/company/logout`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    )

    const nextResponse = NextResponse.redirect(new URL('/', request.url), {
        status: 302,
    })

    nextResponse.headers.set(
        'Set-Cookie',
        cmsResponse.headers.get('set-cookie') || '',
    )
    cookieStore.delete('payload-token')

    return nextResponse
}
