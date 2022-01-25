import Link from "next/link";
import React from "react";

type ButtonProps = ({
    link: string,
} | {
    onClickFunc: React.MouseEventHandler<HTMLButtonElement>
}) & React.HTMLAttributes<HTMLElement>;


const Button: React.FC<ButtonProps> = (props) => {
    const style = "bg-button w-fit p-3 rounded m-2 text-center text-primary-300 hover:-translate-y-1 duration-75";
    if ("link" in props) {
        return <Link href={props.link}>
            <a {...props} className={style + (props.style)}>
                {props.children}
            </a>
        </Link>
    } else {
        return <button {...props} className={style + (props.style)} onClick={props.onClickFunc}>
            {props.children}
        </button>
    }
}
export default Button