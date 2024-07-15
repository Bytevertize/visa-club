// route handler with secret and slug
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Locale } from '@i18n/types'
import { getFooter, getHeader, getMultiplePages } from '@requests'

export async function GET(request: Request) {
    // Parse query string parameters
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret')
    const slug = searchParams.get('slug')
    const locale = searchParams.get('locale') as Locale
    // Check the secret and next parameters
    // This secret should only be known to this route handler and the CMS
    if (secret !== process.env.PAYLOAD_DRAFT_TOKEN || !slug) {
        return new Response('Invalid token', { status: 401 })
    }

    const isEditingHeader = slug === 'header'
    const isEditingFooter = slug === 'footer'

    let data
    if (isEditingHeader) {
        const { Header } = await getHeader({ draft: true, locale })

        data = Header
    } else if (isEditingFooter) {
        const { Footer } = await getFooter({ draft: true, locale })

        data = Footer
    } else {
        const {
            Pages: {
                docs: [pageData],
            },
        } = await getMultiplePages({
            limit: 1,
            draft: true,
            locale,
            where: {
                slug: {
                    equals: slug,
                },
            },
        })

        data = pageData
    }

    // If the slug doesn't exist prevent draft mode from being enabled
    if (!data as unknown as typeof data | undefined) {
        return new Response('Invalid slug', { status: 401 })
    }

    // Enable Draft Mode by setting the cookie
    draftMode().enable()

    // TODO:
    // Redirect to the path from the fetched post
    // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
    redirect(`/${locale}/draft/${slug}?token=${secret}`)
}
