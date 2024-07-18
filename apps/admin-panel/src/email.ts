import { EmailOptions } from 'payload/config'

let email: EmailOptions

if (process.env.NODE_ENV === 'production') {
    email = {
        fromName: 'VISA Club',
        fromAddress: 'info@visa-club.com',
    }
} else {
    email = {
        fromName: 'Ethereal Email',
        fromAddress: 'example@ethereal.com',
        logMockCredentials: true,
    }
}

export default email
