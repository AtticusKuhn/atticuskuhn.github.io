import { NextSeo } from "next-seo"
import Link from "next/link"
import React from "react"
import Heading from "../components/Heading"
import Layout from "../components/Layout"

const ContactMethod: React.FC<{ name: string, image: string, link: string, pf: string }> = ({ name, image, link, pf }) => (<>
    <div className="bg-primary-100 rounded p-sm m-5xl fl w-6/12 mx-auto">
        <Link href={link}>
            <a className="bg-primary-100 pop w-full h-full  p-3xl sm:w-3/12 sm:h-3/12 mx-auto sm:mx-sm">
                <img className="w-full h-full inline-block" src={image} />
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
            <ContactMethod image="/images/github.png" pf="github" link="https://github.com/AtticusKuhn" name="AtticusKuhn" />
            <ContactMethod image="/images/repl.png" pf="repl" link="https://replit.com/@AtticusKuhn" name="@AtticusKuhn" />
        </div>
    </Layout>
}
export default Contact