import React, { useEffect, useState } from "react"
import Heading from "../components/Heading"
import Layout from "../components/Layout"
const technologies = {
    "javascript": "Javascript was the first language I learned, and it's still my favorite language. I like how I can use it on both the frontend and the backend.",
    "python": "Python was a language that taught me how to write ergonomic and elegant code. I first entered data sicence and machine learning with python, and well written pyython code can read like english.",
    "haskell": "haskell weas my introduction to functional programming. It revealed to me how mathematmical programming could be.",
    "imba": "Imba was a frontend language that inspired me to take more pride in frontend design.s"

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
        <h2 className="text-3xl">Technologies I've Used</h2>
        <div className="flex flex-row">
            <div className="grid grid-rows-2 grid-flow-col gap-6xl">
                {techs.map((tech, key) => <img key={key} onClick={() => setCurrentTech(key)} width={key === currentTech ? "100" : "50"} height={key === currentTech ? "100" : "50"} src={"/images/techs/" + tech[0] + ".png"} />)}
            </div>
            <div className="w-full p-6xl">{techs[currentTech][1]}</div>
        </div>
    </div>
}
const compSci: React.FC<{}> = () => {
    return <Layout>
        <Heading>My Love of Computer Science</Heading>
        <Technologies />
    </Layout>
}
export default compSci