import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren

export function PageWrapper({ children }: Props) {
    return (
        <div className="flex flex-col bg-no-repeat bg-cover bg-scroll bg-center w-full h-screen max-h-screen">
            {children}
        </div>
    )
}
