'use server'

export function loginAction(formData: FormData) {
    try {
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        return fetch('/api/login-company', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
            }),
        })
    } catch (e) {
        throw new Error('Login Not Possible')
    }
}
