import { DetailedHTMLProps, HTMLAttributes, ReactNode, forwardRef } from 'react'
import { BaseSizes, BaseVariants, ResponsiveProp } from '../../types'
import { createClassName } from '../../utils'
import { responsiveSizes, variants } from './config'

export type BadgeProps = {
    children?: ReactNode
    variant?: BaseVariants
    size?: BaseSizes | ResponsiveProp<BaseSizes>
    isOutlined?: boolean
    inline?: boolean
    rightIcon?: ReactNode
    leftIcon?: ReactNode
    className?: string
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(function Badge(
    {
        children,
        inline = false,
        size = 'lg',
        variant = 'primary',
        isOutlined: outlined = false,
        rightIcon,
        leftIcon,
        className,
        ...props
    },
    ref,
) {
    const classList = createClassName({
        classNames: ['ui-gap-2', 'ui-badge'],
        responsiveStringClasses: [{ options: responsiveSizes, prop: size }],
        booleanClasses: [{ prop: outlined, class: 'ui-badge-outline' }],
        optionalClasses: [className],
        multipleChoiceClasses: [{ prop: variant, options: variants }],
    })
    const Component = inline ? 'span' : 'div'

    return (
        <Component ref={ref} className={classList} {...props}>
            {leftIcon && (
                <span className="ui-inline-block ui-w-4 ui-h-4 ui-stroke-current">
                    {leftIcon}
                </span>
            )}
            {children}
            {rightIcon && (
                <span className="ui-inline-block ui-w-4 ui-h-4 ui-stroke-current">
                    {rightIcon}
                </span>
            )}
        </Component>
    )
})
