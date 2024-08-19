import { PaginatedList } from '@components/paginated-list'
import type { Locale } from '@i18n/types'
import { getMultipleCompanies } from '@requests/company'

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
    const companies = await getMultipleCompanies({
        locale,
        page: Number(page),
        limit: 10,
        sort: 'asc',
    })

    async function loadMore(nextPage: number) {
        'use server'
        const response = await getMultipleCompanies({
            locale,
            page: nextPage,
            limit: 10,
            sort: 'asc',
        })
        return response.Companies.docs
    }

    return (
        <PaginatedList
            hrefBase="companies"
            items={companies.Companies.docs}
            loadMore={loadMore}
            locale={locale}
        />
    )
}
