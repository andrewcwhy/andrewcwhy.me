import { useEffect, useState } from 'react'
import { Repo, User } from '@/types/github'
import { fetchRepos, fetchUser } from '@/api/github'
import { Helmet } from 'react-helmet-async'
import PageHeader from '@/components/PageHeader'
import { FaGithub } from 'react-icons/fa'

// This is the main component for the Projects page
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

    if (loading) return renderLoading()
    if (!user) return renderError()

    return (
        <>
            {/* Metadata for the page */}
            <Helmet>
                <title>Projects - Andrew Christian Young</title>
                <meta name="description" content="My projects" />
            </Helmet>

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
