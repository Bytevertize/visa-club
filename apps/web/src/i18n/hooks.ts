'use client'
import { changeLanguage, getLocale } from './utils'

export function useI18n() {
    return {
        currentLocale: getLocale(),
        getLocale,
        changeLanguage,
    }
}
