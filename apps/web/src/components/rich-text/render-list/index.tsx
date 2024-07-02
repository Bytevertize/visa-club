import { uuid as uuidv4 } from 'uuidv4'
import type { Locale } from '@i18n/types'
import { ApplyFormatting } from '../render-text/format'
import type { BulletListNode, ListNode, OrderedListNode } from './type'

type Props = {
    node: ListNode
    locale: Locale
}

export function List({ node, locale }: Props) {
    switch (node.listType) {
        case 'bullet':
            return <UnorderedList locale={locale} node={node} />
        case 'number':
            return <Ordered locale={locale} node={node} />
        case 'check':
        default:
            return null
    }
}

type UnorderedProps = {
    node: BulletListNode
    locale: Locale
}

export function UnorderedList({ node, locale }: UnorderedProps) {
    return (
        <ul>
            {node.children.map((listItem) => {
                return (
                    <li key={uuidv4()}>
                        {listItem.children.map((item) => {
                            switch (item.type) {
                                case 'text':
                                    return (
                                        <ApplyFormatting
                                            key={uuidv4()}
                                            locale={locale}
                                            textNodes={[item]}
                                        />
                                    )
                                case 'list':
                                    return (
                                        <List
                                            key={uuidv4()}
                                            locale={locale}
                                            node={item}
                                        />
                                    )
                                default:
                                    return null
                            }
                        })}
                    </li>
                )
            })}
        </ul>
    )
}

type OrderedProps = {
    node: OrderedListNode
    locale: Locale
}

export function Ordered({ node, locale }: OrderedProps) {
    return (
        <ol>
            {node.children.map((listItem) => {
                return (
                    <li key={uuidv4()}>
                        {listItem.children.map((item) => {
                            switch (item.type) {
                                case 'text':
                                    return (
                                        <ApplyFormatting
                                            key={uuidv4()}
                                            locale={locale}
                                            textNodes={[item]}
                                        />
                                    )
                                case 'list':
                                    return (
                                        <List
                                            key={uuidv4()}
                                            locale={locale}
                                            node={item}
                                        />
                                    )
                                default:
                                    return null
                            }
                        })}
                    </li>
                )
            })}
        </ol>
    )
}
