import { useEffect, useState } from "react";
import { Repo } from "@/types/github";
import { fetchRepos } from "@/api/github";

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRepos()
      .then(setRepos)
      .catch((err) => console.error("Error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white">
        <p>Loading projects...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-blue-400">
          My GitHub Projects
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ repo }: { repo: Repo }) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition">
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
      <p className="text-gray-400 text-sm mb-2">
        {repo.description || "No description available."}
      </p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>🧠 {repo.language || "N/A"}</span>
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
      </div>
    </div>
  );
}
