import { i18nRouter } from 'next-i18n-router'
import { NextResponse, type NextRequest } from 'next/server'
import { i18nConfig } from '@i18n'

export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.includes('companies')) {
        const cmsCookieValue = request.cookies.get('payload-token')?.value
        const cmsCookieName = request.cookies.get('payload-token')?.name

        if (!cmsCookieValue) {
            return NextResponse.redirect(new URL('/', request.url), {
                status: 302,
            })
        }

        const cmsResponse = await fetch(
            `${process.env.CMS_BASE_ENDPOINT}/api/company/me`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Cookie: `${cmsCookieName}=${cmsCookieValue}`,
                },
            },
        )

        const cmsData = await cmsResponse.json()

        if (!cmsData.token) {
            return NextResponse.redirect(new URL('/', request.url), {
                status: 302,
            })
        }
    }

    return i18nRouter(request, i18nConfig)
}

// only applies this middleware to files in the app directory
export const config = {
    matcher: '/((?!api|static|.*\\..*|_next).*)',
}
