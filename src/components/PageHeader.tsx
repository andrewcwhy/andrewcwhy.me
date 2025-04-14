import type { IconType } from "react-icons";

interface HeaderProps {
  icon?: IconType;
  title: string;
}

export default function PageHeader({ icon: Icon, title }: HeaderProps) {
  const user = "andrewcwhy";
  const repoName = `${user}.me`;
  const profileUrl = `https://github.com/${user}`;
  const fileUrl = `https://github.com/${user}/${repoName}/blob/main/src/pages/${title}.tsx`;
  const repoUrl = `https://github.com/${user}/${repoName}`;

  return (
    <header className="flex items-center gap-4 border-b-2 border-gray-700 pb-4 mb-8">
      {Icon && <Icon className="text-white w-16 h-16" />}
      <div className="flex items-baseline gap-4 text-2xl md:text-3xl font-mono font-semibold">
        <a
          href={repoUrl}
          target="_blank"
          className="text-blue-400 hover:underline"
          rel="noopener noreferrer"
          title="GitHub Profile"
        >
          {user}
        </a>
        <span className="text-gray-400">/</span>
        <h1>
          <a
            href={fileUrl}
            title="Visit the source code of this page"
            className="text-white hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </h1>
      </div>
    </header>
  );
}
