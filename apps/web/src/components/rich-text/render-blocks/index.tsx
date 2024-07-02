import { FormBlock } from './render-forms'
import type { BlockNode } from './types'

type Props = {
    node: BlockNode
}

export function Blocks({ node }: Props) {
    switch (node.fields.blockType) {
        case 'formBlock': {
            return <FormBlock block={node.fields} />
        }
        default: {
            return null
        }
    }
}
