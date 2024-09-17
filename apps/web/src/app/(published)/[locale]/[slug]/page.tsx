import type { Metadata } from 'next'
import { PageTemplate } from '@components'
import { getMultiplePages } from '@requests'

type PageProps = {
    params: {
        locale: 'en' | 'bg'
        slug: string
    }
}

export const dynamicParams = false

export async function generateMetadata({
    params: { locale, slug },
}: PageProps): Promise<Metadata> {
    const {
        Pages: {
            docs: [pageData],
        },
    } = await getMultiplePages({
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
    } = await getMultiplePages({
        limit: 1,
        draft: false,
        locale,
        where: { slug: { equals: slug } },
    })

    return <PageTemplate locale={locale} pageData={pageData} slug={slug} />
}

export async function generateStaticParams(args: {
    params: { locale: 'en' | 'bg' }
}) {
    const {
        Pages: { docs },
    } = await getMultiplePages({
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
