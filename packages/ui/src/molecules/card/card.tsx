import { DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react'
import { createClassName } from '../../utils'
import { ResponsiveMap, ResponsiveProp, ResponsivePropMap } from '../../types'

type CardVariants = 'primary' | 'slim'

export type CardProps = {
    variant?: CardVariants | ResponsiveProp<CardVariants>
    isHorizontal?: boolean | ResponsiveProp<boolean>
    imageAsOverlay?: boolean
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const cardVariants: ResponsivePropMap<CardVariants> = {
    base: {
        primary: 'ui-card-normal',
        slim: 'ui-card-compact',
    },
    sm: {
        primary: 'sm:ui-card-normal',
        slim: 'sm:ui-card-compact',
    },
    md: {
        primary: 'md:ui-card-normal',
        slim: 'md:ui-card-compact',
    },
    lg: {
        primary: 'lg:ui-card-normal',
        slim: 'lg:ui-card-compact',
    },
    xl: {
        primary: 'xl:ui-card-normal',
        slim: 'xl:ui-card-compact',
    },
    '2xl': {
        primary: '2xl:ui-card-normal',
        slim: '2xl:ui-card-compact',
    },
}

const responsiveHorizontal: ResponsiveMap<string> = {
    base: 'ui-card-side',
    sm: 'sm:ui-card-side',
    md: 'md:ui-card-side',
    lg: 'lg:ui-card-side',
    xl: 'xl:ui-card-side',
    '2xl': '2xl:ui-card-side',
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
    {
        variant = 'primary',
        isHorizontal = false,
        className,
        imageAsOverlay = false,
        children,
        ...props
    },
    ref,
) {
    const classList = createClassName({
        classNames: ['ui-card'],
        optionalClasses: [className],
        responsiveStringClasses: [{ options: cardVariants, prop: variant }],
        responsiveBooleanClasses: [
            {
                prop:
                    typeof isHorizontal === 'undefined' ? false : isHorizontal,
                options: responsiveHorizontal,
            },
        ],
        booleanClasses: [{ prop: imageAsOverlay, class: 'ui-image-full' }],
    })

    return (
        <div className={classList} {...props} ref={ref}>
            {children}
        </div>
    )
})
