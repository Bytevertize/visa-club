import { createBaseEmail } from './create-base-email'

export function createVerifyAccount(user: string) {
    return createBaseEmail(`
            <p>Dear ${user},</p>
            <p>Thank you for joining VISA Club. To complete your registration and activate your account, please verify your email address by clicking the button below:</p>
            <a href="#" class="button">Verify Email</a>
            <p>If the button doesn't work, copy and paste the following link into your browser:</p>
            <p><a href="#">https://www.visa.bg/verify-account</a></p>
            <p>This link will expire in 48 hours for security reasons. If you didn't create an account with VISA Club, please disregard this email.</p>
            <p>Welcome to the exclusivity of success!</p>
            <p>Best regards,<br>The VISA Club Team</p>`)
}
