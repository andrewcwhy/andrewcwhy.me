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
			{
				style: "body { background-color: #1a202c; color: #cbd5e1; }",
			}
		],
	}),
});

function About() {
	return (
		<>
			<PageHeader title="About" icon={FaBook} />

			<div class="flex flex-col gap-8">
				{sections.map((section, index) => (
					<Section
						key={index}
						section={section}
						isLast={index === sections.length - 1}
					/>
				))}
			</div>
		</>
	);
}