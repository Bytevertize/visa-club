import type { BlockNode } from './render-blocks/types'
import type { DividerNode } from './render-divider/types'
import type { ImageNode } from './render-image/types'
import type { ListNode } from './render-list/type'
import type {
    Direction,
    HeadingNode,
    LinkNode,
    ParagraphNode,
    TextNode,
} from './render-text/types'

export type AllNodes =
    | ListNode
    | TextNode
    | HeadingNode
    | ParagraphNode
    | LayoutContainerNode
    | LayoutItemNode
    | DividerNode
    | ImageNode
    | LinkNode
    | BlockNode

export type RootNode = {
    type: 'root'
    format: ''
    indent: 0
    version: number
    children: AllNodes[]
    direction: Direction
}

export type LayoutContainerNode = {
    direction: null
    format: ''
    indent: number
    type: 'layout-container'
    version: number
    templateColumns: string
    children: LayoutItemNode[]
}

export type LayoutItemNode = {
    children: AllNodes[]
    direction: null
    format: ''
    indent: number
    type: 'layout-item'
    version: number
}
