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
    <p>Hi, I'm Atticus Kuhn, currently a student studying. My passions are computer science
      and mathematics. Feel free to check out my site to learn more about me.
    </p>
  </Layout>
)

export default AboutPage
