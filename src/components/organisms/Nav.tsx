import { Link, linkOptions } from "@tanstack/solid-router";
import { type Component, For } from "solid-js";

const links = linkOptions([
	{ label: "Home", to: "/" },
	{ label: "About", to: "/about" },
	{ label: "Contact", to: "/contact" },
	{ label: "Projects", to: "/projects" },
]);

export const Nav: Component = () => {
	return (
		<nav
			class={`bg-gray-900 text-gray-200 border-b border-gray-700 fixed inset-x-0 z-50 transition-transform duration-300`}
		>
			<div class="container mx-auto px-4 py-4 flex justify-between items-center">
				<Link to="/" class="text-xl font-bold text-white">
					andrewcwhy
				</Link>

				{/* Desktop Navigation */}
				<ul class="hidden md:flex items-center gap-6">
					<For each={links}>
						{(link) => (
							<li>
								<Link {...link} class="transition-colors hover:text-blue-400">
									{link.label}
								</Link>
							</li>
						)}
					</For>
				</ul>

				{/* Mobile Toggle Button */}
				<button
					aria-label="Toggle Menu"
					class="md:hidden text-white"
					type="button"
				></button>
			</div>

			{/* Mobile Menu - overlays content */}
			<div
				class={`md:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-700 transition-all duration-300 ease-in-out
					`}
			>
				<ul class="flex flex-col p-4 gap-6">
					<For each={links}>
						{(link) => (
							<li>
								<Link {...link} class="transition-colors hover:text-blue-400">
									{link.label}
								</Link>
							</li>
						)}
					</For>
				</ul>
			</div>
		</nav>
	);
};
