import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/about")({
	component: About,
	head: () => ({
		meta: [
			{
				title: "About Me - Andrew Christian Young",
			},
			{
				name: "description",
				content: "About me.",
			},
		],
	}),
});

function About() {
	return (
		<>
		
		</>
	);
}
