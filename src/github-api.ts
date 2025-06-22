const GITHUB_USERNAME = "andrewcwhy";
const GITHUB_API = `https://api.github.com/users/${GITHUB_USERNAME}`;

export interface User {
	login: string; // GitHub username
	name: string; // Full name
	avatar_url: string;
	bio: string;
	html_url: string; // GitHub profile URL
}
export interface Repo {
	id: number;
	name: string;
	html_url: string;
	description: string;
	language: string;
	stargazers_count: number;
	updated_at: string;
}

export const fetchRepos = async (): Promise<Repo[]> => {
	const response = await fetch(`${GITHUB_API}/repos?per_page=100`);
	if (!response.ok) {
		throw new Error("Failed to fetch GitHub repos");
	}
	return response.json();
};

export const fetchUser = async (): Promise<User> => {
	const response = await fetch(GITHUB_API);
	if (!response.ok) {
		throw new Error("Failed to fetch GitHub user");
	}
	return response.json();
};
