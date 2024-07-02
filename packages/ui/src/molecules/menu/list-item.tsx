import { DetailedHTMLProps, LiHTMLAttributes } from 'react'

export type ListItemProps = {
    isDisabled?: boolean
} & DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
export function ListItem({ children, isDisabled, ...props }: ListItemProps) {
    return (
        <li className={`${isDisabled ? 'ui-disabled' : ''}`} {...props}>
            {children}
        </li>
    )
}
