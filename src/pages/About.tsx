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

/** Defines the shape for a section object */
interface SectionData {
    title: string
    code: string
    preview?: React.ReactNode
}

/** Props for the CopyButton component */
interface CopyButtonProps {
    copied: boolean
    onCopy: () => void
}

/**
 * A button component that triggers a copy-to-clipboard action.
 * @param copied - Indicates whether the text has been copied.
 * @param onCopy - Callback function to trigger the copy action.
 */
const CopyButton: React.FC<CopyButtonProps> = ({ copied, onCopy }) => (
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

/** Props for the TabSwitcher component */
interface TabSwitcherProps {
    activeTab: 'preview' | 'code'
    setActiveTab: (tab: 'preview' | 'code') => void
}

/**
 * A component to switch between code and preview views.
 * @param activeTab - The currently active tab.
 * @param setActiveTab - Function to update the active tab.
 */
const TabSwitcher: React.FC<TabSwitcherProps> = ({
    activeTab,
    setActiveTab,
}) => (
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

/** Props for the Section component */
interface SectionProps {
    section: SectionData
    isLast: boolean
}

/**
 * A component representing a section with code and preview tabs.
 * @param section - The section data including title, code, and optional preview.
 * @param isLast - Indicates if this is the last section (for styling purposes).
 */
const Section: React.FC<SectionProps> = ({ section, isLast }) => {
    const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')
    const [copied, setCopied] = useState<boolean>(false)

    /**
     * Handles copying the section's code to the clipboard.
     */
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
        <div className={`${isLast ? '' : 'mb-6'}`}>
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
                        <CopyButton copied={copied} onCopy={handleCopy} />
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

const github = socialLinks.github

const sections: SectionData[] = [
    {
        title: 'About Me',
        code: `
    <div class="about-me">
      <h2 class="mb-4">About Me</h2>
      <p class="mb-4">I'm Andrew, and I'm learning web development and other programming languages like Python, Java, and C.</p>
      <p class="mb-4">I'm pursuing a degree in Computer Science at UCF.</p>
    </div>`,
    },
    {
        title: 'Tech Stack',
        code: `
    <div class="tech-stack">
      <h2 class="mb-4">Tech Stack</h2>
      <h3 class="mb-2">Frontend</h3>
      <p class="mb-4">The frontend is built with React, TypeScript, Tailwind CSS, Vite.</p>
      <h3 class="mb-2">Backend:</h3>
      <p class="mb-4">There is no backend.</p>
    </div>`,
    },
    {
        title: 'Contact',
        code: `
    <div class="contact">
      <h2 class="mb-4">Follow me</h2>
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

/**
 * The About page component displaying various sections.
 */
export default function About() {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <header className="flex items-center space-x-2 border-b border-gray-700 pb-4 mb-4">
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
            </header>
            {sections.map((section, index) => (
                <Section
                    key={index}
                    section={section}
                    isLast={index === sections.length - 1}
                />
            ))}
        </div>
    )
}
