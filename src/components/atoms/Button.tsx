import { type Component, type JSX, mergeProps } from "solid-js";

export interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary";
}

export const Button: Component<ButtonProps> = (props) => {
	props = mergeProps({ type: "button", variant: "primary" }, props);

	const baseStyles = "px-6 py-3 font-semibold rounded-lg transition border";

	const variantStyles =
		props.variant === "primary"
			? "bg-gray-700 border-gray-600 hover:bg-gray-600 text-white"
			: "bg-gray-500 border-gray-400 hover:bg-gray-400 text-white";

	return (
		<button
			class={`${baseStyles} ${variantStyles} ${props.class ?? ""}`}
			{...props}
		>
			{props.children}
		</button>
	);
};
