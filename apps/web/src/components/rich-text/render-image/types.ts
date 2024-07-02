import type {
    Logo,
    PageBackground,
    PageImage,
    PageSectionBackground,
    Seo,
} from 'admin-types'

type BaseImage = {
    format: ''
    type: 'upload'
    version: number
    fields: null
}

type PageBackgroundImage = {
    relationTo: 'page-background'
    value: PageBackground
}
type PageImageImage = {
    relationTo: 'page-image'
    value: PageImage
}
type PageSectionBackgroundImage = {
    relationTo: 'page-section-background'
    value: PageSectionBackground
}
type SeoImage = {
    relationTo: 'seo'
    value: Seo
}
type LogoImage = {
    relationTo: 'logo'
    value: Logo
}

export type ImageNode = BaseImage &
    (
        | PageBackgroundImage
        | PageImageImage
        | PageSectionBackgroundImage
        | SeoImage
        | LogoImage
    )
