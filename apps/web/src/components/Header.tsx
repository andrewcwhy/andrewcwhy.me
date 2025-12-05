import type { Component } from "solid-js";

export interface HeaderProps {
	icon?: IconType;
	title: string;
}

export const Header: Component<HeaderProps> = (props) => {
	const user = "andrewcwhy";
	const repoName = `${user}.me`;
	const profileUrl = `https://github.com/${user}`;
	const fileUrl = `https://github.com/${user}/${repoName}/blob/main/src/routes/${title.toLowerCase()}.tsx`;
	const repoUrl = `https://github.com/${user}/${repoName}`;

	return (
		<header class="flex items-center gap-4 border-b-2 border-gray-700 pb-4 mb-8">
			{Icon && <Icon class="text-white w-16 h-16" />}
			<div class="flex items-baseline gap-4 text-2xl md:text-3xl font-mono font-semibold">
				<a
					href={repoUrl}
					target="_blank"
					class="text-blue-400 hover:underline"
					rel="noopener noreferrer"
					title="GitHub Profile"
				>
					{user}
				</a>
				<span class="text-gray-400">/</span>
				<h1>
					<a
						href={fileUrl}
						title="Visit the source code of this page"
						class="text-white hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						{props.title}
					</a>
				</h1>
			</div>
		</header>
	);
};
