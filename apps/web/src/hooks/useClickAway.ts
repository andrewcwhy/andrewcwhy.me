import { onCleanup, onMount } from "solid-js";

type EventType = MouseEvent | TouchEvent;

export function useClickAway<T extends HTMLElement>(
	target: () => T | undefined,
	onClickAway: (event: EventType) => void,
) {
	onMount(() => {
		const handleClickAway = (event: EventType) => {
			const element = target();

			if (element && !element.contains(event.target as Node)) {
				onClickAway(event);
			}
		};

		document.addEventListener("mousedown", handleClickAway);
		document.addEventListener("touchstart", handleClickAway);

		onCleanup(() => {
			document.removeEventListener("mousedown", handleClickAway);
			document.removeEventListener("touchstart", handleClickAway);
		});
	});
}
