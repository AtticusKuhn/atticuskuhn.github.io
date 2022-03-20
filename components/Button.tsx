import Link from "next/link";
import React from "react";

type ButtonProps = ({
    link: string,
} & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) | ({
    onClickFunc: React.MouseEventHandler<HTMLButtonElement>
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>)


const Button: React.FC<ButtonProps> = (props) => {
    const style = (text) => `bg-button w-fit p-3 rounded m-2 text-center text-primary-300 duration-75 ${text} disabled:hover:bg-parimary-200 disabled:cursor-not-allowed`;
    if ("link" in props) {
        return <Link href={props.link}>
            <a {...props} className={style(props.className + " pop")}>
                {props.children}
            </a>
        </Link>
    } else {
        return <button {...props} className={style(props.className + " duration-200 hover:bg-primary-700")} onClick={props.onClickFunc}>
            {props.children}
        </button>
    }
}
export default Button