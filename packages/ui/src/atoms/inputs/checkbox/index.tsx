import { forwardRef } from 'react'
import { createClassName } from '../../../utils'
import { sizes, variants } from './config'
import { BaseSizes, BaseVariants, ResponsiveProp } from '../../../types'

export type CheckboxProps = {
    rightLabel?: string
    leftLabel?: string
    variant?: BaseVariants
    size?: ResponsiveProp<BaseSizes> | BaseSizes
    disabled?: boolean
    checked?: boolean
} & Omit<
    React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >,
    'size'
>

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    function Checkbox(
        {
            leftLabel,
            rightLabel,
            size = 'md',
            variant = 'primary',
            checked,
            disabled,
            className,
            ...props
        },
        ref,
    ) {
        const classList = createClassName({
            classNames: ['ui-checkbox'],
            optionalClasses: [className],
            multipleChoiceClasses: [{ prop: variant, options: variants }],
            responsiveStringClasses: [{ options: sizes, prop: size }],
        })

        const Checkbox = (
            <input
                type="checkbox"
                className={classList}
                disabled={disabled}
                checked={checked}
                {...props}
                ref={ref}
            />
        )

        if (leftLabel || rightLabel) {
            return (
                <div className="ui-form-control">
                    <label className="ui-label ui-cursor-pointer">
                        {leftLabel && (
                            <span className="ui-label-text">{leftLabel}</span>
                        )}
                        {Checkbox}
                        {rightLabel && (
                            <span className="ui-label-text">{rightLabel}</span>
                        )}
                    </label>
                </div>
            )
        }

        return Checkbox
    },
)
