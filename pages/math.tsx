import React from "react"
import Card, { CardProps } from "../components/Card"
import Heading, { Subheading } from "../components/Heading"
import Layout from "../components/Layout"
import MyLink from "../components/MyLink"
const papers: CardProps[] = [
    {
        image: "/images/fsm.png",
        description: "on Automata Theory, Generating Functions, and Finite State Machines",
        link: "/papers/atticus-automata.pdf",
        title: "Automata Thoery"
    },
    {
        image: "/images/Matris.png",
        description: "Applications of the Perron Frobenius Theorem",
        link: "/papers/atticus-perronfrobenius.pdf",
        title: "Perron Frobenius Theorem"
    },
    {
        image: "/images/main.webp",
        description: "Error correcting codes as they are used, and on their derivations",
        link: "/papers/atticus-codes.pdf",
        title: "Error Correcting Codes"
    },
    {
        image: "/images/cube.jpg",
        description: "A new kind of geometry, and how constructions work in it.",
        link: "/papers/atticus-projective.pdf",
        title: "Real Projective Geometry"
    },
    {
        image: "/images/bool.png",
        description: "An introduction to Boolean Algrebras and the Stone Theorem.",
        link: "/papers/atticus-boolalgs.pdf",
        title: "Boolean Algebras"
    },
    {
        image: "/images/img_355.jpg",
        description: "How continued fractions are used in irrationality proofs",
        link: "/papers/atticus-contfrac.pdf",
        title: "Continued Fractions"
    },

    {
        image: "/images/Elliptic-Curve-Cryptography.png",
        description: "The application of ellpiptic curves to cryptography (ECC)",
        link: "/papers/atticus-ec.pdf",
        title: "Elliptic Curves In Cryptography"
    },
    {
        image: "/images/maxresdefault.jpg",
        description: "What is the impact of the most famous conjecture: the Riemann Hypothesis",
        link: "/papers/atticus-rh.pdf",
        title: "Consequences of the Riemann Hypothesis"
    },
]
const Area: React.FC<{ title: string, image: string, text: React.ReactChild, left?: boolean }> = (props) => (<>
    <Subheading size="lg">{props.title}</Subheading>
    <div className="fl my-lg">
        {props.left ? <>
            <img className="sm:h-4/12 sm:w-4/12 h-full w-full" src={props.image} />
            <div className="p-xl">{props.text}</div>
        </> : <>
            <div className="p-xl">{props.text}</div>
            <img className="sm:h-4/12 sm:w-4/12 h-full w-full" src={props.image} />
        </>}
    </div>
</>)
const Math: React.FC<{}> = () => {
    return <Layout>
        <Heading>Math: my Biggest Passion</Heading>
        <div>For many years, I haev been passionate about mathematics. I have entered into some
            math competetions, and I study math outside of school. What I love most about it is
            it's intriguing and wonderful nature
        </div>
        <Subheading>My Favorite Areas of Math</Subheading>
        <Area
            title="Complex Analysis"
            image="/images/complex-analysis.png"
            text={<><MyLink href="TODO">Complex analysis is one of my favorite areas of mathematics</MyLink> . It is truly beautiful and wonderfully marries complex numbers with calculus. So many of the theorems of real analysis gain new light in complex analysis</>}
        />
        <Area
            title="Type Theory"
            image="/images/type-theory.png"
            text={<>Type theory solidified my understanding of the relationship between computers and mathematics, and how mathematics can directly be applied to computer science. By having computers <MyLink href="/blog/pftb"> execute proofs using type theory</MyLink>, I gained a new appreciation for rigor of proofs</>}
            left
        />
        <Area
            title="Abstract Algebra"
            image="/images/a2_graph.png"
            text="Abstract Algebra demonstrated to me that mathematics is all about abstraction. I now see groups everywhere, from vectors to the complex numbers, and I feel I can now look at the world of mathematics through new sunglasses, of seeing everything in the lens of a group."
        />
        <Subheading> Read My Papers</Subheading>
        <div className="grid grid-cols-4 gap-4">
            {papers.map(p => <Card {...p} />)}
        </div>
    </Layout>
}
export default Math