/* eslint-disable @typescript-eslint/no-non-null-assertion -- TODO: Fix during refactoring */
import Image from 'next/image'
import type { ImageNode } from './types'

type Props = {
    node: ImageNode
}

export function RichTextImage({ node: { relationTo, value } }: Props) {
    switch (relationTo) {
        case 'page-image': {
            const size = value.sizes
                ? value.sizes[value.size as keyof typeof value.sizes]
                : null
            return (
                <Image
                    alt={value.alt || 'alt'}
                    height={(size ? size.height : value.height)!}
                    src={`${size ? size.url : value.url}`}
                    style={{
                        borderRadius: value.borderRadius || 0,
                        alignSelf: value.alignment || 'center',
                    }}
                    width={(size ? size.width : value.width)!}
                />
            )
        }
        case 'logo':
        case 'page-background':
        case 'page-section-background':
        case 'seo':
            return (
                <Image
                    alt={value.url || 'alt'}
                    height={value.height!}
                    src={`${value.url}`}
                    width={value.width!}
                />
            )
        default:
            return null
    }
}
