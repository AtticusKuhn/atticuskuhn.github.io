import { NextSeo } from "next-seo"
import React, { useEffect, useState } from "react"
import Button from "../components/Button"
import CodeViewer from "../components/CodeViewer"
import Heading, { Subheading } from "../components/Heading"
import Layout from "../components/Layout"
import MyLink from "../components/MyLink"
import { capitalize } from "../lib/utils"
const technologies = {
    "javascript": "Javascript was the first language I learned, and it's still my favorite language. I like how I can use it on both the frontend and the backend.",
    "python": "Python was a language that taught me how to write ergonomic and elegant code. I first entered data sicence and machine learning with python, and well written python code can read like english.",
    "haskell": "Haskell was my introduction to functional programming. It revealed to me how mathematical programming could be.",
    "imba": "Imba was a frontend language that inspired me to take more pride in frontend design.",
    "php": "Php is a fun language which I love because of how easy it makes web development.",
    "idris": "Agda is a wonderful language which feels like a playground of mathematics. It perfectly synthesises the two disparate areas of theorem proving and programming into a cohesive and interactive experience.",
    "react": "React was my first introduction to a javascript framework. It flipped my head on what I thought was possible using javascript, and led to an entire paradigm shift.",
    "typescript": "Typescript added types to javascript, already my favorite language. The type system is very flexible, and even supports dependent types.",
    "prolog": "Prolog is a very elegant language that first taught me the meaning of declarative programming. Prolog programs simply express rules in a similar syntax to logic, which makes the meaning apparant.",
}
const techs = Object.entries(technologies)
const Technologies: React.FC<{}> = () => {
    const [currentTech, setCurrentTech] = useState<number>(0)
    const [isScrolling, setIsScrolling] = useState<boolean>(true)
    useEffect(() => {
        const interval = setInterval(() => {
            if (isScrolling) {
                setCurrentTech((currentTech + 1) % techs.length)
            }
        }, 10e3)
        return () => clearInterval(interval)
    }, [currentTech, isScrolling])
    return <div>
        <NextSeo
            title="computer science"
            description="I love computer science. Learn all about it."
        />
        <h2 className="text-3xl">Technologies I've Used (and what I learned from each one)</h2>
        <div className="fl">
            <div className="grid grid-rows-3 grid-flow-col gap-xl w-6/12 m-auto">
                {techs.map((tech, key) => <div key={key} className={`cursor-pointer	 bg-cover hover:bg-contain duration-1000 bg-primary-${key === currentTech ? "100" : "500"} m-auto`}>
                    <img onClick={() => { setCurrentTech(key); setIsScrolling(false) }} className=" min-w-full mx-auto" src={"/images/techs/" + tech[0] + ".png"} />
                </div>)}
            </div>
            <div className="w-full  m-auto">
                <h1 className="font-bold text-4xl">{capitalize(techs[currentTech][0])}</h1>
                <div className="w-full sm:p-xl p-base">{techs[currentTech][1]}</div>
                {/* <div className="fl center items-center	mx-auto w-full"> */}
                <Button className="px-xl" onClickFunc={() => { setCurrentTech((currentTech + techs.length - 1) % techs.length); setIsScrolling(false) }}>
                    Back
                </Button>
                <Button className="px-xl" onClickFunc={() => { setCurrentTech((currentTech + 1) % techs.length); setIsScrolling(false) }}>
                    Next
                </Button>
                {/* </div> */}
            </div>
        </div>
    </div>
}
const EPAMission: React.FC<{}> = () => {
    return <div>
        <Heading>I Teach Computer Science</Heading>
        <div className="fl">
            <div className="m-xl">
                Due to my love of computer science, I have taught many students in languages such as Javascript and HTML.
                I taught at 2 programming workshops and a summer camp.
                For three years, I have been teaching eager students as a founding member of
                the <MyLink href="https://www.palypython.com">Paly Python Club</MyLink>.

                I have also made several <MyLink href="https://www.youtube.com/watch?v=G4ZOOrkdy3g">educational youtube videos</MyLink> in order to spread knowlege
                of computer science.
            </div>
            <div className="bg-cover">
                <img src="/images/workshop.jpg" />
            </div>
        </div>
    </div>
}
const sleep = (time: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, time));
const Animation: React.FC<{}> = () => {
    const codes = [
        `
        const startDate = "July 2019"
        return \`I have been coding for \${new Date().getFullYear() - new Date(startDate).getFullYear()} years!\`
        `,
        `const languages = ["javascript","python", "php", "haskell", "java", "scala", "prolog", "idris"]
        return \`I know \${languages.length} different languages, ranging from \${languages[0]} to \${languages[languages.length - 1]}. They include \${languages.join(", ")}\`
        `,
        `return fetch("https://api.github.com/users/AtticusKuhn").then(req=>req.json()).then((json)=>{
        return \`I have created \${json["public_repos"]} repositiories on Github\`});`,
        `return \`This page has recieved \${getViews()} views so far.\``,
    ]
    const [currentCode, setCurrentCode] = useState<number>(0)
    const [val, setVal] = useState<string>("")
    const [evalled, setEvalled] = useState<string>("")
    const [isAnimating, setIsAnimating] = useState<boolean>(true)
    useEffect(() => {
        //@ts-ignore
        window.getViews = () => Math.floor(0.0000001 * (new Date().getTime() - new Date("1/29/22").getTime()));
        (async () => {
            setIsAnimating(true)
            let sliceacc = val.length
            while (sliceacc > 1) {
                await sleep(5)
                setVal(val.slice(0, sliceacc))
                sliceacc--
            }
            let acc = 0
            while (acc <= codes[currentCode].length) {
                await sleep(5)
                setVal(codes[currentCode].slice(0, acc))
                acc += 1
            }
            setIsAnimating(false)
            setEvalled(await evalCode(codes[currentCode]))
        })()
    }, [currentCode])
    const evalCode = async (val) => {
        try {
            return await new (Object.getPrototypeOf(async function () { }).constructor)(val)()
        } catch (e) {
            return e
        }
    }
    return <>
        <Subheading>My Story of Computer Science</Subheading>
        <div className="fl">
            <CodeViewer wrapLongLines wrapLines className="h-full py-0 my-0 sm:w-6/12 w-full" language="javascript" inline={false} children={val} />
            <div className="bg-primary-100 font-lg sm:w-6/12 w-full">
                <div className="mx-auto my-auto">{evalled}</div>
            </div>
        </div>
        <Button disabled={isAnimating} onClickFunc={() => setCurrentCode((currentCode + 1) % codes.length)}>Next</Button>
    </>
}

const compSci: React.FC<{}> = () => {
    return <Layout>
        <Heading>My Love of Computer Science</Heading>
        <Animation />
        <Technologies />
        <EPAMission />
    </Layout>
}
export default compSci