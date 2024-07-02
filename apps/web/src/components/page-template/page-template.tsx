import type {
    Footer as FooterType,
    Header as HeaderType,
    Page,
    PageBackground,
} from 'admin-types'
import type { Locale } from '@i18n/types'
import { DraftHeader, Header } from '@components/header'
import { DraftFooter, Footer } from '@components/footer'
import { Content, DraftContent } from '@components/content'
import { PageWrapper } from './page-wrapper'

type PageProps = {
    pageData: Page
    headerData: HeaderType
    footerData: FooterType
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
    const background =
        pageData.image && (pageData.image as PageBackground).url
            ? `url(${process.env.NEXT_PUBLIC_PAYLOAD_ENDPOINT}${
                  (pageData.image as PageBackground).url
              })`
            : ''

    return (
        <PageWrapper background={background || ''}>
            {isHeaderBeingEdited ? (
                <DraftHeader data={headerData} locale={locale} slug={slug} />
            ) : (
                <Header data={headerData} locale={locale} slug={slug} />
            )}
            {isPageBeingEdited ? (
                <DraftContent data={pageData} locale={locale} />
            ) : (
                <Content data={pageData} locale={locale} />
            )}
            {isFooterBeingEdited ? (
                <DraftFooter data={footerData} locale={locale} />
            ) : (
                <Footer data={footerData} locale={locale} />
            )}
        </PageWrapper>
    )
}
