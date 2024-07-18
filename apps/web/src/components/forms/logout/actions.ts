'use server'

export function logoutAction() {
    try {
        return fetch('/api/logout-company', {
            method: 'POST',
        })
    } catch (e) {
        throw new Error('Logout Not Possible')
    }
}
