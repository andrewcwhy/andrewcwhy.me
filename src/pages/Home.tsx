import Hero from '@/components/Hero'
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        document.title = 'Home - andrewcwhy'
    }, [])

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
        </>
    )
}
