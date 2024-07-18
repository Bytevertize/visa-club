import { CollectionConfig } from 'payload/types'
import { allowOnlyAdmin } from '../../access'
import {
    BoldTextFeature,
    HeadingFeature,
    IndentFeature,
    ItalicTextFeature,
    lexicalEditor,
    LinkFeature,
    ParagraphFeature,
    StrikethroughTextFeature,
    UnderlineTextFeature,
} from '@payloadcms/richtext-lexical'
import { createForgotPassword as createForgotPasswordEmail } from './emails/create-forgot-password'
import { createVerifyAccount as createVerifyAccountEmail } from './emails/create-verify-account'

const editor = lexicalEditor({
    features: [
        BoldTextFeature(),
        ItalicTextFeature(),
        UnderlineTextFeature(),
        StrikethroughTextFeature(),
        ParagraphFeature(),
        HeadingFeature({ enabledHeadingSizes: ['h3', 'h4', 'h5'] }),
        IndentFeature(),
        LinkFeature({}),
    ],
})

export const Company: CollectionConfig = {
    auth: {
        forgotPassword: {
            generateEmailHTML({ user }) {
                return createForgotPasswordEmail((user as any).name)
            },
            generateEmailSubject() {
                return 'VISA Club: Forgot Password'
            },
        },
        maxLoginAttempts: 5,
        lockTime: 5 * 60 * 1000, //  5 minutes
        verify: {
            generateEmailHTML({ user }) {
                return createVerifyAccountEmail((user as any).name)
            },
            generateEmailSubject() {
                return 'VISA Club: Verify your email'
            },
        },
    },
    access: {
        create: allowOnlyAdmin,
        update: allowOnlyAdmin,
        delete: allowOnlyAdmin,
        unlock: allowOnlyAdmin,
        readVersions: allowOnlyAdmin,
        read({ req }) {
            if (req.user) return true

            return false
        },
    },
    admin: {
        useAsTitle: 'name',
        disableDuplicate: true,
        listSearchableFields: ['name', 'email'],
        defaultColumns: ['name', 'phone', 'email', 'id'],
    },
    hooks: {
        beforeChange: [
            // create slug on save or update
            function ({ data }) {
                return {
                    ...data,
                    slug: data.name
                        .toLowerCase()
                        .trim()
                        .replace(/[^\w\s-]/g, '')
                        .replace(/[\s_-]+/g, '-')
                        .replace(/^-+|-+$/g, ''),
                }
            },
        ],
    },
    slug: 'company',
    fields: [
        {
            type: 'upload',
            name: 'logo',
            relationTo: 'logo',
            required: true,
        },
        {
            type: 'row',
            fields: [
                {
                    type: 'text',
                    name: 'name',
                    unique: true,
                    required: true,
                },
                {
                    type: 'text',
                    name: 'phone',
                    required: true,
                    validate(value) {
                        const reg =
                            /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/gim

                        if (reg.test(value)) return true

                        return 'Please enter a valid phone number'
                    },
                },
                {
                    type: 'text',
                    name: 'slug',
                    admin: {
                        readOnly: true,
                    },
                },
            ],
        },
        {
            type: 'richText',
            name: 'content',
            localized: true,
            editor,
        },
        {
            name: 'contactPerson',
            type: 'group',
            localized: true,
            fields: [
                {
                    type: 'text',
                    name: 'contactPersonName',
                },
                {
                    type: 'text',
                    name: 'contactPersonTitle',
                },
                {
                    type: 'text',
                    name: 'phoneNumber',
                },
                {
                    type: 'text',
                    name: 'contactEmail',
                },
            ],
        },
    ],
}
