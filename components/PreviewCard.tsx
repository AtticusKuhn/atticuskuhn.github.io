import Link from "next/link"
import React from "react"

type props = {
    link: string,
    image: string,
    date: string,
    description: string,
    title: string
}
const PreviewCard: React.FC<props> = ({ link, title, image, date, description }) => (<>
    <Link href={link}>
        <a className="rounded bg-primary-100 m-8 p-xl w-full flex flex-row sm:flex-col w-12/12 sm:w-5/12 mx-auto pop	">
            <div className="flex flex-col sm:flex-row w-full h-full">
                <img alt={title} className="m-0 block sm:h-6/12 sm:w-6/12 h-full w-full" src={image} />
                <div className="m-xl">
                    <div className="text-blog text-xl">{title}</div>
                    <div className="text-primary-300 text-sm">{new Date(date).toLocaleDateString("en-US")}</div>
                    <div className="text-primary-300 text-sm">{description}</div>
                </div>
            </div>
        </a>
    </Link>
</>)
export default PreviewCard