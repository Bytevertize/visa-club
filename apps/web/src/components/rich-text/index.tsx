import { uuid as uuidv4 } from 'uuidv4'
import { Fragment } from 'react'
import type { Locale } from '@i18n/types'
import { List } from './render-list'
import { Heading } from './render-text/headings'
import { Text } from './render-text/text'
import type { AllNodes, LayoutContainerNode, RootNode } from './types'
import { Divider } from './render-divider'
import { RichTextImage } from './render-image'

type Props = {
    node: RootNode
    locale: Locale
}

export function renderRichTextData(node: AllNodes, locale: Locale) {
    switch (node.type) {
        case 'heading':
            return <Heading locale={locale} node={node} />
        case 'paragraph':
            return <Text locale={locale} node={node} />
        case 'list':
            return <List locale={locale} node={node} />
        case 'layout-container':
            return <Layout locale={locale} node={node} />
        case 'horizontalrule':
            return <Divider node={node} />
        case 'upload':
            return <RichTextImage node={node} />
        default:
            return null
    }
}

export function RichTextRenderer({ node, locale }: Props) {
    return node.children.map((childNode) => (
        <Fragment key={uuidv4()}>
            {renderRichTextData(childNode, locale)}
        </Fragment>
    ))
}

type LayoutProps = {
    node: LayoutContainerNode
    locale: Locale
}

function Layout({ node, locale }: LayoutProps) {
    return (
        <>
            <div
                className="gap-4 hidden w-full lg:grid prose-headings:text-secondary"
                style={{ gridTemplateColumns: node.templateColumns }}
            >
                {node.children.map((childNode) => {
                    return (
                        <div key={uuidv4()}>
                            {childNode.children.map((leaf) => (
                                <Fragment key={uuidv4()}>
                                    {renderRichTextData(leaf, locale)}
                                </Fragment>
                            ))}
                        </div>
                    )
                })}
            </div>
            <div
                className="grid w-full lg:hidden prose-headings:text-secondary"
                style={{ gridTemplateRows: node.templateColumns }}
            >
                {node.children.map((childNode) => {
                    return (
                        <div className="h-fit" key={uuidv4()}>
                            {childNode.children.map((leaf) => (
                                <Fragment key={uuidv4()}>
                                    {renderRichTextData(leaf, locale)}
                                </Fragment>
                            ))}
                        </div>
                    )
                })}
            </div>
        </>
    )
}
