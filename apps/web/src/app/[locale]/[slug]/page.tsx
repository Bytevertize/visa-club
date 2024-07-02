import { PageTemplate } from '@components'
import { getPages } from '@requests'

type PageProps = {
    params: {
        locale: 'en' | 'bg'
        slug: string
    }
}

export default async function Page({
    params: { slug, locale },
}: PageProps): Promise<JSX.Element> {
    const { Pages } = await getPages({
        limit: 1,
        draft: false,
        locale,
        where: { slug: { equals: slug } },
    })

    return <PageTemplate data={Pages.docs[0]} />
}

export async function generateStaticParams() {
    const { Pages } = await getPages({ limit: 0, draft: false, locale: 'bg' })

    return Pages.docs.reduce<{ slug: string }[]>((acc, { slug }) => {
        if (slug && slug !== 'index') {
            acc.push({ slug })
        }

        return acc
    }, [])
}
