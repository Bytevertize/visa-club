import { DetailedHTMLProps, TextareaHTMLAttributes, forwardRef } from 'react'
import { BaseSizes, BaseVariants } from '../../../types'
import { createClassName } from '../../../utils'
import { sizes, variants } from './config'

export type TextAreaProps = {
    topLeftLabel?: string
    bottomLeftLabel?: string
    topRightLabel?: string
    bottomRightLabel?: string
    variant?: BaseVariants
    size?: BaseSizes
} & DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
>

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    function TextArea(
        {
            topLeftLabel,
            bottomLeftLabel,
            topRightLabel,
            bottomRightLabel,
            variant = 'primary',
            size = 'md',
            className,
            ...props
        },
        ref,
    ) {
        const classList = createClassName({
            classNames: ['ui-textarea'],
            responsiveStringClasses: [{ options: sizes, prop: size }],
            optionalClasses: [className],
            multipleChoiceClasses: [{ prop: variant, options: variants }],
        })

        const Component = (
            <textarea className={classList} {...props} ref={ref} />
        )

        if (
            topLeftLabel ||
            bottomLeftLabel ||
            topRightLabel ||
            bottomRightLabel
        ) {
            return (
                <label className="ui-form-control">
                    {topLeftLabel && topRightLabel && (
                        <div className="ui-label">
                            {topRightLabel && (
                                <span className="ui-label-text">
                                    {topRightLabel}
                                </span>
                            )}
                            {topLeftLabel && (
                                <span className="ui-label-text">
                                    {topLeftLabel}
                                </span>
                            )}
                        </div>
                    )}
                    {Component}
                    {bottomRightLabel && bottomLeftLabel && (
                        <div className="ui-label">
                            {bottomLeftLabel && (
                                <span className="ui-label-text">
                                    {bottomLeftLabel}
                                </span>
                            )}
                            {bottomRightLabel && (
                                <span className="ui-label-text">
                                    {bottomRightLabel}
                                </span>
                            )}
                        </div>
                    )}
                </label>
            )
        }

        return Component
    },
)
