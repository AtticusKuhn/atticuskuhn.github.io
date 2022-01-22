import { GetStaticProps, InferGetStaticPropsType } from "next"
import { NextSeo } from "next-seo"
import Link from "next/link"
import React from "react"
import Heading from "../../components/Heading"
import Layout from "../../components/Layout"
import PreviewCard from "../../components/PreviewCard"
import { blog, getBlogs } from "../../lib/blog"



function Blog({ blogs }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <>
        <Layout>
            <NextSeo
                title="my blog"
                description="where I post my articles, hear my opinions."
            />
            <Heading>my blog!</Heading>
            <p>Hear my personal thoughts on my blog.</p>
            <div className="m-1 sm:m-6">
                {blogs.map((blog, index) => <PreviewCard link={`/blog/${blog.slug}`}{...blog} key={index} />)}
            </div>
        </Layout>
    </>
}
export const getStaticProps: GetStaticProps<{ blogs: blog[] }> = async () => {
    const blogs = getBlogs()
    return {
        props: {
            blogs
        }
    }
}
// export getStaticProps
export default Blog