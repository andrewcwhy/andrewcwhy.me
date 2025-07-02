import { createSignal } from "solid-js";

export function useToggle(
	initialValue: boolean = false,
): [toggled: boolean, handleToggle: () => void] {
	const [toggled, setToggled] = createSignal(initialValue);

	// This function will toggle the value between true and false
	const handleToggle = () => {
		setToggled((prev) => !prev);
	};

	return [toggled, handleToggle];
}
