import Link from "next/link"
import React from "react"

type linkprops = { href: string } & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

const MyLink: React.FC<linkprops> = (props) => {
    return <Link href={props.href}>
        <a {...props} className="rounded bg-primary-300 p-1 m-1 hover:translate-y-3 translate-y-3 duration-75">
            {props.children}
        </a>
    </Link>
}
export default MyLink