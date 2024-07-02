import type { Locale } from '@i18n/types'
import { ApplyFormatting } from './format'
import type { HeadingNode } from './types'
import { calcIndent, returnTextAlignmentString } from './utils'

type HeadingProps = {
    node: HeadingNode
    locale: Locale
}

export function Heading({ node, locale }: HeadingProps) {
    const Component = node.tag

    return (
        <Component
            className={returnTextAlignmentString(node.format)}
            dir={node.direction}
            style={{
                paddingInlineStart: calcIndent(node.indent),
            }}
        >
            <ApplyFormatting locale={locale} textNodes={node.children} />
        </Component>
    )
}
