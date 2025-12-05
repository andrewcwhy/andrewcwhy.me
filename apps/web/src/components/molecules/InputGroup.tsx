import type { Component } from "solid-js";
import { Input, Label } from "../atoms";
import { FieldError } from "./FieldError";

interface InputGroupProps {
	label: string;
	name: string;
	value?: string;
	error?: string;
	type?: string;
	placeholder?: string;
}

export const InputGroup: Component<InputGroupProps> = (props) => (
	<div>
		<Label for={props.name}>{props.label}</Label>
		<Input
			name={props.name}
			type={props.type ?? "text"}
			value={props.value}
			placeholder={props.placeholder}
		/>
		<FieldError message={props.error ?? ""} />
	</div>
);
