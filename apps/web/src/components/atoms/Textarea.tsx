import type { Component, JSX } from "solid-js";

export interface TextAreaProps extends JSX.HTMLAttributes<HTMLTextAreaElement> {
	name: string;
	value: string;
}

export const TextArea: Component<TextAreaProps> = (props) => (
	<textarea
		class="w-full bg-gray-800 text-gray-200 border border-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
		name={props.name}
		rows={5}
	></textarea>
);
