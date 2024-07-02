import { ReactNode, forwardRef } from 'react'
import { BaseVariants, BaseSizes, ResponsiveProp } from '../../types'
import { DetailedHTMLProps } from 'react'
import {
    responsiveBlock,
    responsiveCircle,
    responsiveSizes,
    responsiveSquare,
    responsiveWide,
    variants,
} from './config'
import { createClassName } from '../../utils'

export type ButtonProps = {
    children?: ReactNode
    variant?: BaseVariants | 'glass'
    size?: BaseSizes | ResponsiveProp<BaseSizes>
    isOutlined?: boolean
    rightIcon?: ReactNode
    leftIcon?: ReactNode
    isCircled?: boolean | ResponsiveProp<boolean>
    isWide?: boolean | ResponsiveProp<boolean>
    isSquare?: boolean | ResponsiveProp<boolean>
    isLoading?: boolean | ResponsiveProp<boolean>
    isBlock?: boolean | ResponsiveProp<boolean>
    isDisabled?: boolean
    isActive?: boolean
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
} & DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    function Button(
        {
            children,
            isBlock,
            isCircled,
            isLoading,
            isSquare,
            isWide,
            leftIcon,
            rightIcon,
            isOutlined,
            size = 'lg',
            variant = 'primary',
            isDisabled,
            isActive,
            className,
            ...props
        },
        ref,
    ) {
        const classList = createClassName({
            responsiveBooleanClasses: [
                {
                    prop: typeof isCircled === 'undefined' ? false : isCircled,
                    options: responsiveCircle,
                },
                {
                    prop: typeof isSquare === 'undefined' ? false : isSquare,
                    options: responsiveSquare,
                },
                {
                    prop: typeof isWide === 'undefined' ? false : isWide,
                    options: responsiveWide,
                },
                {
                    prop: typeof isBlock === 'undefined' ? false : isBlock,
                    options: responsiveBlock,
                },
            ],
            responsiveStringClasses: [{ prop: size, options: responsiveSizes }],
            multipleChoiceClasses: [{ prop: variant, options: variants }],
            classNames: ['ui-btn'],
            optionalClasses: [className],
            booleanClasses: [
                {
                    prop: Boolean(isDisabled || props.disabled),
                    class: 'ui-btn-disabled',
                },
                { prop: Boolean(isActive), class: 'ui-btn-active' },
                { prop: Boolean(isOutlined), class: 'ui-btn-outline' },
            ],
        })

        return (
            <button className={classList} {...props} ref={ref}>
                {leftIcon && <span className="ui-h-6 ui-w-6">{leftIcon}</span>}
                {children}
                {isLoading && (
                    <span className="ui-loading ui-loading-infinity" />
                )}
                {rightIcon && (
                    <span className="ui-h-6 ui-w-6">{rightIcon}</span>
                )}
            </button>
        )
    },
)
