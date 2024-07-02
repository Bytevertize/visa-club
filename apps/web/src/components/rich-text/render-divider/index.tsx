import { Divider as AppDivider } from '@repo/ui'
import type { DividerNode } from './types'

type Props = {
    node: DividerNode
}

export function Divider(_props: Props) {
    return (
        <AppDivider
            className="before:bg-[--tw-prose-body] after:bg-[--tw-prose-body] opacity-70 my-0"
            variant="neutral"
        />
    )
}
