import { useCopyToClipboard } from ":hooks";


import type { Component } from "solid-js";
import { FaClipboard, FaClipboardCheck } from "solid-icons/fa";

interface CopyButtonProps {
	textToCopy: string;
	children?: solidNode;
	showIcon?: boolean;
	class?: string;
}

export const CopyButton: Component<CopyButtonProps> = (props) => {
	const [isCopied, handleCopy] = useCopyToClipboard();

	return (
		<button
			class={`flex items-center gap-2 px-3 py-1.5 rounded-md border bg-gray-800 text-white hover:bg-gray-700 transition ${class}`}
			onClick={() => handleCopy(textToCopy)}
			type="button"
		>
			{showIcon &&
				(isCopied ? (
					<FaClipboardCheck class="text-green-400" />
				) : (
					<FaClipboard />
				))}
			{children && <span>{isCopied ? "Copied!" : children}</span>}
			{!children && !showIcon && (isCopied ? "Copied!" : "Copy")}
		</button>
	);
};
