import type { Component } from "solid-js";

const currentYear = new Date().getFullYear();

export const Footer: Component = () => {
	return (
		<footer class="w-full bg-gray-800 text-gray-200 text-center p-4 mt-auto border-t border-gray-700">
			<p>&copy; {currentYear} Andrew Christian Young. All rights</p>
		</footer>
	);
};
