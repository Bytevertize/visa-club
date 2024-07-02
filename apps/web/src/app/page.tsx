import { PageTemplate } from '@components'
import { getPages } from '@requests/collections'

export default async function Page() {
    const { Pages } = await getPages({
        limit: 1,
        draft: false,
        where: {
            slug: { equals: 'index' },
        },
    })

    return <PageTemplate data={Pages.docs[0]} />
}
