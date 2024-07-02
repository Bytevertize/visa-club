'use client'

import { changeLanguage } from '@i18n/utils'

type Props = {
    children: string
}

export function ChangeLang({ children }: Props) {
    return (
        <button
            onClick={() => {
                changeLanguage()
            }}
            type="button"
        >
            {children}
        </button>
    )
}
