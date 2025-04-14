export interface User {
    login: string
    name: string
    avatar_url: string
    html_url: string
}
export interface Repo {
    id: number
    name: string
    html_url: string
    description: string
    language: string
    stargazers_count: number
}
