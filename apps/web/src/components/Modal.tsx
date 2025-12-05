import type { JSX } from "solid-js";
// You no longer need useClickAway for this component
// import { useClickAway } from ":/hooks/useClickAway";

type ModalProps = {
	/** The element that will open the modal */
	trigger: JSX.Element;
	/** A render function that receives a `close` prop */
	children: (props: { close: () => void }) => JSX.Element;
};

/**
 * A reusable modal component based on the HTML <dialog> element.
 */
export function Modal(props: ModalProps) {
	let dialogRef: HTMLDialogElement | undefined;

	const openModal = () => dialogRef?.showModal();
	const closeModal = () => dialogRef?.close();

	/**
	 * Closes the modal ONLY if the user clicks on the backdrop
	 * (the <dialog> element itself) and not on its content.
	 */
	const onDialogClick = (event: MouseEvent) => {
		// event.currentTarget is the <dialog>
		// event.target is the element that was actually clicked
		if (event.target === event.currentTarget) {
			closeModal();
		}
	};

	return (
		<>
			{/* 1. Wrap the trigger to add the open handler */}
			<div onClick={openModal} style={{ display: "contents" }}>
				{props.trigger}
			</div>

			{/* 2. Add the onClick handler to the dialog */}
			<dialog ref={dialogRef} onClick={onDialogClick}>
				{/* 3. Call the render prop, passing the close function */}
				{props.children({ close: closeModal })}
			</dialog>
		</>
	);
}
