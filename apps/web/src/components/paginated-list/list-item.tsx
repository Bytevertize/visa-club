import Link from 'next/link'
import { RichTextRenderer } from '@components/rich-text'
import type { RootNode } from '@components/rich-text/types'
import type { Locale } from '@i18n/types'
import type { Item } from './types'

type Props = {
    item: Item
    hrefBase: string
    locale: Locale
}

export function ListItem({ item, locale, hrefBase }: Props) {
    return (
        <li className="flex flex-col lg:flex-row w-full  gap-10 my-4 p-4 pb-8 pl-0 border-b-2 border-b-blue-100 self-start items-center">
            <h2 className="my-0 uppercase text-white w-3/12">{item.name}</h2>

            <div className="min-w-0 w-full lg:w-[70%] line-clamp-3 not-prose">
                <RichTextRenderer
                    locale={locale}
                    node={item.content?.root as RootNode}
                />
            </div>
            <Link
                className="btn btn-primary"
                href={`/${hrefBase}/${item.slug}`}
                type="button"
            >
                {locale === 'en' ? 'Read More >>' : 'Прочети Още >>'}
            </Link>
        </li>
    )
}
