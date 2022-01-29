
import fs from "fs"
import { compareByDate } from "./utils";
import { readMd } from "./mdutils";

export type blog = {
    title: string,
    date: string,
    tags: string[],
    content: string,
    slug: string,
    description: string,
    image: string,
}
export type blogPreivew = Omit<blog, "content">;


const blogDir = "./data/blog";
export const getBlogs = (): blog[] => {
    const blogsList = fs.readdirSync(blogDir)
    const blogs: blog[] = blogsList.map((name) => {
        const md = readMd(blogDir + "/" + name)
        return {
            content: md.content,
            date: md.headers.date,
            tags: md.headers.tags.split(","),
            title: md.headers.title,
            slug: name.split(".")[0],
            description: md.headers.description,
            image: "/images/" + md.headers.image
        }
    })
    return blogs.sort(compareByDate);
}
export const findBlogBySlug = (slug: string): blog => getBlogs().find(b => b.slug === slug)