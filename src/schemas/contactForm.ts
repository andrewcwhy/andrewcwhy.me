import { z } from 'zod'

const NAME_MAX = 50
const EMAIL_MAX = 255
const SUBJECT_MIN = 5
const SUBJECT_MAX = 100
const MESSAGE_MIN = 30
const MESSAGE_MAX = 1000

export const contactFormSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, 'Name is required')
        .max(NAME_MAX, `Name must be at most ${NAME_MAX} characters`),
    email: z
        .string()
        .trim()
        .toLowerCase() // Ensures case-insensitive email validation
        .email('Please enter a valid email address')
        .max(EMAIL_MAX, `Email must be at most ${EMAIL_MAX} characters`),
    subject: z
        .string()
        .trim()
        .min(SUBJECT_MIN, `Subject must be at least ${SUBJECT_MIN} characters`)
        .max(SUBJECT_MAX, `Subject must be at most ${SUBJECT_MAX} characters`),
    message: z
        .string()
        .trim()
        .min(MESSAGE_MIN, `Message must be at least ${MESSAGE_MIN} characters`)
        .max(MESSAGE_MAX, `Message must be at most ${MESSAGE_MAX} characters`),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
