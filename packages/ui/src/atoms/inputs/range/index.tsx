import { forwardRef } from 'react'
import { BaseSizes, BaseVariants, ResponsiveProp } from '../../../types'
import { createClassName } from '../../../utils'
import { sizes, variants } from './config'

export type RangeProps = Omit<
    React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >,
    'size'
> & {
    min?: number
    max?: number
    value?: number
    defaultValue?: number
    step?: number
    size?: ResponsiveProp<BaseSizes> | BaseSizes
    variant?: BaseVariants
}

export const Range = forwardRef<HTMLInputElement, RangeProps>(function Range(
    {
        max = 100,
        min = 0,
        size = 'md',
        step = 1,
        value,
        defaultValue = 0,
        variant = 'primary',
        className,
        ...props
    },
    ref,
) {
    const classList = createClassName({
        classNames: ['ui-range'],
        optionalClasses: [className],
        responsiveStringClasses: [{ options: sizes, prop: size }],
        multipleChoiceClasses: [{ prop: variant, options: variants }],
    })

    return (
        <input
            type="range"
            min={min}
            max={max}
            value={typeof value === 'number' ? value : undefined}
            defaultValue={defaultValue}
            step={step}
            className={classList}
            {...props}
            ref={ref}
        />
    )
})
