import { gql } from 'graphql-request'

export const FORGOT_PASSWORD_MUTATION = gql`
    mutation ForgotPasswordMutation($email: String!) {
        forgotPasswordCompany(email: $email)
    }
`
