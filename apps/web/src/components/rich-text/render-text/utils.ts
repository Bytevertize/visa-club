import type { Format } from './types'

const obj: Record<Format, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
}

export function returnTextAlignmentString(format: Format) {
    return obj[format]
}

export function calcIndent(number: number) {
    return `${number * 40}px`
}
