import { createBaseEmail } from './create-base-email'

export function createForgotPassword(user: string) {
    return createBaseEmail(`
            <p>Dear ${user},</p>
            <p>We received a request to reset your password for your VISA Club account. If you did not make this request, please ignore this email.</p>
            <p>To reset your password, please click the button below:</p>
            <a href="#" class="button">Reset Password</a>
            <p>If the button doesn't work, copy and paste the following link into your browser:</p>
            <p><a href="#">https://www.visa.bg/reset-password</a></p>
            <p>This link will expire in 24 hours for security reasons.</p>
            <p>Best regards,<br>The VISA Club Team</p>`)
}
