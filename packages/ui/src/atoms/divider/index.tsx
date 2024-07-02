import { ReactNode, forwardRef } from 'react'
import { BaseVariants, ResponsiveProp } from '../../types'
import { createClassName } from '../../utils'
import {
    horizontalOptions,
    positionOptions,
    variants,
    verticalOptions,
} from './config'

export type DividerProps = {
    isHorizontal?: boolean | ResponsiveProp<boolean>
    isVertical?: boolean | ResponsiveProp<boolean>
    children?: ReactNode
    labelPosition?:
        | 'start'
        | 'middle'
        | 'end'
        | ResponsiveProp<'start' | 'middle' | 'end'>
    variant?: BaseVariants
} & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
    function Divider(
        {
            isHorizontal,
            isVertical,
            children,
            labelPosition = 'middle',
            variant = 'primary',
            className,
            ...props
        },
        ref,
    ) {
        const classList = createClassName({
            classNames: ['ui-divider'],
            optionalClasses: [className],
            multipleChoiceClasses: [{ prop: variant, options: variants }],
            responsiveBooleanClasses: [
                {
                    prop:
                        typeof isHorizontal === 'undefined'
                            ? false
                            : isHorizontal,
                    options: horizontalOptions,
                },
                {
                    prop:
                        typeof isVertical === 'undefined' ? false : isVertical,
                    options: verticalOptions,
                },
            ],
            responsiveStringClasses: [
                { prop: labelPosition, options: positionOptions },
            ],
        })

        return (
            <div className={classList} {...props} ref={ref}>
                {children}
            </div>
        )
    },
)
