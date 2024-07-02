import { forwardRef } from 'react'
import { BaseSizes, BaseVariants, ResponsiveProp } from '../../../types'
import { createClassName } from '../../../utils'
import { sizes, variants } from './config'

export type FileProps = {
    accept: string
    bordered?: boolean
    variant?: BaseVariants
    size?: ResponsiveProp<BaseSizes> | BaseSizes
    disabled?: boolean
    topLeftLabel?: string
    topRightLabel?: string
    bottomLeftLabel?: string
    bottomRightLabel?: string
} & Omit<
    React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >,
    'size'
>

export const FileInput = forwardRef<HTMLInputElement, FileProps>(
    function FileInput(
        {
            accept,
            bordered,
            disabled,
            size = 'md',
            variant = 'primary',
            bottomLeftLabel,
            bottomRightLabel,
            topLeftLabel,
            topRightLabel,
            className,
            ...props
        },
        ref,
    ) {
        const classList = createClassName({
            classNames: ['ui-file-input', 'w-full', 'max-w-xs'],
            optionalClasses: [className],
            multipleChoiceClasses: [{ prop: variant, options: variants }],
            booleanClasses: [
                { prop: Boolean(bordered), class: 'ui-file-input-bordered' },
            ],
            responsiveStringClasses: [{ options: sizes, prop: size }],
        })

        const FileInput = (
            <input
                accept={accept}
                disabled={disabled}
                type="file"
                className={classList}
                {...props}
                ref={ref}
            />
        )

        if (
            topLeftLabel ||
            topRightLabel ||
            bottomLeftLabel ||
            bottomRightLabel
        ) {
            return (
                <label className="ui-form-control w-full max-w-xs">
                    {(topLeftLabel || topRightLabel) && (
                        <div className="ui-label">
                            {topLeftLabel && (
                                <span className="ui-label-text">
                                    {topLeftLabel}
                                </span>
                            )}
                            {topRightLabel && (
                                <span className="ui-label-text">
                                    {topRightLabel}
                                </span>
                            )}
                        </div>
                    )}
                    {FileInput}
                    {(bottomLeftLabel || bottomRightLabel) && (
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

        return FileInput
    },
)
