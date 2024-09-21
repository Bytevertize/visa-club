'use client'
import { TextArea } from '@repo/ui'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import type { FormBlock as FormBlockType } from './types'

type Props = {
    block: FormBlockType
}

export function FormBlock({ block: { form, id } }: Props) {
    // const submitURL = `${process.env.NEXT_PUBLIC_PAYLOAD_ENDPOINT}/api/form-submissions`
    const { register, handleSubmit, clearErrors, setError } = useForm()
    const router = useRouter()

    async function onSubmit(data: Record<string, any>) {
        clearErrors()

        const submissionData = Object.entries(data).map(([name, value]) => ({
            field: name,
            value,
        }))

        try {
            const req = await fetch('/api/form-submissions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    form: form.id,
                    submissionData,
                }),
            })

            const res = await req.json()

            if (req.status >= 400) {
                setError('root.serverError', {
                    type: res.status,
                    message:
                        res.errors?.[0]?.message || 'Internal Server Error',
                })

                return
            }

            if (form.confirmationType === 'redirect' && form.redirect.url) {
                router.push(form.redirect.url)
            }
        } catch (err) {
            console.warn(err)
            setError('root.error', {
                message: 'Something went wrong.',
            })
        }
    }
    return (
        <form
            className="flex flex-wrap items-center gap-y-4"
            id={id}
            onSubmit={() => {
                handleSubmit(onSubmit)
            }}
        >
            {form.fields.map((field) => {
                switch (field.blockType) {
                    // field.
                    case 'text':
                        return (
                            <div
                                style={{
                                    width: `${field.width}%`,
                                }}
                            >
                                <label htmlFor={field.id}>{field.label}</label>
                                <input
                                    className="input input-bordered input-[white] placeholder:text-white border-2 bg-transparent w-full"
                                    id={field.id}
                                    key={field.id}
                                    placeholder={field.name}
                                    type="text"
                                    {...register(field.id, {
                                        required: field.required,
                                    })}
                                />
                            </div>
                        )
                    case 'email':
                        return (
                            <div
                                style={{
                                    width: `${field.width}%`,
                                }}
                            >
                                <label htmlFor={field.id}>{field.label}</label>
                                <input
                                    className="input input-bordered input-[white] placeholder:text-white border-2 bg-transparent w-full"
                                    id={field.id}
                                    key={field.id}
                                    placeholder={field.name}
                                    style={{
                                        width: `${field.width}%`,
                                    }}
                                    type="email"
                                    {...register(field.id, {
                                        required: field.required,
                                    })}
                                />
                            </div>
                        )
                    case 'number':
                        return (
                            <div
                                style={{
                                    width: `${field.width}%`,
                                }}
                            >
                                <label htmlFor={field.id}>{field.label}</label>
                                <input
                                    className="input input-bordered input-[white] placeholder:text-white border-2 bg-transparent w-full"
                                    id={field.id}
                                    key={field.id}
                                    placeholder={field.name}
                                    style={{
                                        width: `${field.width}%`,
                                    }}
                                    type="number"
                                    {...register(field.id, {
                                        required: field.required,
                                    })}
                                />
                            </div>
                        )
                    case 'textarea':
                        return (
                            <TextArea
                                className="input-bordered input-[white] placeholder:text-white border-2 bg-transparent w-full"
                                key={id}
                                placeholder={field.name}
                                style={{
                                    width: `${field.width}%`,
                                }}
                                topLeftLabel={field.label}
                                {...register(field.id, {
                                    required: field.required,
                                })}
                            />
                        )
                    default:
                        return null
                }
            })}
        </form>
    )
}
