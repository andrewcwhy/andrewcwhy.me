import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/")({
	component: App,
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

function App() {
	return (
			<section class="h-screen flex justify-center items-center text-white text-center">
				<div class="w-full max-w-2xl p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
					<h1 class="text-4xl font-bold mb-2">Andrew Christian Young</h1>
					<p class="text-lg text-gray-400 mb-4">Be A.C.Y.</p>
					<p><strong>A</strong>lways Curious. <strong>C</strong>onstantly Querying. <strong>Y</strong>ielding Insight.</p>
				</div>
			</section>
	);
}
