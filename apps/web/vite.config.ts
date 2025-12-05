import { defineConfig } from "vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import contentCollections from "@content-collections/vite";
import solid from "vite-plugin-solid";
import tailwindCSS from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		tanstackRouter({ target: "solid", autoCodeSplitting: true }),
		contentCollections(),
		solid(),
		tailwindCSS(),
		tsconfigPaths(),
	],
	server: {
		port: 5079,
	},
});
