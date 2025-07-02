import type { Component } from "solid-js";

export const Footer: Component = () => {
	return (
		<footer class="w-full bg-gray-800 text-gray-200 text-center p-4 mt-auto border-t border-gray-700">
			&copy; {new Date().getFullYear()} Andrew Christian Young. All rights
			reserved.
		</footer>
	);
};
