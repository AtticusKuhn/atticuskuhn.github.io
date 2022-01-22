import Link from "next/link"
import React from "react"

export type CardProps = {
    image: string,
    title: string,
    link: string,
    description: string,
}

const Card: React.FC<CardProps> = (props) => (<>
    <Link href={props.link}><a><div className="p-sm m-base flex flex-col bg-primary-100 rounded m-lg pop max-w-xl min-h-full	">
        <img className="p-sm mx-auto m-0 block sm:h-7/12 sm:w-7/12 h-full w-full" src={props.image} />
        <div className="font-bold">{props.title}</div>
        <div className="text-primary-300 text-xs">{props.description}</div>

    </div>
    </a>
    </Link>
</>)
export default Card