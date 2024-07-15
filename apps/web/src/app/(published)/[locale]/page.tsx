import type { ResolvingMetadata, Metadata } from 'next'
import { PageTemplate } from '@components'
import { getFooter, getHeader, getMultiplePages } from '@requests'

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
    } = await getMultiplePages({
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
    } = await getMultiplePages({
        limit: 1,
        locale,
        draft: false,
        where: {
            slug: { equals: 'index' },
        },
    })

    const { Footer: footerData } = await getFooter({ locale, draft: false })
    const { Header: headerData } = await getHeader({ locale, draft: false })

    return (
        <PageTemplate
            footerData={footerData}
            headerData={headerData}
            locale={locale}
            pageData={pageData}
            slug="index"
        />
    )
}
