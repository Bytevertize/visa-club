import { forwardRef } from 'react'
import { BaseSizes, BaseVariants, ResponsiveProp } from '../../../types'
import { createClassName } from '../../../utils'
import { sizes, variants } from './config'

export type RadioProps = {
    variant?: BaseVariants
    size?: ResponsiveProp<BaseSizes> | BaseSizes
    leftLabel?: string
    rightLabel?: string
    disabled?: boolean
    checked?: boolean
} & Omit<
    React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >,
    'size'
>

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
    {
        leftLabel,
        rightLabel,
        checked,
        disabled,
        size = 'md',
        variant = 'primary',
        className,
        ...props
    },
    ref,
) {
    const classList = createClassName({
        classNames: ['ui-radio'],
        responsiveStringClasses: [{ options: sizes, prop: size }],
        optionalClasses: [className],
        multipleChoiceClasses: [{ prop: variant, options: variants }],
    })

    const Radio = (
        <input
            type="radio"
            disabled={disabled}
            checked={checked}
            className={classList}
            {...props}
            ref={ref}
        />
    )

    if (leftLabel || rightLabel) {
        return (
            <div className="ui-form-control">
                <label className="ui-label cursor-pointer">
                    {leftLabel && (
                        <span className="ui-label-text">{leftLabel}</span>
                    )}
                    {Radio}
                    {rightLabel && (
                        <span className="ui-label-text">{rightLabel}</span>
                    )}
                </label>
            </div>
        )
    }

    return Radio
})
