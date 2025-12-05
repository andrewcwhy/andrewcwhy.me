import {
	type Component,
	type ComponentProps,
	mergeProps,
	splitProps,
} from "solid-js";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {
	variant?: keyof typeof variants;
}

const base = "cursor-pointer disabled:cursor-not-allowed";

const variants = {
	primary: "",
	secondary: "",
};

export const Button: Component<ButtonProps> = (props) => {
	const merged = mergeProps({ type: "button" } as const, props);

	const [local, rest] = splitProps(merged, ["children", "class", "variant"]);

	const classes = () =>
		twMerge(base, local.class, variants[local.variant ?? "primary"]);

	return (
		<button class={classes()} {...rest}>
			{local.children}
		</button>
	);
};
