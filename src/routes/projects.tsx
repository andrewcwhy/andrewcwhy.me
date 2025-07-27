import { createFileRoute } from "@tanstack/solid-router";
import { type Component, For, Show, Suspense, createResource } from "solid-js";
import { type Repo, fetchRepos } from ":github";

export const Route = createFileRoute("/projects")({
	component: Repos,
	head: () => ({
		meta: [
			{ title: "Repos – Andrew Christian Young" },
			{ name: "description", content: "My projects." },
		],
	}),
});

function Repos() {
	const [repos] = createResource(fetchRepos);

	return (
		<Suspense fallback={<div>Fetching user data...</div>}>
			<ul>
				<For each={repos()}>{(repo) => <Card repo={repo} />}</For>
			</ul>
		</Suspense>
	);
}

const Card: Component<{ repo: Repo }> = ({ repo }) => {
	const formattedDate = () =>
		new Date(repo.updated_at).toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric",
		});

	return (
		<li class="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow">
			<h2 class="text-xl font-semibold text-blue-300 mb-1">
				<a
					href={repo.html_url}
					target="_blank"
					rel="noopener noreferrer"
					class="hover:underline"
				>
					{repo.name}
				</a>
			</h2>

			<Show
				when={repo.description}
				fallback={<div>No description available.</div>}
			>
				<p class="text-gray-400 text-sm mb-2">{repo.description}</p>
			</Show>

			<footer class="flex flex-col md:flex-row justify-between text-sm text-gray-500">
				<div class="flex space-x-4 mb-2 md:mb-0">
					<span>🧠 {repo.language}</span>
				</div>
				<span>Last updated: {formattedDate()}</span>
			</footer>
		</li>
	);
};
