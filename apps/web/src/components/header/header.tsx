import type { Header as HeaderType } from 'admin-types'

type HeaderProps = {
    data: HeaderType
}

export function Header({ data }: HeaderProps) {
    return <pre>{JSON.stringify(data, null, 4)}</pre>
}
