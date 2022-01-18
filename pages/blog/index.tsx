import { GetStaticProps, InferGetStaticPropsType } from "next"
import Link from "next/link"
import React from "react"
import Heading from "../../components/Heading"
import Layout from "../../components/Layout"
import { blog, getBlogs } from "../../lib/blog"

const BlogPreview: React.FC<{ blog: blog }> = ({ blog }) => (<>
    <Link href={"/blog/" + blog.slug}>
        <a className="rounded bg-primary-100 m-8 p-xl w-full flex flex-row sm:flex-col w-5/12 mx-auto hover:-translate-y-1 duration-75	">
            <div className="flex flex-col sm:flex-row w-full h-full">
                <img className="m-0 block sm:h-6/12 sm:w-6/12 h-full w-full" src={blog.image} />
                <div className="m-xl">
                    <div className="text-blog text-xl">{blog.title}</div>
                    <div className="text-primary-300 text-sm">{new Date(blog.date).toLocaleDateString("en-US")}</div>
                    <div className="text-primary-300 text-sm">{blog.description}</div>
                </div>
            </div>
        </a>
    </Link>
</>)

function Blog({ blogs }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <>
        <Layout>
            <Heading>my blog!</Heading>
            <p>Hear my personal thoughts on my blog.</p>
            <div className="m-6">
                {blogs.map((blog, index) => <BlogPreview blog={blog} key={index} />)}
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