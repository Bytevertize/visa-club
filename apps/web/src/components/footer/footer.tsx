import type { Footer as FooterType } from 'admin-types'
import { Footer as AppFooter } from '@repo/ui'
import type { AllNodes } from '@components/rich-text/types'
import { renderRichTextData } from '@components/rich-text'
import type { Locale } from '@i18n/types'

type FooterProps = {
    data: FooterType
    locale: Locale
}

export function Footer({ data, locale }: FooterProps) {
    return (
        <AppFooter isCentered>
            <div className="flex flex-col px-4 prose-p:mx-1">
                {data.content.content?.root.children.map((node) =>
                    renderRichTextData(node as AllNodes, locale),
                )}
            </div>
        </AppFooter>
    )
}
