import { NextSeo } from "next-seo"
import Link from "next/link"
import React from "react"
import Heading from "../components/Heading"
import Layout from "../components/Layout"

const ContactMethod: React.FC<{ name: string, image: string, link: string, pf: string }> = ({ name, image, link, pf }) => (<>
    <div className="bg-primary-100 rounded p-sm m-sm fl w-6/12 mx-auto">
        <Link href={link}>
            <a className="bg-primary-100 pop w-full h-6/12  p-3xl sm:w-3/12 sm:h-3/12 mx-auto sm:mx-sm">
                <img className="w-full h-6/12 inline-block" src={image} />
            </a>
        </Link>
        <div className="m-auto">
            {pf}: {name}
        </div>
    </div>
</>)

const Contact: React.FC<{}> = () => {
    return <Layout>
        <NextSeo
            title="contact me"
            description="I want to get in touch with you"
        />
        <Heading>Let's get in touch</Heading>
        <p>Feel free to reach out to me for any programming, or mathematical enquiries</p>
        <div>
            <ContactMethod image="/images/linkedin.png" pf="LinkedIn" link="https://www.linkedin.com/in/atticus-kuhn-a15170230/" name="Atticus Kuhn" />
            <ContactMethod image="/images/github.png" pf="Github" link="https://github.com/AtticusKuhn" name="AtticusKuhn" />
            <ContactMethod image="/images/repl.png" pf="Repl" link="https://replit.com/@AtticusKuhn" name="@AtticusKuhn" />
            <ContactMethod image="/images/mail-512.png" pf="Email" link="mailto:atticusmkuhn@gmail.com" name="atticusmkuhn@gmail.com" />

        </div>
    </Layout>
}
export default Contact