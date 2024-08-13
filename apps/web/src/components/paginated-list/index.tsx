'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Loading } from '@repo/ui'
import type { Locale } from '@i18n/types'
import { ListItem } from './list-item'
import type { Item } from './types'

type Props<T extends Item> = {
    items: Item[]
    locale: Locale
    loadMore: (page: number) => Promise<T[]>
}
export function PaginatedList<T extends Item>({
    items: propItems,
    locale,
    loadMore,
}: Props<T>) {
    const [items, setItems] = useState(propItems)
    const [page, setPage] = useState(2)
    const [loadMoreItems, setLoadMoreItems] = useState(true)

    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView && loadMoreItems) {
            void (async () => {
                const newItems = await loadMore(page)
                if (newItems.length === 0) {
                    setLoadMoreItems(false)
                }
                setPage((prevState) => prevState + 1)
                setItems((prevState) => [...prevState, ...newItems])
            })()
        }
    }, [inView, loadMore, loadMoreItems, page])

    return (
        <div className="w-[80%] mx-auto mb-10 max-h-full">
            <ul className="p-0 max-h-full">
                {items.map((item) => (
                    <ListItem item={item} key={item.id} locale={locale} />
                ))}

                {loadMoreItems ? (
                    <li className="flex items-center" ref={ref}>
                        <Loading className="mx-auto" size="lg" variant="bars" />
                    </li>
                ) : null}
            </ul>
        </div>
    )
}
