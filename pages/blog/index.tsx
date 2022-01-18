import { GetStaticProps, InferGetStaticPropsType } from "next"
import Link from "next/link"
import React from "react"
import Heading from "../../components/Heading"
import Layout from "../../components/Layout"
import { blog, getBlogs } from "../../lib/blog"

const BlogPreview: React.FC<{ blog: blog }> = ({ blog }) => (<>
    <Link href={"/blog/" + blog.slug}>
        <a className="rounded bg-primary-100 m-8 p-xl w-full">
            <div>
                <img width="100" height="100" src={blog.image} />
            </div>
            {blog.title}
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