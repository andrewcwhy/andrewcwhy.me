import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/Hero";

export const Route = createFileRoute("/")({
	// This is the route's meta data. It will be used to set the page title and description.
	component: Home,
	// This is the route's meta data. It will be used to set the page title and description.
	head: () => ({
		meta: [
			{
				title: "Andrew Christian Young",
			},
			{
				name: "description",
				content:
					"Welcome to andrewcwhy.me, the personal website of Andrew Christian Young.",
			},
		],
	}),
});

function Home() {
	return (
		<>
			<Hero
				title="Hey, I'm Andrew 👋"
				subtitle="A student at UCF"
				buttonText="Resume"
				buttonLink="https://andrewcwhy.me/Andrew-Young-Resume.pdf"
			/>
		</>
	);
}
