import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const NavLink: React.FC<{ link: string, text: string }> = ({ text, link }) => (<>
  <Link href={"/" + link}>
    <a className="mx-1 px-1">{text}</a>
  </Link>{' '}
  |{' '}
</>)
const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="text-center flex flex-col w-full  ">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="text-xl">
      <nav className="px-1">

        <NavLink link="" text="Home" />
        <NavLink link="blog" text="Blog" />
        <NavLink link="projects" text="My Projects" />
        <NavLink link="about" text="About" />
        <NavLink link="computer-science" text="Computer Science" />
        <NavLink link="math" text="Mathematics" />
        <NavLink link="contact" text="Contact me" />

      </nav>
    </header>
    <div className="center bg-primary-200 mx-200 text-center min-h-screen		p-3xl	">
      {children}
    </div>
    <footer>
      <hr />
      <span>Ⓒ all rights reserved Atticus Kuhn {new Date().getFullYear()}</span>
    </footer>
  </div>
)

export default Layout
