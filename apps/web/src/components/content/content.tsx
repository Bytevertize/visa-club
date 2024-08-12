import type { Page, PageSectionBackground } from 'admin-types'
import { RichTextRenderer } from '@components/rich-text'
import type { RootNode } from '@components/rich-text/types'
import type { Locale } from '@i18n/types'

type Props = {
    data: Page
    locale: Locale
}

export function Content({ data, locale }: Props) {
    return (
        <main className="flex-1 flex flex-col items-center overflow-auto max-h-screen">
            {data.pageSections?.map((section) => {
                const bgType = section.background.background?.type
                const image = section.background.background
                    ?.image as PageSectionBackground
                const color = section.background.background?.color

                let backgroundImage = ''
                if (bgType === 'image') {
                    backgroundImage = `url(${`${process.env.NEXT_PUBLIC_CMS_IMAGE_HOSTNAME}${image.url}`})`
                } else if (bgType === 'color' && color) {
                    backgroundImage = color
                }

                return (
                    <div
                        className="flex flex-col items-center w-full bg-no-repeat bg-cover px-12 max-w-[1200px]"
                        key={section.id}
                        style={{
                            backgroundImage,
                        }}
                    >
                        <RichTextRenderer
                            key={section.id}
                            locale={locale}
                            node={section.content.richText?.root as RootNode}
                        />
                    </div>
                )
            })}
        </main>
    )
}
