import type { ResolvingMetadata, Metadata } from 'next'
import { PageTemplate } from '@components'
import { getPages } from '@requests/collections'

type PageProps = {
    params: {
        locale: 'en' | 'bg'
    }
}

export async function generateMetadata(
    { params: { locale } }: PageProps,
    _parent: ResolvingMetadata,
): Promise<Metadata> {
    const {
        Pages: {
            docs: [pageData],
        },
    } = await getPages({
        limit: 1,
        locale,
        draft: false,
        where: {
            slug: { equals: 'index' },
        },
    })

    return {
        title: pageData.meta?.title,
        description: pageData.meta?.description,
    }
}

export default async function Page({ params: { locale } }: PageProps) {
    const {
        Pages: {
            docs: [pageData],
        },
    } = await getPages({
        limit: 1,
        locale,
        draft: false,
        where: {
            slug: { equals: 'index' },
        },
    })

    return <PageTemplate data={pageData} />
}
