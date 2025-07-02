import { type Component, mergeProps } from "solid-js";

export interface ButtonProps {
	onClick?: () => void;
	class?: string;
	type?: "button" | "reset" | "submit";
	variant?: "primary" | "secondary";
}

export const Button: Component<ButtonProps> = (props) => {
	props = mergeProps({ type: "button", variant: "primary" }, props)

	const baseStyles = "px-6 py-3 font-semibold rounded-lg transition border";

	const variantStyles =
		props.variant === "primary"
			? "bg-gray-700 border-gray-600 hover:bg-gray-600 text-white"
			: "bg-gray-500 border-gray-400 hover:bg-gray-400 text-white";

	return (
		<button
			class={`${baseStyles} ${variantStyles} ${class}`}
			onClick={props.onClick}
			type={props.type}
		>
			{props.children}
		</button>
	);
};
