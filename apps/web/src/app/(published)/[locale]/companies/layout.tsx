import { Divider } from '@repo/ui'
import type { PropsWithChildren } from 'react'

export default function Layout({
    children,
}: PropsWithChildren<Record<never, string>>) {
    // TODO: Unify at some point
    return (
        <main className="flex-1 flex flex-col items-center overflow-auto max-h-screen">
            <Divider variant="ghost">Members</Divider>
            {children}
        </main>
    )
}
