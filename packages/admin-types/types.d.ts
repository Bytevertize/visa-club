/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
    collections: {
        users: User
        pages: Page
        'page-background': PageBackground
        'page-image': PageImage
        'page-section-background': PageSectionBackground
        seo: Seo
        logo: Logo
        'payload-preferences': PayloadPreference
        'payload-migrations': PayloadMigration
    }
    globals: {
        header: Header
        footer: Footer
    }
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
    id: string
    updatedAt: string
    createdAt: string
    email: string
    resetPasswordToken?: string | null
    resetPasswordExpiration?: string | null
    salt?: string | null
    hash?: string | null
    loginAttempts?: number | null
    lockUntil?: string | null
    password: string | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
    id: string
    title: string
    slug?: string | null
    image?: string | PageBackground | null
    pageSections?:
        | {
              content: {
                  richText?: {
                      root: {
                          type: string
                          children: {
                              type: string
                              version: number
                              [k: string]: unknown
                          }[]
                          direction: ('ltr' | 'rtl') | null
                          format:
                              | 'left'
                              | 'start'
                              | 'center'
                              | 'right'
                              | 'end'
                              | 'justify'
                              | ''
                          indent: number
                          version: number
                      }
                      [k: string]: unknown
                  } | null
              }
              animationSettings: {
                  onEnter?: ('none' | 'fade' | 'slide') | null
                  onLeave?: ('none' | 'fade' | 'slide') | null
              }
              background: {
                  background?: {
                      type?: ('none' | 'color' | 'image') | null
                      image?: string | PageSectionBackground | null
                      color?: string | null
                  }
              }
              id?: string | null
          }[]
        | null
    meta?: {
        title?: string | null
        description?: string | null
        image?: string | Seo | null
    }
    updatedAt: string
    createdAt: string
    _status?: ('draft' | 'published') | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "page-background".
 */
export interface PageBackground {
    id: string
    alt?: string | null
    updatedAt: string
    createdAt: string
    url?: string | null
    filename?: string | null
    mimeType?: string | null
    filesize?: number | null
    width?: number | null
    height?: number | null
    sizes?: {
        desktop?: {
            url?: string | null
            width?: number | null
            height?: number | null
            mimeType?: string | null
            filesize?: number | null
            filename?: string | null
        }
        mobile?: {
            url?: string | null
            width?: number | null
            height?: number | null
            mimeType?: string | null
            filesize?: number | null
            filename?: string | null
        }
        tablet?: {
            url?: string | null
            width?: number | null
            height?: number | null
            mimeType?: string | null
            filesize?: number | null
            filename?: string | null
        }
    }
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "page-section-background".
 */
export interface PageSectionBackground {
    id: string
    alt?: string | null
    updatedAt: string
    createdAt: string
    url?: string | null
    filename?: string | null
    mimeType?: string | null
    filesize?: number | null
    width?: number | null
    height?: number | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "seo".
 */
export interface Seo {
    id: string
    alt?: string | null
    updatedAt: string
    createdAt: string
    url?: string | null
    filename?: string | null
    mimeType?: string | null
    filesize?: number | null
    width?: number | null
    height?: number | null
    sizes?: {
        facebook?: {
            url?: string | null
            width?: number | null
            height?: number | null
            mimeType?: string | null
            filesize?: number | null
            filename?: string | null
        }
        twitter?: {
            url?: string | null
            width?: number | null
            height?: number | null
            mimeType?: string | null
            filesize?: number | null
            filename?: string | null
        }
        featured?: {
            url?: string | null
            width?: number | null
            height?: number | null
            mimeType?: string | null
            filesize?: number | null
            filename?: string | null
        }
    }
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "page-image".
 */
export interface PageImage {
    id: string
    alt?: string | null
    size?: ('square' | 'original' | 'wide') | null
    borderRadius?: number | null
    alignment?: ('left' | 'center' | 'right') | null
    updatedAt: string
    createdAt: string
    url?: string | null
    filename?: string | null
    mimeType?: string | null
    filesize?: number | null
    width?: number | null
    height?: number | null
    sizes?: {
        wide?: {
            url?: string | null
            width?: number | null
            height?: number | null
            mimeType?: string | null
            filesize?: number | null
            filename?: string | null
        }
        square?: {
            url?: string | null
            width?: number | null
            height?: number | null
            mimeType?: string | null
            filesize?: number | null
            filename?: string | null
        }
    }
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "logo".
 */
export interface Logo {
    id: string
    alt?: string | null
    updatedAt: string
    createdAt: string
    url?: string | null
    filename?: string | null
    mimeType?: string | null
    filesize?: number | null
    width?: number | null
    height?: number | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
    id: string
    user: {
        relationTo: 'users'
        value: string | User
    }
    key?: string | null
    value?:
        | {
              [k: string]: unknown
          }
        | unknown[]
        | string
        | number
        | boolean
        | null
    updatedAt: string
    createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
    id: string
    name?: string | null
    batch?: number | null
    updatedAt: string
    createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
    id: string
    navItems: {
        itemsToShow: number
        items: {
            link: {
                type?: ('reference' | 'custom') | null
                newTab?: boolean | null
                reference?: {
                    relationTo: 'pages'
                    value: string | Page
                } | null
                url?: string | null
                label: string
            }
            id?: string | null
        }[]
    }
    logo: {
        image: string | Logo
        hideOnHomepage: boolean
    }
    i18n: {
        toggleIcon?: boolean | null
        text: string
    }
    background: {
        background?: {
            type?: ('none' | 'color' | 'image') | null
            image?: string | PageSectionBackground | null
            color?: string | null
        }
    }
    _status?: ('draft' | 'published') | null
    updatedAt?: string | null
    createdAt?: string | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
    id: string
    content: {
        content?: {
            root: {
                type: string
                children: {
                    type: string
                    version: number
                    [k: string]: unknown
                }[]
                direction: ('ltr' | 'rtl') | null
                format:
                    | 'left'
                    | 'start'
                    | 'center'
                    | 'right'
                    | 'end'
                    | 'justify'
                    | ''
                indent: number
                version: number
            }
            [k: string]: unknown
        } | null
    }
    background: {
        background?: {
            type?: ('none' | 'color' | 'image') | null
            image?: string | PageSectionBackground | null
            color?: string | null
        }
    }
    _status?: ('draft' | 'published') | null
    updatedAt?: string | null
    createdAt?: string | null
}

declare module 'payload' {
    export interface GeneratedTypes extends Config {}
}
