import { createFileRoute } from "@tanstack/solid-router"
import { useEffect, useState } from "react";
import type { Repo, User } from "@/github";
import { fetchRepos, fetchUser } from "@/github-api";
import PageHeader from "@/components/PageHeader";
import { FaGithub } from "react-icons/fa";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
	// This is the route's meta data. It will be used to set the page title and description.
	component: Projects,
	// This is the route's meta data. It will be used to set the page title and description.
	head: () => ({
		meta: [
			{
				title: "My Projects - Andrew Christian Young",
			},
			{
				name: "description",
				content: "My projects.",
			},
		],
	}),
});

// This is the main component for the Projects page
function Projects() {
	const [repos, setRepos] = useState<Repo[]>([]);
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		Promise.all([fetchUser(), fetchRepos()])
			.then(([userData, repoData]) => {
				setUser(userData);
				setRepos(repoData);
			})
			.catch((err) => console.error("GitHub API error:", err))
			.finally(() => setLoading(false));
	}, []);

	if (loading) return renderLoading();
	if (!user) return renderError();

	return (
		<>
			<PageHeader title="Projects" icon={FaGithub} />

			<ul className="grid md:grid-cols-2 gap-6">
				{repos.map((repo) => (
					<ProjectCard key={repo.id} repo={repo} />
				))}
			</ul>
		</>
	)
}

function renderLoading() {
	return (
		<main className="min-h-screen flex justify-center items-center text-white">
			<p>Loading projects...</p>
		</main>
	)
}

function renderError() {
	return (
		<main className="min-h-screen flex justify-center items-center text-red-500">
			<p>Failed to load GitHub user data.</p>
		</main>
	)
}

function ProjectCard({ repo }: { repo: Repo }) {
	const updatedDate = new Date(repo.updated_at).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

	return (
		<li className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow">
			<h2 className="text-xl font-semibold text-blue-300 mb-1">
				<a
					href={repo.html_url}
					target="_blank"
					rel="noopener noreferrer"
					className="hover:underline"
				>
					{repo.name}
				</a>
			</h2>
			{repo.description && (
				<p className="text-gray-400 text-sm mb-2">{repo.description}</p>
			)}
			<footer className="flex flex-col md:flex-row justify-between text-sm text-gray-500">
				<div className="flex space-x-4 mb-2 md:mb-0">
					<span>🧠 {repo.language || "N/A"}</span>
					<span>⭐ {repo.stargazers_count}</span>
				</div>
				<span>Last updated: {updatedDate}</span>
			</footer>
		</li>
	)
}
