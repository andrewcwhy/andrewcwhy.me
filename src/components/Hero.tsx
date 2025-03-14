import Button from '@/components/form/Button'

interface HeroProps {
    title: string
    subtitle: string
    buttonText?: string
    buttonLink?: string
}

const Hero: React.FC<HeroProps> = ({
    title,
    subtitle,
    buttonText,
    buttonLink,
}) => {
    return (
        <section className="h-screen flex justify-center items-center bg-gray-900 text-white text-center">
            <div className="w-full max-w-2xl p-6 bg-gray-800 border border-gray-700 rounded shadow-lg">
                {/* Terminal header with control buttons */}
                <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <h1 className="text-4xl font-bold mb-2">{title}</h1>
                <p className="text-lg text-gray-400 mb-4">{subtitle}</p>
                {buttonText && buttonLink && (
                    <a href={buttonLink}>
                        <Button text={buttonText} />
                    </a>
                )}
            </div>
        </section>
    )
}

export default Hero
