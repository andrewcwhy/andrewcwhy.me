import { HeadContent, Outlet, createRootRoute } from "@tanstack/solid-router";
import { Footer, Nav, NotFound } from ":components/organisms";

export const Route = createRootRoute({
	component: Root,
	notFoundComponent: () => <NotFound />,
});

function Root() {
	return (
		<>
			<HeadContent />
			<Nav />
			<main class="pt-24 max-w-4xl mx-auto pb-16">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
