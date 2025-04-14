import { Repo } from "@/types/github";

export const fetchRepos = async (): Promise<Repo[]> => {
  const res = await fetch(
    "https://api.github.com/users/andrewcwhy/repos?per_page=100",
  );
  if (!res.ok) throw new Error("Failed to fetch GitHub repos");
  return res.json();
};
