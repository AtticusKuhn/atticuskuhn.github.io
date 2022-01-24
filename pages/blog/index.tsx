import { GetStaticProps, InferGetStaticPropsType } from "next"
import { NextSeo } from "next-seo"
import Link from "next/link"
import React, { useState } from "react"
import Heading from "../../components/Heading"
import Input, { useInput } from "../../components/Input"
import Layout from "../../components/Layout"
import PreviewCard from "../../components/PreviewCard"
import { blog, getBlogs } from "../../lib/blog"



function Blog({ blogs }: InferGetStaticPropsType<typeof getStaticProps>) {
    const [searchString, searchBox] = useInput({ placeholder: "search for a blog" })
    return <>
        <Layout>
            <NextSeo
                title="my blog"
                description="where I post my articles, hear my opinions."
            />
            <Heading>my blog!</Heading>
            <p>Hear my personal thoughts on my blog.</p>
            {searchBox}
            {/* <Input value={searchString} placeholder="search for a blog..." onInput={(e) => setSearchString(e.)} /> */}
            <div className="m-1 sm:m-6">
                {blogs
                    .filter((blog) => JSON.stringify(blog).toLowerCase().includes(searchString.toLowerCase()))
                    .map((blog, index) => <PreviewCard link={`/blog/${blog.slug}`}{...blog} key={index} />)}
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