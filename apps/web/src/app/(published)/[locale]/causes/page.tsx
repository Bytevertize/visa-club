import { PaginatedList } from '@components/paginated-list'
import type { Locale } from '@i18n/types'
import { getMultipleCauses } from '@requests/cause'

type Props = {
    params: {
        locale: Locale
    }
    searchParams: {
        page: number
    }
}

export default async function Page({
    params: { locale },
    searchParams: { page = 1 },
}: Props) {
    const causes = await getMultipleCauses({
        locale,
        page: Number(page),
        limit: 10,
        sort: 'asc',
    })

    async function loadMore(nextPage: number) {
        'use server'
        const response = await getMultipleCauses({
            locale,
            page: nextPage,
            limit: 10,
            sort: 'asc',
        })
        return response.Causes.docs
    }

    return (
        <PaginatedList
            hrefBase="causes"
            items={causes.Causes.docs}
            loadMore={loadMore}
            locale={locale}
        />
    )
}
