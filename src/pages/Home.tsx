import Hero from '@/components/Hero'
import { Helmet } from 'react-helmet-async'

// This is the main component for the Home page
export default function Home() {
    return (
        <>
            {/* Metadata for the page */}
            <Helmet>
                <title>Andrew Christian Young</title>
                <meta name="description" content="Welcome to me" />
            </Helmet>
            <Hero
                title="Hey, I'm Andrew 👋"
                subtitle="A student at UCF"
                buttonText="Resume"
                buttonLink="https://andrewcwhy.me/Andrew-Young-Resume.pdf"
            />
        </>
    )
}
