// import Link from 'next/link'
import Button from '../components/Button'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <div className="font-bold text-xl">
      Hello, my name is Atticus Kuhn
    </div>
    <div className="flex flex-col  sm:flex-row">
      <div className="p-3xl">
        <img width="500" height="500" src="/images/atticus-kuhn.jpg" />
      </div>
      <div className="p-3xl">
        <p className="p-3xl">Hello, my name is Atticus Kuhn. I am currently a student. My passions include programming
          and mathematics. Feel free to check out my blog or my projects to see what I'm up to.
        </p>
        <div className="flex flex-col ">
          <Button link="/about">Learn more about me &gt;&gt;</Button>
          <Button link="/projects">See my projects &gt;&gt;</Button>
          <Button link="/blog">Hear my opinions &gt;&gt;</Button>
          <Button link="/math">Learn about my passions &gt;&gt;</Button>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
