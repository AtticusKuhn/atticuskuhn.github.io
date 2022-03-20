import { NextSeo } from 'next-seo'
import Link from 'next/link'
import React from 'react'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import MyLink from '../components/MyLink'

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
  </Layout>

)

export default AboutPage
