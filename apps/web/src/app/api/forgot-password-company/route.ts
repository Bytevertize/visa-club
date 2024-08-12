import { NextResponse, type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
    const formData = await request.formData()
    const email = formData.get('forgotPasswordEmailInput')

    const cmsResponse = await fetch(
        `${process.env.CMS_BASE_ENDPOINT}/api/company/forgot-password`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
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
