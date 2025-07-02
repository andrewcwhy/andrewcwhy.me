import { onMount } from "solid-js";

type EventType = MouseEvent | TouchEvent;

export function useClickAway<T extends HTMLElement>(
	ref: RefObject<T | null>,
	onClickAway: (event: EventType) => void,
) {
	onMount(() => {
		function handleClickAway(event: EventType) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				onClickAway(event);
			}
		}

		document.addEventListener("mousedown", handleClickAway);
		document.addEventListener("touchstart", handleClickAway);

		return () => {
			document.removeEventListener("mousedown", handleClickAway);
			document.removeEventListener("touchstart", handleClickAway);
		};
	}, [ref, onClickAway]);
}
