import type { Company } from 'admin-types'
import { RichTextRenderer } from '@components/rich-text'
import type { RootNode } from '@components/rich-text/types'
import type { Locale } from '@i18n/types'

type Props = {
    item: Company
    locale: Locale
}

export function ListItem({ item, locale }: Props) {
    return (
        <li className="flex flex-col lg:flex-row w-full  gap-10 my-4 p-4 pb-8 pl-0 border-b-2 border-b-blue-100 self-start">
            <h2 className="my-0 uppercase text-white">{item.name}</h2>
            <div className="min-w-0 w-full lg:w-[70%] line-clamp-4 lg:line-clamp-2 not-prose">
                <RichTextRenderer
                    locale={locale}
                    node={item.content?.root as RootNode}
                />
            </div>
            <button className="btn btn-primary" type="button">
                Read More {`>>`}
            </button>
        </li>
    )
}
