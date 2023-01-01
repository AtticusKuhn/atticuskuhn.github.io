import { NextSeo } from 'next-seo'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import MdViewer from '../components/MdViewer'
import MyLink from '../components/MyLink'
import Area from "../components/Area"

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
    <Heading size="3xl">Learn About Me</Heading>
    <div className="p-3xl">
   <Area
    title= "Euler Math Circle Member"
     text= {`The [Euler Circle](https://eulercircle.com/) is a math circle run by Stanford
    math PhD [Simon Rubenstein-Salzedo](http://simonrs.com/). It covers interesting
    undergraduate and graduate level mathematics such as topology and
    differential geometry. Each week, Simon lecture on a subject and
    then gives a problem set with related questions.}`}
    image= "https://eulercircle.files.wordpress.com/2021/03/euler-circle6.png"
  />
  <Area
    left={true}
    title = "AIME Qualifier"
    text={`In 2022 I qualified to take the [AIME](https://www.maa.org/math-competitions/american-invitational-mathematics-examination-aime),
    a math competition for enthusiastic high schoolers. In order to qualify for AIME, I had to be
    in the top 5% of all test takers. `}
    image= "https://www.maa.org/sites/all/themes/maa/images/logo.png"
  />
    <Area
    title= "Non-Profit Website Lead"
      text={`I am a founding member of the student-run nonprofit organization
    [Paly Python](https://palypython.com/). It aims to teach all people everywhere
    the valuable skill of coding through free courses and 1-on-1 tutoring.
    In my 3 years running Paly Python, I have programed our website from
    scratch, created educational resources and videos, and taught eager
    minds of the next generation.`}
    image= "/images/team-at-workshop.jpg"
  />
  <Area
    left={true}
    title= "Paper Author"
    text={`At my time at Euler Circle, I have written one expository
    paper on a mathematical subject every quater. My subjects have ranged
    from the Perron-Frobenius Theorem to Projective Geometry. You can
    read the papers I have written on the [math](/math) section of my
    website.`}
    image="/images/complex-analysis.png"
  />
  <Area
    title= " Science Bowl President"
    text={ `I competed on behalf of my team in the [science bowl](https://science.osti.gov/wdts/nsb)
    , a buzzer based competition sponsered by the US Department of Energy to increase science
    awareness. On the team, I focused on physics, chemistry, and math problems. Our
    team made it to regionals. To find out more, go to [Our SciBowl Website](https://atticuskuhn.github.io/scibowl)`}
    image= "/images/scibowl.jpg"
    />
    <Area
    title= "National History Bowl Qualifer"
    left={true}
    text="In 2022, I represented Palo Alto High School at the national history bowl champsionships in Washington D.C. We competed against schools across the nation. We won a plaque for coming first in our divison"
    image="/images/historybowl.jpg"
      />
     <Area
        title="Math Competition Enjoyer"
       text="I am a fan of going to math competitions. In this picture, I am next to BlackPen RedPen at Berkeley Math Competition (BMT)"
       image="BMT_2022_Team.jpg"
      />
      <Area
        title="Physics Club"
    left={true}
        text="I love learning about physics. Here I am in the physics club."
        image="physics_club.jpg"
      />
      <Area
        title="Ross Program"
        text="I learned a lot of new maths at the summer Ross Mathematics Program in Ohio. It was a 6-week long intensive math camp where I made many new friends and also broadened my skills of number theory. "
        image="dsc_0119.jpg"
      />
      <Area
        title="Science Bowl"
        text="I have a lot of fun organizing science bowl. Here I am with the Palo Alto Team of 2022-2023"
    left={true}
        image="unknown (2) (1).jpg"
      />
      <Area
        title="Math Lecture Enthusiast"
        text="I like going to math lectures because I am intrigued by how broad the field of mathematics is. Here I am with Stanford Professor Andrew Hardt after he gave a talk on lattice models."
        image="lattice.jpg"
        />
      <Area
        title="Math is Fun"
        text="I not only find math informative, but also enjoyable. I like to have fun while learning math. Here I am at the Number Garden at Ohio State University while I was on the Ross Mathematics Program"
        image="PXL_20220704_230227004 (1).jpg"
    left={true}
        />
    </div>
  </Layout>
);

export default AboutPage
