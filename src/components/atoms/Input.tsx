import { type Component, mergeProps } from "solid-js";

export interface InputProps {
	id?: string;
	name?: string;
	onChange?: (e: Event) => void;
	title?: string;
	type?: string;
	value: string;
}

export const Input: Component<InputProps> = (props) => {
	props = mergeProps({ type: "text" }, props);

	return (
		<input
			class="w-full bg-gray-800 text-gray-200 border border-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
			id={props.name}
			name={props.name}
			onChange={props.onChange}
			title={props.title}
			type={props.type}
			value={props.value}
		/>
	);
};
