// route handler with secret and slug
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Page } from 'admin-types'
import type { Locale } from '@i18n/types'
import { getPages } from '@requests/collections'

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

    const { Pages } = await getPages({
        limit: 0,
        locale,
        draft: true,
        where: { slug: { equals: slug } },
    })

    const page = Pages.docs[0] as Page | undefined

    // If the slug doesn't exist prevent draft mode from being enabled
    if (!page) {
        return new Response('Invalid slug', { status: 401 })
    }

    // Enable Draft Mode by setting the cookie
    draftMode().enable()

    // Redirect to the path from the fetched post
    // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
    redirect(`/draft?slug=${slug}&token=${secret}&locale=${locale}`)
}
