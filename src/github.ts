// github.ts
export interface User {
	login: string;
	name: string;
	avatar_url: string;
	bio: string;
	html_url: string;
}

export interface Repo {
	id: number;
	name: string;
	html_url: string;
	description: string | null;
	language: string | null;
	updated_at: string;
}

const GITHUB_API_BASE = "https://api.github.com";
const USERNAME = "andrewcwhy";
const ORG_NAME = "janustack";

const userRepos = ["andrewcwhy.me", "fsu-nfl-bdbt-insights"];
const orgRepos = ["create-janustack", "vite-config-paths"];

/**
 * Fetches your GitHub profile (mainly to grab the exact login).
 */
export async function fetchUser(): Promise<User> {
	const res = await fetch(`${GITHUB_API_BASE}/users/${USERNAME}`);
	if (!res.ok) throw new Error("Failed to fetch GitHub user");
	return res.json();
}

/**
 * Fetches exactly the repos you listed under your user and the
 * janustack org, then sorts them by most‐recent update.
 */
export async function fetchRepos(): Promise<Repo[]> {
	const user = await fetchUser();

	const userPromises = userRepos.map((slug) =>
		fetch(`${GITHUB_API_BASE}/repos/${user.login}/${slug}`).then((res) => {
			if (!res.ok) throw new Error(`Failed to fetch repo ${slug}`);
			return res.json() as Promise<Repo>;
		}),
	);

	const orgPromises = orgRepos.map((slug) =>
		fetch(`${GITHUB_API_BASE}/repos/${ORG_NAME}/${slug}`).then((res) => {
			if (!res.ok) throw new Error(`Failed to fetch repo ${slug}`);
			return res.json() as Promise<Repo>;
		}),
	);

	const repos = await Promise.all([...userPromises, ...orgPromises]);

	return repos.sort(
		(a, b) =>
			new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
	);
}
