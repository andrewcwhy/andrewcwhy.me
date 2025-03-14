import Hero from '@/components/Hero'
import SocialLinks from '@/components/SocialLinks'

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
        </>
    )
}
