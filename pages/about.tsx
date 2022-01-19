import Link from 'next/link'
import React from 'react'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import MyLink from '../components/MyLink'
const TimeLine: React.FC<{}> = () => {
  const accomplishments: [Date, string][] = [
    ["Jan 5, 2005", "born"],
    ["Jan 15, 2010", "my 5th brithdat"],
    ["Jan 15, 2011", "my 6th brithdat"],
    ["Jan 15, 2012", "my 7th brithdat"],
    ["Jan 15, 2013", "my 8th brithdat"],
    ["Jan 15, 2014", "my 9th brithdat"],

    ["June 1, 2023", "gruaduated high school"]
  ].map(([a, b]) => [new Date(a), b]);
  const last = accomplishments[accomplishments.length - 1]
  const duration = accomplishments[0][0].getTime() - last[0].getTime()
  const height = 300
  return <>
    <Heading>A Timeline of my Accomplisments</Heading>
    <div style={{ height: `${height + 30}px` }}>
      {accomplishments.map(([a, b]) => <div className="mx-auto" style={{ position: "absolute", marginTop: `${((a.getTime() - last[0].getTime()) / duration) * height}px` }}>
        {a.toLocaleDateString("en-US")}: {b}: {(a.getTime() - last[0].getTime()) / duration}
      </div>)}
    </div>
  </>
}
const AboutPage: React.FC<{}> = () => (
  <Layout title="About | Next.js + TypeScript Example">
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
