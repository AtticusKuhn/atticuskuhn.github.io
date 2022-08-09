import { NextSeo } from 'next-seo'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import MdViewer from '../components/MdViewer'
import MyLink from '../components/MyLink'

type accomplishment = {
  title: string,
  description: string,
  image: string,
}
const accomplishments: accomplishment[] = [
  {
    title: "Euler Math Circle Member",
    description: `The [Euler Circle](https://eulercircle.com/) is a math circle run by Stanford
    math PhD [Simon Rubenstein-Salzedo](http://simonrs.com/). It covers interesting
    undergraduate and graduate level mathematics such as topology and 
    differential geometry. Each week, Simon lecture on a subject and
    then gives a problem set with related questions.`,
    image: "https://eulercircle.files.wordpress.com/2021/03/euler-circle6.png",
  },
  {
    title: "AIME Qualifier",
    description: `In 2022 I qualified to take the [AIME](https://www.maa.org/math-competitions/american-invitational-mathematics-examination-aime),
    a math competition for enthusiastic high schoolers. In order to qualify for AIME, I had to be
    in the top 5% of all test takers. `,
    image: "https://www.maa.org/sites/all/themes/maa/images/logo.png",
  },
  {
    title: "Non-Profit Website Lead",
    description: `I am a founding member of the student-run nonprofit organization
    [Paly Python](https://palypython.com/). It aims to teach all people everywhere
    the valuable skill of coding through free courses and 1-on-1 tutoring.
    In my 3 years running Paly Python, I have programed our website from
    scratch, created educational resources and videos, and taught eager
    minds of the next generation.`,
    image: "/images/team-at-workshop.jpg",
  },
  {
    title: "Paper Author",
    description: `At my time at Euler Circle, I have written one expository
    paper on a mathematical subject every quater. My subjects have ranged
    from the Perron-Frobenius Theorem to Projective Geometry. You can
    read the papers I have written on the [math](/math) section of my
    website.`,
    image: "/images/complex-analysis.png",
  },
  {
    title: " Science Bowl President",
    description: `I competed on behalf of my team in the [science bowl](https://science.osti.gov/wdts/nsb)
    , a buzzer based competition sponsered by the US Department of Energy to increase science
    awareness. On the team, I focused on physics, chemistry, and math problems. Our
    team made it to regionals. To find out more, go to [Our SciBowl Website](https://atticuskuhn.github.io/scibowl)`,
    image: "/images/scibowl.jpg",
  },
  {
    title: "National History Bowl Qualifer",
    description: "In 2022, I represented Palo Alto High School at the national history bowl champsionships in Washington D.C. We competed against schools across the nation. We won a plaque for coming first in our divison",
    image: "/images/historybowl.jpg"
  }
]
interface AccomplishmentsProps {
  accomplishments: accomplishment[]
}
const Accomplishments: React.FC<AccomplishmentsProps> = ({ accomplishments }) => {
  const [index, setIndex] = useState<number>(0);
  const [scrolling, setScrolling] = useState<boolean>(true);
  const current = accomplishments[index];
  useEffect(() => {
    if (scrolling) {
      const interval = setInterval(() => {
        setIndex((index + 1) % accomplishments.length)
      }, 5e3)
      return () => clearInterval(interval);
    }
  }, [index])
  return <>
    <div className="fl">
      <div className="w-6/12">
        <Heading size="xl">{current.title}</Heading>
        <img className="w-5/12 h-5/12 m-auto p-sm" src={current.image} />
        <MdViewer markdown={current.description} />
      </div>
      <div className="w-6/12">
        {accomplishments.map((acc, i) => <>
          <div className={`cursor-pointer	 transition	 rounded ${i === index ? "bg-primary-100" : "bg-primary-300"} p-tiny w-7/12 mx-auto`} onClick={() => { setIndex(i); setScrolling(false) }}>
            {acc.title}
          </div>
        </>)}
      </div>
    </div>
  </>
}

const AboutPage: React.FC<{}> = () => (
  <Layout>
    <NextSeo
      title="About Me"
      description="Learn all about me"
    />
    <Heading>About Me</Heading>
    <div className="text-left mx-4xl">
      <p className="my-3xl">Hi, I'm Atticus Kuhn, currently a student at Palo Alto High School. My passions are computer science
        and mathematics. Feel free to check out my site to learn more about me.
      </p>
      <p>
        Please see my <MyLink href="https://www.linkedin.com/in/atticus-kuhn-a15170230/">LinkedIn profile</MyLink> to contact me.
      </p>
    </div>
    <Heading size="3xl">My Accomplishments</Heading>
    <div className="p-3xl">
      <Accomplishments
        accomplishments={accomplishments}
      />
    </div>
  </Layout>

)

export default AboutPage
