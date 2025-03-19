import Hero from '@/components/Hero'

export default function Home() {
    return (
        <>
            <main className="flex flex-col min-h-screen">
                <Hero
                    title="Hey, I'm Andrew 👋"
                    subtitle="A student at UCF"
                    buttonText="Resume"
                    buttonLink="https://andrewcwhy.me/Andrew-Young-Resume.pdf"
                />
            </main>
            <div className="prose max-w-4xl">
                <h1>Hello</h1>
                <p>This is a test paragraph.</p>
                <ul>
                    <li>Item One</li>
                    <li>Item Two</li>
                </ul>
            </div>
        </>
    )
}
