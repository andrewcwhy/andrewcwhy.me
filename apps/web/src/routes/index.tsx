import { createFileRoute } from "@tanstack/solid-router";
import { Button } from ":components/atoms/Button";
import { Modal } from ":components/Modal";
import { MY } from ":constants/my";

function HomePage() {
	return (
		<section class="h-screen bg-green-400 flex justify-center items-center text-white text-center">
			<div class="w-full max-w-2xl p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
				<h1 class="text-4xl font-bold mb-2">Andrew Christian Young</h1>
				<p class="text-lg text-gray-400 mb-4">Be A.C.Y.</p>
				<p>
					<strong>A</strong>lways Curious. <strong>C</strong>onstantly Querying.{" "}
					<strong>Y</strong>ielding Insight.
				</p>
			</div>
			<Modal
				// 1. Pass in any element as the trigger
				trigger={<Button variant="primary">Open My Modal</Button>}
			>
				{/* 2. The 'children' prop is a function */}
				{({ close }) => (
					<div style={{ padding: "1rem" }}>
						<h3>My Modal Content</h3>
						<p>This is rendered inside the dialog.</p>

						{/* 3. Use the 'close' function to close the modal */}
						<Button onClick={close}>Close From Inside</Button>
					</div>
				)}
			</Modal>
		</section>
	);
}

export const Route = createFileRoute("/")({
	component: HomePage,
	head: () => ({
		meta: [
			{
				title: `${MY.fullName}`,
			},
			{
				name: "description",
				content:
					"Welcome to andrewcwhy.me, the personal website of Andrew Christian Young.",
			},
			{
				rel: "canonical",
				href: MY.url,
			},
		],
	}),
});
