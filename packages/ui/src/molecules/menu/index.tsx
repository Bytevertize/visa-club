import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { BaseSizes } from '../../types'
import { ListItem } from './list-item'

type MenuItem = {
    label: ReactNode
    submenu?: {
        isCollapsible?: boolean
        isDisabled?: boolean
        isOpen?: boolean
        items: MenuItem[]
    }
}

function renderItem(item: MenuItem) {
    if (!item.submenu) {
        return <li>{item.label}</li>
    }

    if (item.submenu.isCollapsible) {
        return (
            <ListItem isDisabled={item.submenu.isDisabled}>
                <details open={item.submenu.isOpen}>
                    <summary>{item.label}</summary>
                    <ul>{item.submenu.items.map(renderItem)}</ul>
                </details>
            </ListItem>
        )
    }

    return (
        <ListItem isDisabled={item.submenu.isDisabled}>
            {item.label}
            <ul>{item.submenu.items.map(renderItem)}</ul>
        </ListItem>
    )
}

export type MenuProps = {
    size?: BaseSizes
    isHorizontal?: boolean
    items: MenuItem[]
} & DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>

const sizes: Record<BaseSizes, string> = {
    lg: 'ui-menu-lg',
    md: 'ui-menu-md',
    sm: 'ui-menu-sm',
    xs: 'ui-menu-xs',
}

export function Menu({
    items,
    isHorizontal,
    size = 'md',
    className,
    ...props
}: MenuProps) {
    return (
        <ul
            className={`ui-menu ${
                isHorizontal ? 'ui-menu-horizontal' : 'ui-menu-vertical'
            } ${sizes[size]} ${className}`}
            {...props}
        >
            {items.map(renderItem)}
        </ul>
    )
}
