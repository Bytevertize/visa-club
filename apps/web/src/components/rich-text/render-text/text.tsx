import type { Locale } from '@i18n/types'
import { ApplyFormatting } from './format'
import type { ParagraphNode } from './types'
import { calcIndent, returnTextAlignmentString } from './utils'

type TextProps = {
    node: ParagraphNode
    locale: Locale
}

export function Text({ node, locale }: TextProps) {
    return (
        <p
            className={returnTextAlignmentString(node.format)}
            dir={node.direction}
            style={{
                paddingInlineStart: calcIndent(node.indent),
            }}
        >
            <ApplyFormatting locale={locale} textNodes={node.children} />
        </p>
    )
}
