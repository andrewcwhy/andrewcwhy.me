import { z } from 'zod'

export const contactFormSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, 'Name is required')
        .max(50, 'Name must be less than or equal to 50 characters'),
    email: z
        .string()
        .trim()
        .email('Please enter a valid email address')
        .max(255, 'Email must be less than or equal to 255 characters'),
    subject: z
        .string()
        .trim()
        .min(5, 'Subject must be at least 5 characters')
        .max(100, 'Subject must be less than or equal to 100 characters'),
    message: z
        .string()
        .trim()
        .min(30, 'Message must be at least 30 characters long')
        .max(1000, 'Message must be less than or equal to 1000 characters'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
