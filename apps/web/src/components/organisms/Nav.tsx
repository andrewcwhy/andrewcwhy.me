import { Link } from "@tanstack/solid-router";
import {
	type VoidComponent,
	For,
	Show,
	createSignal,
	createEffect,
	onCleanup,
	onMount,
} from "solid-js";
import { Menu, X } from "lucide-solid";

const links = [
	{ to: "/", label: "Home" },
	{ to: "/about", label: "About Me" },
	{ to: "/contact", label: "Contact Me" },
	{ to: "/projects", label: "Projects" },
];

export const Nav: VoidComponent = () => {
	const [open, setOpen] = createSignal(false);

	// Lock body scroll when menu is open
	createEffect(() => {
		if (open()) {
			const prev = document.body.style.overflow;
			document.body.style.overflow = "hidden";
			onCleanup(() => (document.body.style.overflow = prev));
		}
	});

	// Close on Escape
	const onKey = (e: KeyboardEvent) => {
		if (e.key === "Escape") setOpen(false);
	};

	// Close menu if viewport grows to md or larger
	const onResize = () => {
		if (window.innerWidth >= 768) setOpen(false);
	};

	onMount(() => {
		window.addEventListener("keydown", onKey);
		window.addEventListener("resize", onResize);
	});

	onCleanup(() => {
		window.removeEventListener("keydown", onKey);
		window.removeEventListener("resize", onResize);
	});

	return (
		<nav class="bg-gray-900 text-gray-200 border-b border-gray-700 fixed inset-x-0 z-50">
			<div class="container mx-auto px-4 py-4 flex justify-between items-center">
				<Link to="/" class="text-xl font-bold text-white">
					andrewcwhy
				</Link>
				{/* Desktop navigation */}
				<ul class="hidden md:flex items-center gap-6">
					<For each={links}>
						{(link) => (
							<li>
								<Link
									activeProps={{
										class: "text-cyan-400 font-semibold",
									}}
									class="transition-colors hover:text-blue-400"
									to={link.to}
								>
									{link.label}
								</Link>
							</li>
						)}
					</For>
				</ul>
				{/* Toggle button */}
				<button
					aria-controls="mobile-menu"
					aria-expanded={open()}
					aria-label={open() ? "Close menu" : "Open menu"}
					class="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
					onClick={() => setOpen((prev) => !prev)}
					type="button"
				>
					<Show when={open()} fallback={<Menu size={24} />}>
						<X size={24} />
					</Show>
				</button>
			</div>
			{/* Mobile menu */}
			<Show when={open()}>
				<aside
					aria-hidden={!open()}
					class="md:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-700
               transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden
               max-h-0 opacity-0 data-[open=true]:max-h-[75vh] data-[open=true]:opacity-100"
					classList={{
						// Mobile menu open
						"translate-x-0": open(),
						// Mobile menu closed
						"-translate-x-full": !open(),
					}}
					id="mobile-menu"
				>
					{/* Mobile navigation */}
					<ul class="flex flex-col p-4 gap-6">
						<For each={links}>
							{(link) => (
								<li>
									<Link
										activeProps={{
											class:
												"flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2",
										}}
										class="block w-full transition-colors hover:text-blue-400"
										onClick={() => setOpen(false)}
										to={link.to}
									>
										{link.label}
									</Link>
								</li>
							)}
						</For>
					</ul>
				</aside>
			</Show>
		</nav>
	);
};
