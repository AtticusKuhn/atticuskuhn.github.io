import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { BlogJsonLd, NextSeo } from "next-seo";
import Link from "next/link";
import React from "react";
import Card from "../../components/Card";
import Heading from "../../components/Heading";
import Layout from "../../components/Layout";
import MdViewer from "../../components/MdViewer";
import { blog, findBlogBySlug, getBlogs } from "../../lib/blog";
import { randomItemsFromArray } from "../../lib/utils";


function BlogPage({ blog, reccomendedBlog }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <Layout>
        <NextSeo
            title={blog.title}
            description={blog.description}
            openGraph={{
                title: `BLOG | ${blog.title}`,
                description: blog.description,
                url: `https://atticuskuhn.github.io/blog/${blog.slug}`,
                type: 'article',
                article: {
                    publishedTime: new Date(blog.date).toISOString(),
                    authors: ["https://atticuskuhn.github.io"],
                    tags: blog.tags,
                },
                images: [
                    {
                        url: blog.image,
                    },
                ],
            }}
            additionalLinkTags={[
                {
                    rel: 'icon',
                    href: blog.image,
                },
            ]}
        />
        <BlogJsonLd
            url={`https://atticuskuhn.github.io/blog/${blog.slug}`}
            title={blog.title}
            images={[blog.image]}
            datePublished={new Date(blog.date).toISOString()}
            dateModified={new Date(blog.date).toISOString()}
            authorName="Atticus Kuhn"
            description={blog.description}
        />
        <div className="container mx-auto flex content-center flex-col my-3xl">
            <Heading>{blog.title}</Heading>
            <div className="text-primary-400">{blog.description}</div>
            <img alt={blog.title} title={blog.title} className="w-6/12 h-6/12 mx-auto" src={blog.image} />
            <div className="text-sm">By Atticus Kuhn</div>
            <div className="text-sm">Published {new Date(blog.date).toLocaleDateString("en-US")}</div>
            <div className="text-sm">Tags: {blog.tags.join(", ")}</div>
        </div>
        <p className="text-justify my-3xl w-10/12 sm:w-8/12 mx-auto">
            <MdViewer markdown={blog.content} />
        </p>
        <div>
            <div className="text-lg font-bold"> Reccomended Articles</div>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
                {reccomendedBlog.map((rec) => <Card {...rec} link={`/blog/${rec.slug}`} />)}
            </div>
        </div>
    </Layout>
}

export const getStaticProps: GetStaticProps<{ blog: blog, reccomendedBlog: blog[] }, { slug: string }> = async (props) => {
    const { slug } = props.params;
    const blog = findBlogBySlug(slug)
    const reccomendedBlog = randomItemsFromArray(getBlogs()
        .filter(a => a.slug !== slug), 3)
    return {
        props: {
            blog,
            reccomendedBlog,
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
