import { type Component, type JSX, Show } from "solid-js";

export interface FieldErrorProps
	extends JSX.HTMLAttributes<HTMLParagraphElement> {
	message: string;
}

export const FieldError: Component<FieldErrorProps> = (props) => (
	<Show when={props.message}>
		<p class="mt-1 text-sm text-red-500">{props.message}</p>
	</Show>
);
