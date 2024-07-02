'use client'

import { useEffect, useState } from 'react'
import { getPages } from '@requests/collections'

export function Test() {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        async function run() {
            setState(await getPages({ limit: 1, draft: false, locale: 'en' }))
        }

        void run()
    }, [])

    return <pre>{JSON.stringify(state, null, 4)}</pre>
}
