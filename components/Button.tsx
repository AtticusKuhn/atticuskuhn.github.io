import Link from "next/link";
import React from "react";

type ButtonProps = ({
    link: string,
} | {
    onClickFunc: React.MouseEventHandler<HTMLButtonElement>
}) & React.HTMLAttributes<HTMLElement>;


const Button: React.FC<ButtonProps> = (props) => {
    const style = "bg-button w-fit p-3 rounded m-2 text-center text-primary-300 duration-75";
    if ("link" in props) {
        return <Link href={props.link}>
            <a {...props} className={style + (props.style) + " pop"}>
                {props.children}
            </a>
        </Link>
    } else {
        return <button {...props} className={style + (props.style) + " duration-200 hover:bg-primary-700"} onClick={props.onClickFunc}>
            {props.children}
        </button>
    }
}
export default Button