import { RichTextRenderer } from '@components/rich-text'
import type { Locale } from '@i18n/types'
import { getMultipleEvents } from '@requests/event'
import type { RootNode } from '@components/rich-text/types'

type Props = {
    params: {
        locale: Locale
        eventName: string
    }
}

export default async function Page({ params: { eventName, locale } }: Props) {
    const {
        Events: {
            docs: [event],
        },
    } = await getMultipleEvents({
        locale,
        page: 1,
        limit: 1,
        where: { slug: { equals: eventName } },
    })

    return (
        <div className="px-5 w-[80%]">
            <div className="border-b-2 border-b-blue-100">
                <RichTextRenderer
                    locale={locale}
                    node={event.content?.root as RootNode}
                />
            </div>
        </div>
    )
}
