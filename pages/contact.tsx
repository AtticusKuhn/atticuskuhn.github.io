import { NextSeo } from "next-seo"
import Link from "next/link"
import React from "react"
import Heading from "../components/Heading"
import Layout from "../components/Layout"

const ContactMethod: React.FC<{ name: string, image: string, link: string }> = ({ name, image, link }) => (<>
    <div>
        <Link href={link}>
            <a>
                <img src={image} />
            </a>
        </Link>
        <div>
            {name}
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
            <ContactMethod image="github" link="github" name="AtticusKuhn" />
        </div>
    </Layout>
}
export default Contact