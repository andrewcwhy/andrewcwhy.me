import { useEffect, useState } from 'react'
import { Repo, User } from '@/types/github'
import { fetchRepos, fetchUser } from '@/api/github'

export default function Projects() {
    const [repos, setRepos] = useState<Repo[]>([])
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        Promise.all([fetchUser(), fetchRepos()])
            .then(([userData, repoData]) => {
                setUser(userData)
                setRepos(repoData)
            })
            .catch((err) => console.error('GitHub API error:', err))
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return (
            <main className="min-h-screen flex justify-center items-center text-white">
                <p>Loading projects...</p>
            </main>
        )
    }

    if (!user) {
        return (
            <main className="min-h-screen flex justify-center items-center text-red-500">
                <p>Failed to load GitHub user data.</p>
            </main>
        )
    }

    const { avatar_url, html_url, login } = user

    return (
        <main className="min-h-screen text-white px-6 py-12">
            <div className="max-w-5xl mx-auto">
                <header className="flex items-center gap-4 mb-10">
                    <img
                        src={avatar_url}
                        alt={`${login}'s avatar`}
                        className="w-16 h-16 rounded-full border border-gray-700"
                    />
                    <h1 className="text-2xl md:text-3xl font-mono text-gray-200 font-semibold leading-tight">
                        <a
                            href={html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-blue-400"
                        >
                            {login}
                        </a>
                        <span className="text-gray-500 mx-1">/</span>
                        <span>
                            Projects
                        </span>
                    </h1>
                </header>

                <ul className="grid md:grid-cols-2 gap-6">
                    {repos.map((repo) => (
                        <ProjectCard key={repo.id} repo={repo} />
                    ))}
                </ul>
       </div>
        </main>
    )
}

function ProjectCard({ repo }: { repo: Repo }) {
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
            <footer className="flex justify-between text-sm text-gray-500">
                <span>🧠 {repo.language || 'N/A'}</span>
                <span>⭐ {repo.stargazers_count}</span>
            </footer>
        </li>
    )
}
