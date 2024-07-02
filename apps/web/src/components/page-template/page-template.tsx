import type { Page } from 'admin-types'

type PageProps = {
    data: Page
}
export function PageTemplate({ data }: PageProps) {
    return <pre>{JSON.stringify(data, null, 4)}</pre>
}
