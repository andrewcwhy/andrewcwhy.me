import { useState } from 'react'
import { contactFormSchema, ContactFormData } from '@/schemas/contactForm'
import ErrorMessage from '@/components/form/ErrorMessage'
import Label from '@/components/form/Label'
import Input from '@/components/form/Input'
import TextArea from '@/components/form/TextArea'

export default function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const [errors, setErrors] = useState<Record<string, string | undefined>>({})

    /**
     * Handles changes to the input fields and updates form data.
     * Also validates input fields as the user types.
     *
     * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - The change event triggered by input fields.
     */
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

        // Validate the field as the user types
        const validationResult = contactFormSchema.safeParse({
            ...formData,
            [e.target.name]: e.target.value,
        })

        if (!validationResult.success) {
            setErrors(
                validationResult.error.flatten().fieldErrors as Record<
                    string,
                    string | undefined
                >
            )
        } else {
            setErrors((prev) => ({ ...prev, [e.target.name]: undefined }))
        }
    }

    /**
     * Handles the form submission, validating the data before submitting.
     *
     * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
     */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const validationResult = contactFormSchema.safeParse(formData)
        if (!validationResult.success) {
            setErrors(
                validationResult.error.flatten().fieldErrors as Record<
                    string,
                    string | undefined
                >
            )
            return
        }

        // Submit the form normally after validation
        e.currentTarget.submit()
    }

    return (
        <form
            action="https://formsubmit.co/acydeveloper05@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="bg-gray-950 border text-white rounded-md p-6 space-y-4 border-gray-700"
        >
            <input type="hidden" name="_captcha" value="false" />

            <div>
                <Label htmlFor="name">Name</Label>
                <Input
                    name="name"
                    onChange={handleChange}
                    title="Enter your name"
                    type="text"
                    value={formData.name}
                />
                <ErrorMessage message={errors.name} />
            </div>

            <div>
                <Label htmlFor="email">Email</Label>
                <Input
                    name="email"
                    onChange={handleChange}
                    title="Enter a valid email address"
                    type="email"
                    value={formData.email}
                />
                <ErrorMessage message={errors.email} />
            </div>

            <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                    name="subject"
                    onChange={handleChange}
                    title="Enter the subject of your message"
                    type="text"
                    value={formData.subject}
                />
                <ErrorMessage message={errors.subject} />
            </div>

            <div>
                <Label htmlFor="message">Message</Label>
                <TextArea
                    name="message"
                    onChange={handleChange}
                    title="Write your message here"
                    value={formData.message}
                />
                <ErrorMessage message={errors.message} />
            </div>

            <button
                type="submit"
                name="_next"
                value="https://andrewcwhy.me/thank-you"
                className="w-full bg-blue-400 text-gray-200 font-medium py-2 rounded-md hover:bg-blue-500 transition"
            >
                Submit
            </button>
        </form>
    )
}
