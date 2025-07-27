import {type Component, type JSX } from "solid-js";

export interface FormProps extends JSX.HTMLAttributes<HTMLFormElement> {
    class?: string;
}

export const Form: Component<FormProps> = (props) => {
    return (
        <form class="" onSubmit={}>

        </form>
    )
}