export interface User {
    login: string // GitHub username
    name: string // Full name
    avatar_url: string
    bio: string
    html_url: string // GitHub profile URL
}
export interface Repo {
    id: number
    name: string
    html_url: string
    description: string
    language: string
    stargazers_count: number
    updated_at: string
}
