import type { ResolvingMetadata, Metadata } from 'next'
import { PageTemplate } from '@components'
import { getFooter, getHeader, getPages } from '@requests'

type PageProps = {
    params: {
        locale: 'en' | 'bg'
        slug: string
    }
}

export const dynamicParams = false

export async function generateMetadata(
    { params: { locale, slug } }: PageProps,
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
            slug: { equals: slug },
        },
    })

    return {
        title: pageData.meta?.title,
        description: pageData.meta?.description,
    }
}

export default async function Page({
    params: { slug, locale },
}: PageProps): Promise<JSX.Element> {
    const {
        Pages: {
            docs: [pageData],
        },
    } = await getPages({
        limit: 1,
        draft: false,
        locale,
        where: { slug: { equals: slug } },
    })

    const { Footer: footerData } = await getFooter({ locale, draft: false })
    const { Header: headerData } = await getHeader({ locale, draft: false })

    return (
        <PageTemplate
            footerData={footerData}
            headerData={headerData}
            locale={locale}
            pageData={pageData}
            slug={slug}
        />
    )
}

export async function generateStaticParams(args: {
    params: { locale: 'en' | 'bg' }
}) {
    const {
        Pages: { docs },
    } = await getPages({
        limit: 0,
        draft: false,
        locale: args.params.locale,
    })
    return docs.reduce<{ slug: string }[]>((acc, { slug }) => {
        if (slug && slug !== 'index') {
            acc.push({ slug })
        }

        return acc
    }, [])
}
