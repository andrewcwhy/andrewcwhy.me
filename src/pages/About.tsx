import { useState } from "react";
import { FaBookOpen, FaTerminal, FaCode, FaEye } from "react-icons/fa";
import { socialLinks } from "@/config/social";
import SocialLinks from "@/components/SocialLinks";
import CopyButton from "@/components/CopyButton";
const github = socialLinks.github;

interface SectionData {
  title: string;
  code: string;
  preview?: React.ReactNode;
}

interface SectionProps {
  section: SectionData;
  isLast: boolean;
}

interface TabSwitcherProps {
  activeTab: "preview" | "code";
  setActiveTab: (tab: "preview" | "code") => void;
}

function TabSwitcher({ activeTab, setActiveTab }: TabSwitcherProps) {
  const handlePreviewClick = () => setActiveTab("preview");
  const handleCodeClick = () => setActiveTab("code");

  return (
    <div className="flex border-b border-gray-700 bg-gray-800 border-r border-l">
      <button
        onClick={handlePreviewClick}
        className={`px-4 py-2 text-sm ${
          activeTab !== "code"
            ? "text-blue-400 border-b-2 border-blue-400"
            : "text-gray-400"
        } hover:text-blue-300`}
      >
        <FaEye className="inline-block mr-1" /> Preview
      </button>
      <button
        onClick={handleCodeClick}
        className={`px-4 py-2 text-sm ${
          activeTab === "code"
            ? "text-blue-400 border-b-2 border-blue-400"
            : "text-gray-400"
        } hover:text-blue-300`}
      >
        <FaCode className="inline-block mr-1" /> Code
      </button>
    </div>
  );
}

function Section({ section }: SectionProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <section>
      <header className="flex items-center bg-gray-800 px-3 py-1 rounded-t-md border border-gray-700 text-sm">
        <FaTerminal className="text-green-400 mr-2" />
        <span className="text-gray-300">{section.title}</span>
      </header>
      <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="relative bg-gray-950 p-4 rounded-b-md border border-gray-700 overflow-x-auto">
        {activeTab === "code" ? (
          <>
            <pre className="text-gray-200">
              <code className="whitespace-pre-wrap">{section.code}</code>
            </pre>
            <CopyButton
              className="absolute top-2 right-2"
              textToCopy={section.code}
              showIcon={false}
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
    </section>
  );
}

export default function About() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-8">
      <header className="flex items-center space-x-2 border-b border-gray-700 pb-4">
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
  );
}

const sections: SectionData[] = [
  {
    title: "About Me",
    code: `
    <div class="about-me">
      <h2 class="mb-4">About Me</h2>
      <p class="mb-4">I'm Andrew, and I'm learning web development and other programming languages like Python, Java, and C.</p>
      <p>I'm pursuing a degree in Computer Science at UCF.</p>
    </div>`,
  },
  {
    title: "Tech Stack",
    code: `
    <div class="tech-stack">
      <h2 class="mb-4">Tech Stack</h2>
      <h3 class="mb-2">Frontend</h3>
      <p class="mb-4">The frontend is built with React, TypeScript, Tailwind CSS, Vite.</p>
      <h3 class="mb-2">Backend:</h3>
      <p>There is no backend.</p>
    </div>`,
  },
  {
    title: "Contact",
    code: `
    <div class="contact">
      <h2 class="mb-4">Follow me</h2>
      <SocialLinks showPlatform={true} showUrl={true} showIcon={true} />
    </div>`,
    preview: (
      <div className="contact">
        <h2 className="mb-4">Follow me</h2>
        <SocialLinks showPlatform={true} showUrl={true} showIcon={true} />
      </div>
    ),
  },
];
