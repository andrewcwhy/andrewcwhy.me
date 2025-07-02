import { type Component, children } from "solid-js";

import { JSX } from "solid-js";

export interface LabelProps {
	class?: string;
	for: string;
	children?: JSX.Element;
}

export const Label: Component<LabelProps> = (props) => (
	<label class="block mb-1" for={props.for}>
		{props.children}
	</label>
);