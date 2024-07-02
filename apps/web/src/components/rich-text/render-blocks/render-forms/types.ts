import type { RootNode } from '@components/rich-text/types'

export type FormBlock = {
    id: string
    blockName: ''
    blockType: 'formBlock'
    form: Form
}

type Form = {
    id: string
    title: string
    fields: (NameField | EmailField | NumberField | TextAreaField)[]
    submitButtonLabel: string
    createdAt: string
    updatedAt: string
    emails: Email[]
} & (RedirectConfirmation | MessageConfirmation)

type Email = {
    id: string
    emailTo: string
    cc: string
    bcc: string
    replyTo: string
    emailFrom: string
    subject: string
    message: { root: RootNode }
}

type RedirectConfirmation = {
    confirmationType: 'redirect'
    redirect: {
        url: string
    }
}

type MessageConfirmation = {
    confirmationType: 'message'
    confirmationMessage: { root: RootNode }
    redirect: Record<string, never>
}

type BaseField = {
    name: string
    label: string
    width: number
    required: true
    id: string
}

type NameField = BaseField & {
    blockType: 'text'
}

type EmailField = BaseField & {
    blockType: 'email'
}

type NumberField = BaseField & {
    blockType: 'number'
}

type TextAreaField = BaseField & {
    blockType: 'textarea'
}
