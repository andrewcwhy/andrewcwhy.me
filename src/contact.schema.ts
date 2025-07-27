import * as z from "zod/v4";

const limits = {
	fullName: {
		min: 2,
		max: 64,
	},
    subject: {
        min: 8,
        max: 64,
    },
	message: {
		min: 32,
		max: 1028,
	},
};

export const contactFormSchema = z.object({
	fullName: z
		.string()
		.min(limits.fullName.min, "Name is required")
		.max(limits.fullName.max, `Name must be at most ${limits.fullName.max} characters`)
		.trim(),
	email: z.email("Email is required").trim(),
    subject: z
        .string()
        .min(limits.subject.min, `Subject must be at least ${limits.subject.min} characters`)
        .max(limits.subject.max, `Subject must be at most ${limits.subject.max} characters`)
        .trim(),
	message: z
		.string()
		.min(
			limits.message.min,
			`Message must be at least ${limits.message.min} characters`,
		)
		.max(
			limits.message.max,
			`Message must be at most ${limits.message.max} characters`,
		)
        .trim()
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;