import { NextSeo } from 'next-seo'
import Link from 'next/link'
import React from 'react'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import MyLink from '../components/MyLink'
const Accomplishment: React.FC<{ a: [Date, React.ReactChild], last: number, duration: number, height: number }> = ({ a, duration, height, last }) => {
  const [date, str] = a
  return <>
    <div className="w-11/12" style={{ position: "absolute", marginTop: `${((date.getTime() - last) / duration) * height}px` }}>
      <div className="inline-block float-left" style={{ width: "80px" }}>
        {date.toLocaleDateString("en-US")}
        :</div>
      <div className="float-left rounded-full bg-primary-100 w-3xl h-3xl inline-block mx-xl my-auto	" /> <div className="inline-block sm:float-none  ml-6/12 sm:ml-0 right-0 sm:w-6/12 w-5/12">{str}</div>{ /*(date.getTime() - last) / duration*/}
    </div>
  </>
}
const TimeLine: React.FC<{}> = () => {
  const accomplishments: [Date, (React.ReactChild | string)][] = [
    ["Jan 5, 2005", "born"],
    ["Jan 15, 2010", "my 5th brithday"],
    ["Jan 15, 2011", "my 6th brithday"],
    ["Jan 15, 2012", "my 7th brithday"],
    ["Jan 15, 2013", "my 8th brithday"],
    ["Jan 1, 2022", <>Made it to nationals in <MyLink href="https://www.historybowl.com/">history bowl</MyLink></>],
    ["June 1, 2023", "Gruaduated high school"]
    //@ts-ignore
  ].map(([a, b]: [string, (React.ReactChild | string)]) => [new Date(a), b]);
  const last = accomplishments[accomplishments.length - 1][0].getTime()
  const duration = accomplishments[0][0].getTime() - last
  const height = 1000;
  return <>
    <Heading>A Timeline of my Accomplisments</Heading>
    <div className="mx-5xl" style={{ height: `${height + 70}px` }}>
      <div className="bg-primary-100 w-sm rounded absolute" style={{ height: `${height + 10}px`, marginLeft: `110px` }} />
      {accomplishments.map((a, b) => <Accomplishment a={a} key={b} last={last} duration={duration} height={height} />)}
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
    <p>Hi, I'm Atticus Kuhn, currently a student studying. My passions are computer science
      and mathematics. Feel free to check out my site to learn more about me.
    </p>
    <TimeLine />
    <div>
      <Heading>My CV</Heading>
      Check out my CV as a <MyLink href="/resume.pdf">PDF</MyLink> or  <MyLink href="/resume">Web Page</MyLink>
    </div>
  </Layout>
)

export default AboutPage
