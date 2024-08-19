import { RichTextRenderer } from '@components/rich-text'
import type { Locale } from '@i18n/types'
import type { RootNode } from '@components/rich-text/types'
import { getMultipleCauses } from '@requests/cause'

type Props = {
    params: {
        locale: Locale
        causeName: string
    }
}

export default async function Page({ params: { causeName, locale } }: Props) {
    const {
        Causes: {
            docs: [event],
        },
    } = await getMultipleCauses({
        locale,
        page: 1,
        limit: 1,
        where: { slug: { equals: causeName } },
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
