import Link from 'next/link'
import React from 'react'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
const TimeLine: React.FC<{}> = () => {
  const accomplishments: [Date, string][] = [
    ["Jan 5, 2005", "born"],
    ["June 1, 2023", "gruaduated high school"]
  ].map(([a, b]) => [new Date(a), b]);
  return <>
    <Heading>A Timeline of my Accomplisments</Heading>
    {accomplishments.map(([a, b]) => <>
      {a.toLocaleDateString("en-US")}: {b}
    </>)}
  </>
}
const AboutPage: React.FC<{}> = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <Heading>About Me</Heading>
    <p>Hi, I'm Atticus Kuhn, currently a student studying. My passions are computer science
      and mathematics. Feel free to check out my site to learn more about me.
    </p>
    <TimeLine />
  </Layout>
)

export default AboutPage
