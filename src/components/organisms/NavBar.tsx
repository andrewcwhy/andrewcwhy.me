import { createSignal, onCleanup, onMount, type Component } from "solid-js";
import { Link, linkOptions } from "@tanstack/solid-router";

const options = linkOptions([
	{ label: "Home", to: "/" },
	{ label: "About", to: "/about" },
	{ label: "Contact", to: "/contact" },
	{ label: "Repos", to: "/repos" },
]);

export const NavBar: Component = () => {
	const [isMenuOpen, toggleMenu] = useToggle();
	const showNav = useHideOnScroll();
	const menuRef = useRef<HTMLDivElement>(null);

	// Close mobile menu when clicking outside
	useClickAway(menuRef, () => {
		if (isMenuOpen) toggleMenu();
	});

	return (
		<nav
			class={`bg-gray-900 text-gray-200 border-b border-gray-700 fixed inset-x-0 z-50 transition-transform duration-300 ${showNav ? "translate-y-0" : "-translate-y-full"
				}`}
		>
			<div class="container mx-auto px-4 py-4 flex justify-between items-center">
				<Link to="/" class="text-xl font-bold text-white">
					andrewcwhy
				</Link>

				{/* Desktop Navigation */}
				<ul class="hidden md:flex items-center gap-6">
					{options.map((option) => (
						<li>
							<Link
								{...option}
								class="transition-colors hover:text-blue-400"
								key={option.to}
							>
								{option.label}
							</Link>
						</li>
					))}
				</ul>

				{/* Mobile Toggle Button */}
				<button
					aria-label="Toggle Menu"
					class="md:hidden text-white"
					onClick={toggleMenu}
					type="button"
				>
					{isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
				</button>
			</div>

			{/* Mobile Menu - overlays content */}
			<div
				ref={menuRef}
				class={`md:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-700 transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
					}`}
			>
				<ul class="flex flex-col p-4 gap-6">
					{options.map((option) => {
						return (
							<li>
								<Link
									{...option}
									class="transition-colors hover:text-blue-400"
									key={option.to}
									onClick={toggleMenu}
								>
									{option.label}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};
