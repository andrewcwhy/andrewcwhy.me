export async function fetchGitHubUser(username: string) {
    const url = `https://api.github.com/users/${username}`

    try {
        const response = await fetch(url, {
            headers: {
                Accept: 'application/vnd.github.v3+json',
                'User-Agent': 'Bun/1.2.5',
            },
        })

        if (!response.ok)
            throw new Error(`GitHub API error: ${response.statusText}`)

        return await response.json()
    } catch (error) {
        console.error('Error fetching GitHub user data:', error)
        return null
    }
}
