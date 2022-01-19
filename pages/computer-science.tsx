import Link from "next/link"
import React, { useEffect, useState } from "react"
import Heading from "../components/Heading"
import Layout from "../components/Layout"
import MyLink from "../components/MyLink"
import { capitalize } from "../lib/utils"
const technologies = {
    "javascript": "Javascript was the first language I learned, and it's still my favorite language. I like how I can use it on both the frontend and the backend.",
    "python": "Python was a language that taught me how to write ergonomic and elegant code. I first entered data sicence and machine learning with python, and well written pyython code can read like english.",
    "haskell": "haskell was my introduction to functional programming. It revealed to me how mathematmical programming could be.",
    "imba": "Imba was a frontend language that inspired me to take more pride in frontend design.",
    "php": "Php is a fun language which I love because of how easy it makes web development",
    "idris": "Agda is a wonderful language which feels like a playground of mathematics. It perfectly synthesises the two disparate areas of theorem proving and programming into a cohesive and interactive experience.",
    "react": "React was my first introduction to a javascript framework. It flipped my head on what I thought was possible using javascript, and led to an entire paradigm shift. ",
    "typescript": "typescript added types to javascript, already my favorite language. The type system is very flexible, and even supports dependent types. I",
    "prolog": "Prolog is a very elegant language that first taught me the meaning of declarative programming. Prolog programs simply express rules in a similar syntax to logic, which makes the meaning apparant. ",
}
const techs = Object.entries(technologies)
const Technologies: React.FC<{}> = () => {
    const [currentTech, setCurrentTech] = useState<number>(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTech((currentTech + 1) % techs.length)
        }, 3e3)
        return () => clearInterval(interval)
    }, [currentTech])
    return <div>
        <h2 className="text-3xl">Technologies I've Used (and what I learned from each one)</h2>
        <div className="fl">
            <div className="grid grid-rows-3 grid-flow-col gap-xl w-6/12 m-auto">
                {techs.map((tech, key) => <div key={key} className={`cursor-pointer	 bg-cover hover:bg-contain duration-1000 bg-primary-${key === currentTech ? "100" : "500"} m-auto`}>
                    <img onClick={() => setCurrentTech(key)} className=" min-w-full mx-auto" src={"/images/techs/" + tech[0] + ".png"} />
                </div>)}
            </div>
            <div className="w-full  m-auto">
                <h1 className="font-bold text-4xl">{capitalize(techs[currentTech][0])}</h1>
                <div className="w-full sm:p-xl p-base">{techs[currentTech][1]}</div>
            </div>
        </div>
    </div>
}
const EPAMission: React.FC<{}> = () => {
    return <div>
        <Heading>I Teach Computer Science</Heading>
        <div className="fl">
            <div className="m-xl">
                Due to my love of computer science, I also enjoy teaching people computer science.
                For three years, I have been teaching eager students as a founding member of
                the <MyLink href="https://www.palypython.com">Paly Python Club</MyLink>.

                I have also made several <MyLink href="https://www.youtube.com/watch?v=G4ZOOrkdy3g">educational youtube videos</MyLink> in order to spread knowlege
                of computer science
            </div>
            <div className="bg-cover">
                <img src="/images/workshop.jpg" />
            </div>
        </div>
    </div>
}
const compSci: React.FC<{}> = () => {
    return <Layout>
        <Heading>My Love of Computer Science</Heading>
        <Technologies />
        <EPAMission />
    </Layout>
}
export default compSci