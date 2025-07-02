import type { Component } from "solid-js";

export interface TextAreaProps {
	name: string;
	onChange: (e: Event) => void;
	title?: string;
	value: string;
}

export const TextArea: Component<TextAreaProps> = (props) => (
	<textarea
		class="w-full bg-gray-800 text-gray-200 border border-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
		name={props.name}
		onChange={props.onChange}
		rows={5}
		title={props.title}
		value={props.value}
	></textarea>
);