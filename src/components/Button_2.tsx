import { type ComponentPropsWithoutRef, type ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    href?: never
} & ComponentPropsWithoutRef<'button'>

type AnchorProps = {
    children: ReactNode;
    href?: string
} & ComponentPropsWithoutRef<'a'>

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
    return 'href' in props
}

export default function Button_2(props: ButtonProps | AnchorProps) {

    if(isAnchorProps(props)) {
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