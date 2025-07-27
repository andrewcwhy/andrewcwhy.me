import { createForm } from "@tanstack/solid-form";
import { createFileRoute } from "@tanstack/solid-router";
import { contactFormSchema } from ":contact.schema";
import { Button, Input, Label } from ":components/atoms";

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


function Contact() {
	const form = createForm(() => ({
		defaultValues: {
			fullName: "",
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
	}));

	return (
		<form
			class="bg-gray-300 grid grid-cols-1 gap-4 max-w-xl mx-auto p-6"
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				form.handleSubmit();
			}}
		>
			<h1 class="text-center">Contact</h1>

			<form.Field name="fullName">
				{(field) => (
					<div>
						<Label for={field().name}>Name</Label>
						<Input
							id={field().name}
							name={field().name}
							onChange={(e) => field().handleChange(e.target.value)}
							type="text"
							value={field().state.value}
						/>
					</div>
				)}
			</form.Field>

			<form.Field name="email">
				{(field) => (
					<div>
						<Label for={field().name}>Email</Label>
						<Input
							class="p-2 w-full"
							id={field().name}
							name={field().name}
							onChange={(e) => field().handleChange(e.target.value)}
							type="email"
							value={field().state.value}
						/>
					</div>
				)}
			</form.Field>

			<form.Field name="subject">
				{(field) => (
					<div>
						<Label for={field().name}>Subject</Label>
						<Input
							class="p-2 w-full"
							id={field().name}
							name={field().name}
							onChange={(e) => field().handleChange(e.target.value)}
							type="text"
							value={field().state.value}
						/>
					</div>
				)}
			</form.Field>

			<form.Field name="message">
				{(field) => (
					<div>
						<Label for={field().name}>Message</Label>
						<textarea
							class="p-2 w-full"
							id={field().name}
							name={field().name}
							onChange={(e) => field().handleChange(e.target.value)}
							rows={5}
							value={field().state.value}
						/>
					</div>
				)}
			</form.Field>

			<Button class="cursor-pointer p-4 w-full" onClick={form.handleSubmit}>
				Send
			</Button>
		</form>
	);
}
