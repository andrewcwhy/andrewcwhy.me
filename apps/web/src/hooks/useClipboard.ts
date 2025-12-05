import { createSignal } from "solid-js";

export function useCopyToClipboard(
	initialValue: boolean = false,
): [isCopied: boolean, handleCopy: (text: string) => void] {
	const [copied, setCopied] = createSignal(initialValue);

	const handleCopy = (text: string) => {
		navigator.clipboard.writeText(text).then(() => {
			setCopied(true);
			// Reset copied state after 2 seconds
			setTimeout(() => setCopied(false), 2000);
		});
	};

	return [copied, handleCopy];
}
