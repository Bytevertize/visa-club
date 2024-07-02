import type { Footer as FooterType } from 'admin-types'

type FooterProps = {
    data: FooterType
}

export function Footer({ data }: FooterProps) {
    return <pre>{JSON.stringify(data, null, 4)}</pre>
}
