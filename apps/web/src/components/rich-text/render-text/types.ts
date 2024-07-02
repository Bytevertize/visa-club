import type { Page } from 'admin-types'

export type Direction = 'ltr' | 'rtl'

export type Format = 'left' | 'center' | 'right' | 'justify'

export type TextNode = {
    detail: number
    format: number
    mode: 'normal'
    style: string
    text: string
    type: 'text'
    version: number
}

export type LinkNode = {
    direction: Direction
    children: TextNode[]
    fields: LinkFields
    format: string
    indent: 0
    type: 'link' | 'autolink'
    version: number
}

type LinkFields = CustomLink | InternalLink

type BaseLinkFields = {
    newTab: boolean
    variant: 'text' | 'button'
}

type CustomLink = BaseLinkFields & {
    linkType: 'custom'
    url: string
    doc: null
    newTab: boolean
}

type InternalLink = BaseLinkFields & {
    linkType: 'internal'
    url: null
    doc: { value: Page }
    newTab: boolean
}

export type LineBreakNode = {
    type: 'linebreak'
    version: number
}

export type TabNode = {
    detail: number
    format: number
    mode: string
    style: string
    text: string
    type: 'tab'
    version: number
}

export type ParagraphNode = {
    children: (TextNode | LinkNode)[]
    direction: Direction
    format: Format
    indent: number
    type: 'paragraph'
    version: number
}

export type HeadingNode = {
    children: TextNode[]
    direction: Direction
    format: Format
    indent: number
    type: 'heading'
    version: number
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
