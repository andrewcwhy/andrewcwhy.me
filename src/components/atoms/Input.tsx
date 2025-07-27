import type { Component, JSX } from "solid-js";

export interface InputProps extends JSX.HTMLAttributes<HTMLInputElement> {}

export const Input: Component<InputProps> = (props) => (
		<input
			class="w-full bg-gray-800 text-gray-200 border border-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
			{...props}
		/>
)
