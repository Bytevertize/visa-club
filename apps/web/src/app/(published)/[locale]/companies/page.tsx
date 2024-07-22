import { PaginatedList } from '@components/paginated-list'
import type { Locale } from '@i18n/types'
import { getMultipleCompanies } from '@requests/company'

type Props = {
    params: {
        locale: Locale
    }
}

export default async function Page({ params: { locale } }: Props) {
    const nesh = await getMultipleCompanies({
        locale,
        page: 1,
        limit: 10,
        sort: 'asc',
    })

    return <PaginatedList items={nesh.Companies.docs} locale={locale} />
}
