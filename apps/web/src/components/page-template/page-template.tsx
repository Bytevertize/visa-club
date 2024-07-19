import type {
    Footer as FooterType,
    Header as HeaderType,
    Page,
} from 'admin-types'
import type { Locale } from '@i18n/types'
import { DraftHeader, Header } from '@components/header'
import { DraftFooter, Footer } from '@components/footer'
import { Content, DraftContent } from '@components/content'

type PageProps = {
    pageData: Page
    headerData?: HeaderType
    footerData?: FooterType
    isFooterBeingEdited?: boolean
    isHeaderBeingEdited?: boolean
    isPageBeingEdited?: boolean
    slug: string
    locale: Locale
}
export function PageTemplate({
    pageData,
    footerData,
    headerData,
    isFooterBeingEdited = false,
    isHeaderBeingEdited = false,
    isPageBeingEdited = false,
    locale,
    slug,
}: PageProps) {
    return (
        <>
            {headerData && !isHeaderBeingEdited ? (
                <Header data={headerData} locale={locale} slug={slug} />
            ) : null}
            {headerData && isHeaderBeingEdited ? (
                <DraftHeader data={headerData} locale={locale} slug={slug} />
            ) : null}

            {isPageBeingEdited ? (
                <DraftContent data={pageData} locale={locale} />
            ) : (
                <Content data={pageData} locale={locale} />
            )}

            {footerData && !isFooterBeingEdited ? (
                <Footer data={footerData} locale={locale} />
            ) : null}
            {footerData && isFooterBeingEdited ? (
                <DraftFooter data={footerData} locale={locale} />
            ) : null}
        </>
    )
}
