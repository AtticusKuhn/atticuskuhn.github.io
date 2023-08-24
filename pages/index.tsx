// import Link from 'next/link'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import { blog, getBlogs } from '../lib/blog'
import { getProjects, project } from '../lib/project'
import { compareByDate } from '../lib/utils'

function IndexPage({ recent }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <Layout>
    <NextSeo
      title="home"
      description="My name is Atticus Kuhn, and welcome to my website to learn about me."
    />
    <Heading>
      Hello, my name is Atticus Kuhn
    </Heading>
    <div className="flex flex-col  sm:flex-row">
      <div className="p-3xl">
        <img width="500" height="500" src="/images/atticus-kuhn.jpg" />
      </div>
      <div className="p-3xl">
        <p className="p-3xl">Hello, my name is Atticus Kuhn. I am currently an undergraduate student studying Computer Science at Trinity College, Cambridge . My passions include programming
          and mathematics. Feel free to check out my blog or my projects to see what I am up to.
        </p>
        <div className="flex flex-col ">
          <Button link="/about">Learn more about me &gt;&gt;</Button>
          <Button link="/projects">See my projects &gt;&gt;</Button>
          <Button link="/blog">Hear my opinions &gt;&gt;</Button>
          <Button link="/math">Learn about my passions &gt;&gt;</Button>
        </div>
      </div>
    </div>
    <Heading>My Recent Activity</Heading>
    <div className="grid md:grid-cols-5 sm:grid-cols-1 gap-4">
      {recent.map((rec) => <Card {...rec} link={rec.link} />)}
    </div>
  </Layout>
}
export const getStaticProps: GetStaticProps<{ recent: ((blog | project) & { link: string })[] }> = async (props) => {
  return {
    props: {
      recent: [...getBlogs().map(b => Object.assign(b, { link: `/blog/${b.slug}` })), ...getProjects().map(b => Object.assign(b, { link: `/projects/${b.slug}` }))].sort(compareByDate).slice(0, 5)
    }
  }
}


export default IndexPage
