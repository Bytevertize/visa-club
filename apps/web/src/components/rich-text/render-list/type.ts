import type { Direction, TextNode } from '../render-text/types'

type BaseList = {
    direction: Direction | null
    children: ListItemNode[]
    format: ''
    indent: number
    type: 'list'
    version: number
    start: number
}

type BulletList = {
    tag: 'ul'
    listType: 'bullet'
}

type CheckList = {
    tag: 'ul'
    listType: 'check'
}

type OrderedList = {
    tag: 'ol'
    listType: 'number'
}

export type ListNode = BaseList & (BulletList | CheckList | OrderedList)
export type BulletListNode = BaseList & BulletList
export type CheckListNode = BaseList & CheckList
export type OrderedListNode = BaseList & OrderedList

export type ListItemNode = {
    children: (ListNode | TextNode)[]
    direction: null
    format: ''
    indent: number
    type: 'listitem'
    version: number
    value: number
}
