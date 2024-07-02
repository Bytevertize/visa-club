import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
    background: string
}>

export function PageWrapper({ children, background }: Props) {
    return (
        <div
            className="flex flex-col bg-no-repeat bg-cover bg-scroll bg-center w-full h-screen max-h-screen"
            style={{
                backgroundImage: background,
            }}
        >
            {children}
        </div>
    )
}
