'use server'

export function forgotPasswordAction(formData: FormData) {
    try {
        const email = formData.get('email') as string

        return fetch('/api/forgot-password-company', {
            method: 'POST',
            body: JSON.stringify({
                email,
            }),
        })
    } catch (e) {
        throw new Error('Forgot Password Not Possible')
    }
}
