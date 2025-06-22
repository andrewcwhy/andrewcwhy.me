import { useForm, type AnyFieldApi } from "@tanstack/solid-form";
import { createFileRoute } from "@tanstack/solid-router";

import * as z from "zod";

export const Route = createFileRoute("/contact")({
	component: Contact,
	head: () => {
		return {
			meta: [
				{
					title: "Contact - Janudocs",
				},
				{
					name: "description",
					content: "Contact Janudocs.",
				},
			],
		};
	},
});

function FieldInfo({ field }: { field: AnyFieldApi }) {
	return (
		<>
			{field.state.meta.isTouched && !field.state.meta.isValid ? (
				<p className="mt-1 text-red-600 text-sm">
					{field.state.meta.errors.map((err) => err.message).join(",")}
				</p>
			) : null}
			{field.state.meta.isValidating ? "Validating..." : null}
		</>
	);
}

const formValidation = {
	nameMax: 50,
	subject: { min: 5, max: 100 },
	message: { min: 30, max: 1000 },
};

const contactFormSchema = z.object({
	name: z
		.string()
		.min(1, "Name is required")
		.max(
			formValidation.nameMax,
			`Name must be less than ${formValidation.nameMax} characters`,
		),
	email: z.email("Invalid email address").min(1, "Email is required"),
	subject: z
		.string()
		.min(
			formValidation.subject.min,
			`Subject must be at least ${formValidation.subject.min} characters`,
		)
		.max(
			formValidation.subject.max,
			`Subject must be less than ${formValidation.subject.max} characters`,
		),
	message: z
		.string()
		.min(
			formValidation.message.min,
			`Message must be at least ${formValidation.message.min} characters`,
		)
		.max(
			formValidation.message.max,
			`Message must be less than ${formValidation.message.max} characters`,
		),
});

function Contact() {
	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
		onSubmit: async ({ value }) => {
			console.log(value);
		},
		validators: {
			onChange: contactFormSchema,
		},
	});

	return (
		<form
			className="bg-gray-300 grid grid-cols-1 gap-4 max-w-xl mx-auto p-6"
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				form.handleSubmit();
			}}
		>
			<h1 className="text-center">Contact</h1>

			<form.Field name="name">
				{(field) => (
					<div>
						<label className="block mb-1" htmlFor={field.name}>
							Name
						</label>
						<input
							className="p-2 w-full"
							id={field.name}
							name={field.name}
							onChange={(e) => field.handleChange(e.target.value)}
							type="text"
							value={field.state.value}
						/>
						<FieldInfo field={field} />
					</div>
				)}
			</form.Field>

			<form.Field name="email">
				{(field) => (
					<div>
						<label className="block mb-1" htmlFor={field.name}>
							Email
						</label>
						<input
							className="p-2 w-full"
							id={field.name}
							name={field.name}
							onChange={(e) => field.handleChange(e.target.value)}
							type="email"
							value={field.state.value}
						/>
						<FieldInfo field={field} />
					</div>
				)}
			</form.Field>

			<form.Field name="subject">
				{(field) => (
					<div>
						<label className="block mb-1" htmlFor={field.name}>
							Subject
						</label>
						<input
							className="p-2 w-full"
							id={field.name}
							name={field.name}
							onChange={(e) => field.handleChange(e.target.value)}
							type="text"
							value={field.state.value}
						/>
						<FieldInfo field={field} />
					</div>
				)}
			</form.Field>

			<form.Field name="message">
				{(field) => (
					<div>
						<label className="block mb-1" htmlFor={field.name}>
							Message
						</label>
						<textarea
							className="p-2 w-full"
							id={field.name}
							name={field.name}
							onChange={(e) => field.handleChange(e.target.value)}
							rows={5}
							value={field.state.value}
						/>
						<FieldInfo field={field} />
					</div>
				)}
			</form.Field>

			<button
				className="cursor-pointer p-4 w-full"
				onClick={form.handleSubmit}
				type="submit"
			>
				Send
			</button>
		</form>
	);
}
