
import fs from "fs"
export type blog = {
    title: string,
    date: string,
    tags: string[],
    content: string,
    slug: string,
    description: string,
    image: string,
}
type parsedMd = {
    content: string,
    headers: {
        [key: string]: string
    }
}
const tojson = (str: string): { [prop: string]: string } =>
    str
        .split("\n")
        .map((line) => line.split(":"))
        .reduce((acc, [key, val]) => Object.assign(acc, { [key]: val.trim() }), {})

const parseMd = (mdContent: string): parsedMd => {
    const m = mdContent.match(/(?<=---\n).*?(?=\n---)/s)
    const headers = tojson(m[0])
    const m2 = mdContent.match(/(?<=---.*?---).*/s)
    const content = m2[0]
    return {
        content,
        headers,
    }
}
const readMd = (filePath: string): parsedMd => parseMd(fs.readFileSync(filePath, "utf-8"))
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
    return blogs
}
export const findBlogBySlug = (slug: string): blog => getBlogs().find(b => b.slug === slug)