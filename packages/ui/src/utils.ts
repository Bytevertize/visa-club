import { ResponsiveMap, ResponsiveProp, ResponsivePropMap } from './types'

export function calcOptionalClass(className?: string) {
    return className || ''
}

type CalcResponsiveClass<T> = {
    prop: ResponsiveProp<T>
    options: ResponsivePropMap | ResponsiveMap<string>
}

function calcResponsiveClass<T>({
    options,
    prop,
}: CalcResponsiveClass<T>): string {
    return Object.entries(prop)
        .map(([key, value]) => {
            const option = options[key as keyof typeof options]

            if (typeof option === 'string' && value) {
                return option
            }

            return option[value as keyof typeof option]
        })
        .join(' ')
        .trim()
}

type CalcResponsiveBooleanClass = {
    prop: boolean | ResponsiveProp<boolean>
    options: ResponsiveMap<string>
}

/**
 * Calculate and return the responsive boolean class based on the given prop and options.
 *
 * @param {CalcResponsiveBooleanClass} param - Object containing prop and options
 * @return {string} The responsive boolean class
 */
function calcResponsiveBooleanClass({
    prop,
    options,
}: CalcResponsiveBooleanClass) {
    if (typeof prop === 'boolean') {
        return prop ? options.base : ''
    }
    return calcResponsiveClass<boolean>({ prop, options })
}

type CalcResponsiveStringClass = {
    prop: string | ResponsiveProp<string>
    options: ResponsivePropMap<string>
}

/**
 * Calculate the responsive string class based on the provided prop and options.
 *
 * @param {CalcResponsiveStringClass} param - An object containing the prop and options for calculating the responsive string class.
 * @return {string} The calculated responsive string class.
 */
function calcResponsiveStringClass({
    prop,
    options,
}: CalcResponsiveStringClass): string {
    if (typeof prop === 'string') {
        return options.base[prop] as string
    }

    return calcResponsiveClass<string>({ prop, options })
}

type CreateClassName = {
    responsiveBooleanClasses?: CalcResponsiveBooleanClass[]
    responsiveStringClasses?: CalcResponsiveStringClass[]
    optionalClasses?: (string | undefined)[]
    booleanClasses?: { prop: boolean; class: string }[]
    multipleChoiceClasses?: { prop: string; options: Record<string, string> }[]
    classNames?: string[]
}

/**
 * Generate a class name based on the provided parameters.
 *
 * @param {CreateClassName} param - Object containing different classes for generating the class name.
 * @return {string} The generated class name.
 */
export function createClassName({
    responsiveBooleanClasses,
    responsiveStringClasses,
    optionalClasses,
    booleanClasses,
    classNames,
    multipleChoiceClasses,
}: CreateClassName) {
    const result: string[] = []

    if (classNames) {
        result.push(classNames.join(' '))
    }

    if (responsiveBooleanClasses) {
        result.push(
            responsiveBooleanClasses.map(calcResponsiveBooleanClass).join(' '),
        )
    }
    if (responsiveStringClasses) {
        result.push(
            responsiveStringClasses.map(calcResponsiveStringClass).join(' '),
        )
    }

    if (booleanClasses) {
        result.push(
            booleanClasses
                .map((item) => (item.prop ? item.class : ''))
                .join(' '),
        )
    }

    if (multipleChoiceClasses) {
        result.push(
            multipleChoiceClasses
                .map((item) => (item.prop ? item.options[item.prop] : ''))
                .join(' '),
        )
    }

    if (optionalClasses) {
        result.push(optionalClasses.map((item) => item || '').join(' '))
    }

    return result.join(' ')
}
