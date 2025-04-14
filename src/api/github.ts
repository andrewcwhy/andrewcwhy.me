import { Repo, User } from "@/types/github";

const GITHUB_USERNAME = "andrewcwhy";
const GITHUB_API = `https://api.github.com/users/${GITHUB_USERNAME}`;

export const fetchRepos = async (): Promise<Repo[]> => {
  const res = await fetch(`${GITHUB_API}/repos?per_page=100`);
  if (!res.ok) throw new Error("Failed to fetch GitHub repos");
  return res.json();
};

export const fetchUser = async (): Promise<User> => {
  const res = await fetch(GITHUB_API);
  if (!res.ok) throw new Error("Failed to fetch GitHub user");
  return res.json();
};
