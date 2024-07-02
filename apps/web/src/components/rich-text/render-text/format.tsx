/* eslint-disable no-bitwise -- Weird way that facebook handles this https://vscode.dev/github.com/facebook/lexical/blob/main/packages/lexical/src/nodes/LexicalTextNode.ts#L99-L124*/
import { uuid as uuidv4 } from 'uuidv4'
import { type DetailedHTMLProps, type HTMLAttributes } from 'react'
import Link from 'next/link'
import type { Locale } from '@i18n/types'
import {
    IS_BOLD,
    IS_CODE,
    IS_HIGHLIGHT,
    IS_ITALIC,
    IS_SUBSCRIPT,
    IS_SUPERSCRIPT,
    IS_UNDERLINE,
    IS_STRIKETHROUGH,
} from './constants'
import type { LineBreakNode, LinkNode, TabNode, TextNode } from './types'

type TagProps = {
    node?: TextNode | LineBreakNode | TabNode
    format: number
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

type TextProps = {
    textNodes: (TextNode | LinkNode)[]
    locale: Locale
}

export function ApplyFormatting({ textNodes, locale }: TextProps) {
    return textNodes.map((textNode) => {
        switch (textNode.type) {
            case 'autolink':
            case 'link': {
                const url =
                    textNode.fields.linkType === 'custom'
                        ? textNode.fields.url
                        : `/${locale}/${textNode.fields.doc.value.slug}`

                return (
                    <Link
                        className={`${
                            textNode.fields.variant === 'button' &&
                            'btn btn-secondary h-7 min-h-7 text-primary rounded-md'
                        }`}
                        href={url}
                        key={uuidv4()}
                        target={textNode.fields.newTab ? '_blank' : ''}
                    >
                        <ApplyFormatting
                            locale={locale}
                            textNodes={textNode.children}
                        />
                    </Link>
                )
            }
            case 'text':
            default: {
                const hasUnderline = textNode.format & IS_UNDERLINE
                const hasStrikethrough = textNode.format & IS_STRIKETHROUGH

                const className = `${hasUnderline ? 'underline' : ''} ${
                    hasStrikethrough ? 'line-through' : ''
                }`

                return (
                    <OuterTag format={textNode.format} key={uuidv4()}>
                        <InnerTag
                            className={className}
                            format={textNode.format}
                            node={textNode}
                        >
                            {textNode.text}
                        </InnerTag>
                    </OuterTag>
                )
            }
        }
    })
}

function OuterTag({ format, children, ...props }: TagProps) {
    if (format & IS_CODE) {
        return (
            <code spellCheck={false} {...props}>
                {children}
            </code>
        )
    }
    if (format & IS_HIGHLIGHT) {
        return <mark {...props}>{children}</mark>
    }
    if (format & IS_SUBSCRIPT) {
        return <sub {...props}>{children}</sub>
    }
    if (format & IS_SUPERSCRIPT) {
        return <sup {...props}>{children}</sup>
    }
    return <>{children}</>
}

function InnerTag({ format, node, className, ...props }: TagProps) {
    const style = `${
        node?.type === 'tab' ? 'whitespace-pre-wrap break-words' : ''
    } ${className}`

    if (node?.type === 'linebreak') {
        return <br />
    }

    if (format & IS_BOLD) {
        return (
            <strong
                className={`${format & IS_ITALIC ? 'italic' : ''} ${style}`}
                {...props}
            />
        )
    }

    if (format & IS_ITALIC) {
        return <em className={style} {...props} />
    }

    return <span className={style} {...props} />
}
