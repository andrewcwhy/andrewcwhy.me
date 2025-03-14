import { useState } from 'react'
import {
    FaBookOpen,
    FaClipboard,
    FaClipboardCheck,
    FaTerminal,
    FaCode,
    FaEye,
} from 'react-icons/fa'
import { socialLinks } from '@/config/social'
import SocialLinks from '@/components/SocialLinks'

const github = socialLinks.github

const sections = [
    {
        title: 'About Me',
        code: `
    <div class="about-me">
      <h2 class="mb-4">About Me</h2>
      <p class="mb-4">I'm Andrew, a web developer and on path to learn cybersecurity.</p>
      <p class="mb-4">Currently, I'm pursuing a degree in Computer Science at UCF.</p>
    </div>`,
    },
    {
        title: 'Tech Stack',
        code: `
    <div class="tech-stack">
      <h2 class="mb-4">Tech Stack</h2>
      <h3 class="mb-2">Frontend</h3>
      <p class="mb-4">The frontend is built with React, TypeScript, Tailwind CSS, Vite.
      <h3 class="mb-2">Backend:</h3>
      <p class="mb-4">There is no backend.</p>
      <h3 class="mb-2">Tools</h3>
      <p class="mb-4">Utilizing GitHub Actions and GitHub Pages efficient workflow from development to deployment.</p>
    </div>`,
    },
    {
        title: 'Contact',
        // Updated the code snippet to include React (JSX) code.
        code: `
    <div className="contact">
      <h2 className="mb-4">Follow me</h2>
      <SocialLinks showPlatform={true} showUrl={true} showIcon={true} />
    </div>`,
        preview: (
            <div className="contact">
                <h2 className="mb-4">Follow me</h2>
                <SocialLinks
                    showPlatform={true}
                    showUrl={true}
                    showIcon={true}
                />
            </div>
        ),
    },
]

const CopyButton = ({ text, copied, onCopy }) => (
    <button
        onClick={onCopy}
        className="absolute top-2 right-2 text-gray-400 hover:text-white transition"
    >
        {copied ? (
            <FaClipboardCheck className="text-green-400" />
        ) : (
            <FaClipboard />
        )}
    </button>
)

const TabSwitcher = ({ activeTab, setActiveTab }) => (
    <div className="flex border-b border-gray-700 bg-gray-800 border-r border-l">
        <button
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-2 text-sm ${
                activeTab !== 'code'
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-400'
            } hover:text-blue-300`}
        >
            <FaEye className="inline-block mr-1" /> Preview
        </button>
        <button
            onClick={() => setActiveTab('code')}
            className={`px-4 py-2 text-sm ${
                activeTab === 'code'
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-400'
            } hover:text-blue-300`}
        >
            <FaCode className="inline-block mr-1" /> Code
        </button>
    </div>
)

const Section = ({ section }) => {
    const [activeTab, setActiveTab] = useState('preview')
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(section.code)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy:', err)
        }
    }

    return (
        <div className="mb-6">
            <div className="flex items-center bg-gray-800 px-3 py-1 rounded-t-md border border-gray-700 text-sm">
                <FaTerminal className="text-green-400 mr-2" />
                <span className="text-gray-300">{section.title}</span>
            </div>
            <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="relative bg-gray-950 p-4 rounded-b-md border border-gray-700 overflow-x-auto">
                {activeTab === 'code' ? (
                    <>
                        <pre className="text-gray-200">
                            <code className="whitespace-pre-wrap">
                                {section.code}
                            </code>
                        </pre>
                        <CopyButton
                            text={section.code}
                            copied={copied}
                            onCopy={handleCopy}
                        />
                    </>
                ) : section.preview ? (
                    section.preview
                ) : (
                    <div
                        className="prose prose-invert max-w-none text-gray-300"
                        dangerouslySetInnerHTML={{ __html: section.code }}
                    />
                )}
            </div>
        </div>
    )
}

const About = () => {
    return (
        <div className="max-w-3xl mx-auto mt-10 p-6">
            <div className="flex items-center space-x-2 border-b border-gray-700 pb-4 mb-4">
                <FaBookOpen className="text-green-400 text-lg" />
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
                    /<span className="text-gray-400">About.tsx</span>
                </h1>
            </div>
            {sections.map((section, index) => (
                <Section key={index} section={section} />
            ))}
        </div>
    )
}

export default About
