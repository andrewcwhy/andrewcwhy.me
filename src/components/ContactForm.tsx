import { useState } from "react";
import { contactFormSchema, ContactFormData } from "@/schemas/contactForm";
import ErrorMessage from "@/components/ErrorMessage";
import { z } from "zod";

function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<Record<string, string | undefined>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        // Validate the field as the user types
        const validationResult = contactFormSchema.safeParse({ ...formData, [e.target.name]: e.target.value });
        if (!validationResult.success) {
            setErrors(
                validationResult.error.flatten().fieldErrors as Record<string, string | undefined>
            );
        } else {
            setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form before submission
        const validationResult = contactFormSchema.safeParse(formData);
        if (!validationResult.success) {
            setErrors(validationResult.error.flatten().fieldErrors as Record<string, string | undefined>);
            return;
        }

        // Proceed with form submission if valid
        console.log("Form submitted successfully!", formData);
    };

    return (
        <form action="https://formsubmit.co/fc71e3e546d354d1677723661d690b4a" onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-4">
            <input type="hidden" name="_captcha" value="false" />

            <div>
                <label className="block mb-1" htmlFor="name">Name</label>
                <input
                    className="w-full border p-2 rounded-md"
                    title="Enter your name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <ErrorMessage message={errors.name} />
            </div>

            <div>
                <label className="block mb-1" htmlFor="email">Email</label>
                <input
                    className="w-full border p-2 rounded-md"
                    title="Enter a valid email address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <ErrorMessage message={errors.email} />
            </div>

            <div>
                <label className="block mb-1" htmlFor="subject">Subject</label>
                <input
                    className="w-full border p-2 rounded-md"
                    title="Enter the subject of your message"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                />
                <ErrorMessage message={errors.subject} />
            </div>
            <div>
                <label className="block mb-1" htmlFor="message">Message</label>
                <textarea
                    className="w-full border p-2 rounded-md"
                    title="Write your message here"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <ErrorMessage message={errors.message} />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition">
                Submit
            </button>
        </form>
    );
}

export default ContactForm;
