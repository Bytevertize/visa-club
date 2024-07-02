import { ReactNode, forwardRef } from 'react'
import { BaseSizes, BaseVariants } from '../../../types'
import { createClassName } from '../../../utils'
import { sizes, variants } from './config'

export type SelectProps = {
    options: { id: string; item: ReactNode }[]
    variant?: BaseVariants
    size?: BaseSizes
    topLeftLabel?: string
    topRightLabel?: string
    bottomLeftLabel?: string
    bottomRightLabel?: string
} & Omit<
    React.DetailedHTMLProps<
        React.SelectHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
    >,
    'size'
>

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    function Select(
        {
            options,
            size = 'lg',
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
            classNames: ['ui-select', 'ui-w-full', 'ui-max-w-xs'],
            responsiveStringClasses: [{ options: sizes, prop: size }],
            multipleChoiceClasses: [{ prop: variant, options: variants }],
            optionalClasses: [className],
        })

        const Select = (
            <select className={classList} {...props} ref={ref}>
                {options.map(({ id, item }) => (
                    <option key={id}>{item}</option>
                ))}
            </select>
        )

        if (
            bottomLeftLabel ||
            bottomRightLabel ||
            topLeftLabel ||
            topRightLabel
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
                    {Select}
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
        return Select
    },
)
