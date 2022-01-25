import React, { ReactNode, useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Button from './Button'

type Props = {
  children?: ReactNode
}

const NavLink: React.FC<{ link: string, text: string }> = ({ text, link }) => (<>
  <Link href={"/" + link}>
    <a className="mx-1 px-1">{text}</a>
  </Link>{' '}
  |{' '}
</>)
type mode = "light" | "dark"

const Footer: React.FC<{}> = () => {
  return <footer>
    <hr />
    <span>Ⓒ all rights reserved Atticus Kuhn {new Date().getFullYear()}</span>
  </footer>
}
const Layout = ({ children }: Props) => {
  const [mode, setMode] = useState<mode>("light")
  useEffect(() => {
    const m = localStorage.getItem("mode")
    if (m) {
      //@ts-ignore
      setMode(m)
    }
  }, [])
  const toggle = () => {
    const newMode = mode === "dark" ? "light" : "dark"
    setMode(newMode)
    localStorage.setItem("mode", newMode)
  }
  return <div className={mode}>
    <div className={`text-center flex flex-col w-full  bg-primary-100 text-primary-800`}>
      <header className="text-xl">
        <nav className="px-1">
          <NavLink link="" text="Home" />
          <NavLink link="blog" text="Blog" />
          <NavLink link="projects" text="My Projects" />
          <NavLink link="about" text="About" />
          <NavLink link="computer-science" text="Computer Science" />
          <NavLink link="math" text="Mathematics" />
          <NavLink link="contact" text="Contact me" />
          <Button className="p-0" onClickFunc={toggle}>{mode}</Button>
        </nav>
      </header>
      <div className="center bg-primary-200 mx-200 text-center min-h-screen		p-3xl	">
        {children}
      </div>
      <Footer />
    </div >
  </div>
}

export default Layout
