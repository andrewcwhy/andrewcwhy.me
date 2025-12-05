import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRouteWithContext,
} from "@tanstack/solid-router";
import { Footer } from ":components/organisms";
import appCSS from ":styles/app.css?url";

function Root() {
	return (
		<>
			<HeadContent />
			<main class="pt-24 max-w-4xl mx-auto pb-16">
				<Outlet />
			</main>
			<Footer />
			<Scripts />
		</>
	);
}

export const Route = createRootRouteWithContext()({
	head: () => ({
		links: [{ rel: "stylesheet", href: appCSS }],
	}),
	shellComponent: Root,
});
