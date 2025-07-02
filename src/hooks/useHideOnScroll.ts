import { createSignal, onCleanup, onMount } from "solid-js";

export function useHideOnScroll(
	initialValue: boolean = true,
	threshold: number = 10,
) {
	const [visible, setVisible] = createSignal(initialValue);
	let lastScrollY = 0;

	useEffect(() => {
		function handleScroll() {
			const currentY = window.scrollY;
			setIsVisible(currentY < lastScrollY || currentY < threshold);
			setLastScrollY(currentY);
		}

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY, threshold]);

	return visible;
}
