import { EmailOptions } from 'payload/config'

let email: EmailOptions

if (process.env.NODE_ENV === 'production') {
    email = {
        fromName: 'VISA Club',
        fromAddress: 'info@visa-club.com',
        transportOptions: {
            service: 'Gmail',
            host: 'smpt.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        },
    }
} else {
    email = {
        fromName: 'Ethereal Email',
        fromAddress: 'example@ethereal.com',
        logMockCredentials: true,
    }
}

export default email
