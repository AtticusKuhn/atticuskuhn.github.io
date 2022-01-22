import { NextSeo } from "next-seo"
import React from "react"
import Heading from "../components/Heading"
import Layout from "../components/Layout"
import MyLink from "../components/MyLink"

const NotFound: React.FC<{}> = () => {
    return <Layout>
        <NextSeo
            title="Page not found (404 error)"
            description="the page you request could not be found by our servers."
        />
        <Heading>Page not found (404 Error)</Heading>
        <div>The page you requested could not be found.Try</div>
        <div className="mx-auto items-center place-content-center">
            <ol className="list-disc w-6/12 mx-auto items-center	place-content-center	">
                <li>Checking the spelling in the url</li>
                <li><MyLink href="/contact">Contact me about the error</MyLink></li>
            </ol>
        </div>

    </Layout>
}
export default NotFound