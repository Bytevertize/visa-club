import { PageTemplate } from '@components'
import { getPages } from '@requests/collections'

type PageProps = {
    params: {
        locale: 'en' | 'bg'
    }
}

export default async function Page({ params: { locale } }: PageProps) {
    const { Pages } = await getPages({
        limit: 1,
        locale,
        draft: false,
        where: {
            slug: { equals: 'index' },
        },
    })

    return <PageTemplate data={Pages.docs[0]} />
}
