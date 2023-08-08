import { NextSeo } from "next-seo"
import React, { useEffect, useState } from "react"
import Card, { CardProps } from "../components/Card"
import Heading, { Subheading } from "../components/Heading"
import Layout from "../components/Layout"
import MyLink from "../components/MyLink"
import Latex from "react-latex"
import Area from "../components/Area"
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
    {
        image: "/images/ch.png",
        description: "The unresolvable question in set theory, and its applications",
        link: "/papers/atticus-ch.pdf",
        title: "The Continuum Hypothesis"
    },
    {
        image: "/images/factor-tree.gif",
        description: `Prof. Jim Fowler said
        "Unique factorization is a theorem that
        people are insufficiently appreciative of" `,
        link: "/papers/proving-uft.pdf",
        title: "Proof of Unique Factorization from the axioms of integers"
    },
    {
        description: "Using the denotational design technique of Conal Elliott to prove the formal correctness of computer circuits",
        link : "/papers/denotationalCircuits.pdf",
        title: "Denotational Correct Computer Arithmatic",
        image : "/images/halfadder.svg"
    },
    {
        description: "Using the denotational design technique of Conal Elliott to prove the formal correctness of computer circuits",
        link : "/papers/denotationalCircuitsTalk.pdf",
        title: "Denotational Correct Computer Arithmatic Talk",
        image : "/images/halfadder.svg"
    }
]

const MathAnimations: React.FC<{}> = () => {
    const eqns: string[] = [
        `The number \\[\\alpha=\\sum_{k=1}^\\infty 10^{-k!}\\] is transcendental. To see this, let \\[\\frac{p_n}{q_n}=\\sum_{k=1}^n 10^{-k!}\\] be the truncation of the series, so in particular $q_n=10^{n!}$. Then we have \\[\\left|\\alpha-\\frac{p_n}{q_n}\\right|=\\sum_{k=n+1}^\\infty 10^{-k!}<\\frac{2}{10^{(n+1)!}}=\\frac{2}{q_n^{n+1}}.\\] For any $c>0$ and any $d\\ge 2$, we have $\\frac{2}{q_n^{n+1}}<\\frac{c}{q_n^d}$ for all sufficiently large $n$. Thus by Liouville's Theorem, $\\alpha$ is not algebraic of degree $d$, for any $d$.`,
        ` $\\sum_{n=1}^\\infty\\frac{1}{n^2}$.

         $\\frac{\\sin(x)}{x}$, but a function can only have one. So the two must be equal. The normal power series expansion has $x^2$ coefficient $\\frac{-1}{6}$, and the expanded out product has coefficient $-\\sum_{n=1}^\\infty\\frac{1}{n^2\\pi^2}$. Thus we have \\[-\\frac{1}{6}=-\\sum_{n=1}^\\infty\\frac{1}{n^2\\pi^2}\\qquad\\Rightarrow\\qquad\\sum_{n=1}^\\infty\\frac{1}{n^2}=\\frac{\\pi^2}{6}.\\] Voila!`,
        ` Every face has at least three sides, so we have \\[ f = f_3+f_4+f_5+\\cdots, \\] \\[ 2e = 3f_3+4f_4+5f_5+\\cdots. \\] Multiplying the first equation by 3 and subtracting, we get \\[2e-3f=f_4+2f_5+\\cdots\\ge 0.\\] Now, multiplying Euler's formula by 3, we get \\[3v-3e+3f=6,\\] or \\[3v-6=3e-3f\\ge e.\\] `,
    ]
    const [eqn, setEqn] = useState<number>(0);
    const [idx, setidx] = useState<number>(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setidx(idx + 1);
            if ((idx - 10) > eqns[eqn].length) {
                console.log(idx, eqns[eqn].split(" ").length)
                setEqn((eqn + 1) % eqns.length)
                setidx(0)
            }
        }, 50)
        return () => clearInterval(interval)
    }, [eqn, idx])
    const partial = `${eqns[eqn].slice(0, idx)}`
    return <div className="text-left bg-primary-100 p-xl">
        <Latex>{partial}</Latex>
    </div>

}
const Math: React.FC<{}> = () => {
    return <Layout>
        <NextSeo
            title="math"
            description="I love math"
        />
        <Heading>Math: my Biggest Passion</Heading>
        <div>For many years, I have been passionate about mathematics. I have entered into some
            math competetions, and I study math outside of school. What I love most about it is
            its intriguing and wonderful nature.
        </div>
        <MathAnimations />
        <Subheading>Ways I enjoy mathematics</Subheading>
        <div>
            Over the years, I have experienced mathematics in many different ways. I have
            joined <MyLink href="https://eulercircle.com/">Euler Circle</MyLink>, which exposes high school students
            to undergraduate-level maths. In school, I was part of the advanced problem solving
            class, which participated in many math competetions on behalf of the school.
            I have made many friends at the <MyLink href="https://alphastar.academy/">Alphastar Camp</MyLink>.
            I enjoy comptetitions, and I have pariticpated in the <MyLink href="https://artofproblemsolving.com/wiki/index.php/AMC_12_Problems_and_Solutions">AMC 12</MyLink>
            as well as the <MyLink href="https://www.maa.org/math-competitions/american-invitational-mathematics-examination-aime">AIME</MyLink>.
            I particiapted, as well, in the <MyLink href="https://calendar.google.com/">Stanford Math Circle</MyLink>

        </div>
        <Subheading>My Favorite Areas of Math</Subheading>
        <Area
            title="Complex Analysis"
            image="/images/complex-analysis.png"
            text={`[Complex analysis is one of my favorite areas of mathematics](/blogs/complex-analysis) . It is truly beautiful and wonderfully marries complex numbers with calculus. So many of the theorems of real analysis gain new light in complex analysis`}
        />
        <Area
            title="Type Theory"
            image="/images/type-theory.png"
    text={`Type theory solidified my understanding of the relationship between computers
and mathematics, and how mathematics can directly be applied to computer science. By having
computers [execute proofs using type theory](/projects/pftb) I gained a new appreciation for rigor of proofs.`}
            left
        />
        <Area
            title="Abstract Algebra"
            image="/images/a2_graph.png"
            text="Abstract Algebra demonstrated to me that mathematics is all about abstraction. I now see groups everywhere, from vectors to the complex numbers, and I feel I can now look at the world of mathematics through the lens of groups, rings and fields."
        />
        <Subheading> Read My Papers</Subheading>
        <div className="grid md:grid-cols-4 sm:grid-cols-2  grid-cols-1 gap-4">
            {papers.map((p, i) => <Card key={i} {...p} />)}
        </div>
    </Layout>
}
export default Math
