import { AccessArgs, AccessResult } from 'payload/config'

/**
 * Restricts documents to only those where `_status` is `published`
 * if there is no user logged in.
 */
export function allowPublishedToPublic({ req }: AccessArgs): AccessResult {
    // If there is a user logged in,
    // let them retrieve all documents
    if (
        req.user ||
        req.headers['x-draft-token'] ===
            process.env.PAYLOAD_PUBLIC_WEB_DRAFT_TOKEN
    )
        return true

    // If there is no user,
    // restrict the documents that are returned
    // to only those where `_status` is equal to `published`
    return {
        _status: {
            equals: 'published',
        },
    }
}

/**
 * Allow access to all documents.
 */
export function allowAll(): AccessResult {
    return true
}

export function allowOnlyAdmin({ req }: AccessArgs): AccessResult {
    if (req.user) return true

    return false
}
