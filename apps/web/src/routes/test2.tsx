import { createFileRoute } from "@tanstack/solid-router";
import { createSignal, For } from "solid-js";
import { Dynamic } from "solid-js/web";

const RedDiv = () => <div style="color: red">Red</div>;
const GreenDiv = () => <div style="color: green">Green</div>;
const BlueDiv = () => <div style="color: blue">Blue</div>;

export const Route = createFileRoute("/test2")({
	component: RouteComponent,
});

const options = {
	red: RedDiv,
	green: GreenDiv,
	blue: BlueDiv,
};

function RouteComponent() {
	const [selected, setSelected] = createSignal("red");

	return (
		<>
			<select
				value={selected()}
				onInput={(e) => setSelected(e.currentTarget.value)}
			>
				<For each={Object.keys(options)}>
					{(color) => <option value={color}>{color}</option>}
				</For>
			</select>
			<Dynamic component={options[selected()]} />
		</>
	);
}
