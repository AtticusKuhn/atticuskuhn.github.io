import { GetStaticProps, InferGetStaticPropsType } from "next"
import { NextSeo } from "next-seo"
import Link from "next/link"
import React, { useState } from "react"
import Heading from "../../components/Heading"
import Input, { useInput } from "../../components/Input"
import Layout from "../../components/Layout"
import PreviewCard from "../../components/PreviewCard"
import { blog, blogPreivew, getBlogs } from "../../lib/blog"
import { compareByDate, deleteKey, randomItemsFromArray } from "../../lib/utils"



function Blog({ blogs, dateOfOldestBlog, numberOfBlogs, numberOftags, sampleTags }: InferGetStaticPropsType<typeof getStaticProps>) {
    const [searchString, searchBox] = useInput({ placeholder: "search for a blog" })
    return <>
        <Layout>
            <NextSeo
                title="my blog"
                description="where I post my articles, hear my opinions."
            />
            <Heading>my blog!</Heading>
            <p>Hear my personal thoughts on my blog. </p>
            <p> Since {new Date(dateOfOldestBlog).getFullYear()}, I have written {numberOfBlogs} blogs on {numberOftags} different subjects, ranging  from {sampleTags[0]} to {sampleTags[1]}.</p>
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
export const getStaticProps: GetStaticProps<{
    blogs: blogPreivew[],
    dateOfOldestBlog: string,
    numberOfBlogs: number,
    numberOftags: number
    sampleTags: string[]
}> = async () => {
    const blogs = getBlogs().map(b => deleteKey(b, "content"));
    const dateOfOldestBlog = blogs.sort(compareByDate)[blogs.length - 1].date;
    const numberOfBlogs = blogs.length;
    //@ts-ignore
    const tags = [...new Set(blogs.map(b => b.tags).flat(1))];
    const numberOftags = tags.length;
    const sampleTags = randomItemsFromArray(tags, 2);

    return {
        props: {
            blogs,
            dateOfOldestBlog,
            numberOfBlogs,
            numberOftags,
            sampleTags,
        }
    }
}
// export getStaticProps
export default Blog