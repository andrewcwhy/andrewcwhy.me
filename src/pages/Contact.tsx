import ContactForm from '@/components/ContactForm'
import { MdEmail } from "react-icons/md";
import { socialLinks } from '@/config/social'
import SocialLinks from '@/components/SocialLinks'

const github = socialLinks.github

export default function Contact() {
    return (
        <section className="max-w-3xl mx-auto p-6">
            <header className="flex items-center space-x-2 border-b border-gray-700 pb-4 mb-4">
                <MdEmail className="text-green-400 text-lg" />
                <h1 className="text-lg text-gray-300">
                    <a
                        href={github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                        title="Visit my GitHub profile"
                    >
                        {github.username}
                    </a>
                    /<span className="text-gray-400">Contact.tsx</span>
                </h1>
            </header>
            <ContactForm />
        </section>
    )
}
