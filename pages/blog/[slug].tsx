import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import Heading from "../../components/Heading";
import Layout from "../../components/Layout";
import MdViewer from "../../components/MdViewer";
import { blog, findBlogBySlug, getBlogs } from "../../lib/blog";


function BlogPage({ blog }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <Layout>
        <div className="container mx-auto flex content-center flex-col">
            <Heading>{blog.title}</Heading>
            <div className="text-primary-400">{blog.description}</div>
            <img className="w-6/12 h-6/12 mx-auto" src={blog.image} />
            <div className="text-sm">By Atticus Kuhn</div>
            <div className="text-sm">Published {new Date(blog.date).toLocaleDateString("en-US")}</div>
            <div className="text-sm">Tags: {blog.tags.join(", ")}</div>
        </div>
        <p className="text-justify	">
            <MdViewer markdown={blog.content} /></p>
    </Layout>
}

export const getStaticProps: GetStaticProps<{ blog: blog }, { slug: string }> = async (props) => {
    const { slug } = props.params;
    const blog = findBlogBySlug(slug)
    const reccomendedArticles = randomItemsFromArray(articlesList
        .filter(a => a.id !== params.article), 3)
    return {
        props: {
            blog,
        }
    }
}
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async (props) => {
    const blogs = getBlogs()
    return {
        paths: blogs.map(b => ({ params: { slug: b.slug } })),
        fallback: false,
    }
}
export default BlogPage