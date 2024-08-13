import { PaginatedList } from '@components/paginated-list'
import type { Locale } from '@i18n/types'
import { getMultipleEvents } from '@requests/event'

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
    const events = await getMultipleEvents({
        locale,
        page: Number(page),
        limit: 10,
        sort: 'asc',
    })

    async function loadMore(nextPage: number) {
        'use server'
        const response = await getMultipleEvents({
            locale,
            page: nextPage,
            limit: 10,
            sort: 'asc',
        })
        return response.Events.docs
    }

    return (
        <PaginatedList
            hrefBase="events"
            items={events.Events.docs}
            loadMore={loadMore}
            locale={locale}
        />
    )
}
