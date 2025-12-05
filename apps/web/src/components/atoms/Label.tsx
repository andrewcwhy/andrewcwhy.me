import type { Component, JSX } from "solid-js";

export interface LabelProps extends JSX.HTMLAttributes<HTMLLabelElement> {
	for: string;
}

export const Label: Component<LabelProps> = (props) => (
	<label class="block mb-1" for={props.for}>
		{props.children}
	</label>
);
