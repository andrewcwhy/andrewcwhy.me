import { type Component, Show } from "solid-js";

export interface ErrorMessageProps {
	message?: string;
};

export const ErrorMessage: Component<ErrorMessageProps> = (props) => (
	<Show when={props.message}>
		<p class="mt-1 text-sm text-red-500">{props.message}</p>;
	</Show>
)
