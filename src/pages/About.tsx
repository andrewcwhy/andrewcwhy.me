import { useState } from "react";
import {
  FaBookOpen,
  FaClipboard,
  FaClipboardCheck,
  FaTerminal,
  FaCode,
  FaEye,
} from "react-icons/fa";

const sections = [
  {
    title: "About Me",
    code: `
    <div class="about-me">
      <h2 class="mb-4">About Me</h2>
      <p class="mb-4">I'm Andrew C. Young, a dedicated web developer and cybersecurity enthusiast with a passion for building modern web applications and securing digital assets.</p>
      <p class="mb-4">Currently, I'm pursuing a degree in Computer Science at UCF, where I immerse myself in both development and cybersecurity studies.</p>
      <p>My journey is all about learning, growing, and creating secure digital experiences that stand out.</p>
    </div>`,
  },
  {
    title: "Tech Stack",
    code: `
    <div class="tech-stack">
      <h2 class="mb-4">Tech Stack</h2>
      <h3 class="mb-2">Frontend</h3>
      <p class="mb-4">Our frontend is built with React, TypeScript, Tailwind CSS, and Next.js, ensuring dynamic and responsive user interfaces that provide an excellent user experience.</p>
      <h3 class="mb-2">Backend</h3>
      <p class="mb-4">We power our applications with Node.js, Express, and MongoDB to deliver fast, scalable, and robust backend solutions.</p>
      <h3 class="mb-2">Tools</h3>
      <p class="mb-4">Utilizing Vite, GitHub Actions, and Docker helps us maintain an efficient workflow from development to deployment.</p>
      <h3 class="mb-2">Cybersecurity</h3>
      <p>Our commitment to security is demonstrated through practices and tools centered around Linux, Networking, C programming, and Python.</p>
    </div>`,
  },
  {
    title: "Contact",
    code: `
    <div class="contact">
      <h2 class="mb-4">Follow me</h2>
      <p class="mb-4">Website: <a href="https://andrewcwhy.me" target="_blank" rel="noopener noreferrer">andrewcwhy.me</a></p>
      <p>GitHub: <a href="https://github.com/andrewcwhy" target="_blank" rel="noopener noreferrer">acy2k5</a></p>
</div>`,
  },
];

const CopyButton = ({ text, copied, onCopy }) => (
  <button
    onClick={onCopy}
    className="absolute top-2 right-2 text-gray-400 hover:text-white transition"
  >
    {copied ? <FaClipboardCheck className="text-green-400" /> : <FaClipboard />}
  </button>
);

const TabSwitcher = ({ activeTab, setActiveTab }) => (
  <div className="flex border-b border-gray-700 bg-gray-800">
    <button
      onClick={() => setActiveTab("preview")}
      className={`px-4 py-2 text-sm ${
        activeTab !== "code"
          ? "text-blue-400 border-b-2 border-blue-400"
          : "text-gray-400"
      } hover:text-blue-300`}
    >
      <FaEye className="inline-block mr-1" /> Preview
    </button>
    <button
      onClick={() => setActiveTab("code")}
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

const Section = ({ section }) => {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(section.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="mb-6">
      <div className="flex items-center bg-gray-800 px-3 py-1 rounded-t-md border border-gray-700 text-sm">
        <FaTerminal className="text-green-400 mr-2" />
        <span className="text-gray-300">{section.title}</span>
      </div>
      <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="relative bg-gray-950 p-4 rounded-b-md border border-gray-700 overflow-x-auto">
        {activeTab === "code" ? (
          <>
            <pre className="text-gray-200">
              <code className="whitespace-pre-wrap">{section.code}</code>
            </pre>
            <CopyButton
              text={section.code}
              copied={copied}
              onCopy={handleCopy}
            />
          </>
        ) : (
          // Render the HTML as active preview with proper paragraph spacing
          <div
            className="prose prose-invert max-w-none text-gray-300"
            dangerouslySetInnerHTML={{ __html: section.code }}
          />
        )}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 bg-gray-900 text-gray-200 p-6 rounded-lg shadow-lg font-mono">
      <div className="flex items-center space-x-2 border-b border-gray-700 pb-4 mb-4">
        <FaBookOpen className="text-green-400 text-lg" />
        <h1 className="text-lg text-gray-300">
          <a
            href="https://github.com/acy2k5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            andrewcwhy
          </a>
          /<span className="text-gray-400">about.html</span>
        </h1>
      </div>
      {sections.map((section, index) => (
        <Section key={index} section={section} />
      ))}
    </div>
  );
};

export default About;
