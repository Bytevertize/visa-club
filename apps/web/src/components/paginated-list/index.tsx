import type { Company } from 'admin-types'
import type { Locale } from '@i18n/types'
import { ListItem } from './list-item'

type Props = {
    items: Company[]
    locale: Locale
}
export function PaginatedList({ items, locale }: Props) {
    return (
        <div className="w-[80%] mx-auto mb-10 max-h-full">
            <form>
                <input id="" name="" type="text" />
            </form>
            <ul className="p-0 max-h-full">
                {items.map((item) => (
                    <ListItem item={item} key={item.id} locale={locale} />
                ))}
            </ul>
        </div>
    )
}
