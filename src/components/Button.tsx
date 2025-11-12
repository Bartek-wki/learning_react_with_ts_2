import { type ComponentPropsWithoutRef, type ReactNode } from "react";

type ButtonProps = {
    el: 'button';
    children: ReactNode;
} & ComponentPropsWithoutRef<'button'>

type AnchorProps = {
    el: 'anchor';
    children: ReactNode;
} & ComponentPropsWithoutRef<'a'>

export default function Button(props: ButtonProps | AnchorProps) {
    if(props.el === 'anchor') {
        const {children, ...rest} = props
        return (
            <a className="button" {...rest}>{children}</a>
        )
    }

    const {children, ...rest} = props
    return (
        <button className="button" {...rest}>{children}</button>
    )
}