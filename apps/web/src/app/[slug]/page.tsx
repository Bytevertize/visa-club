import { PageTemplate } from '@components'
import { getPages } from '@requests'

export default async function Page({
    params: { slug },
}: {
    params: { slug: string }
}): Promise<JSX.Element> {
    const { Pages } = await getPages({
        limit: 1,
        draft: false,
        where: { slug: { equals: slug } },
    })

    return <PageTemplate data={Pages.docs[0]} />
}

export async function generateStaticParams() {
    const { Pages } = await getPages({ limit: 0, draft: false })

    return Pages.docs.reduce<{ slug: string }[]>((acc, { slug }) => {
        if (slug && slug !== 'index') {
            acc.push({ slug })
        }

        return acc
    }, [])
}
