
import fs from "fs"
export type project = {
    title: string,
    date: string,
    tags: string[],
    content: string,
    slug: string,
    description: string,
    image: string,
    sourceCodeUrl?: string,
    previewUrl?: string,
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
    console.log("m", m)
    const headers = tojson(m[0])
    const m2 = mdContent.match(/(?<=---.*?---).*/s)
    const content = m2[0]
    return {
        content,
        headers,
    }
}
const readMd = (filePath: string): parsedMd => parseMd(fs.readFileSync(filePath, "utf-8"))
const projectDir = "./data/project";
export const getProjects = (): project[] => {
    const projectsList = fs.readdirSync(projectDir)
    const projects: project[] = projectsList.map((name) => {
        const md = readMd(projectDir + "/" + name)
        console.log("md.headers.previewUrl", md.headers.previewUrl)
        return {
            content: md.content,
            date: md.headers.date,
            tags: md.headers.tags.split(","),
            title: md.headers.title,
            slug: name.split(".")[0],
            description: md.headers.description,
            image: "/images/" + md.headers.image,
            previewUrl: md.headers.previewUrl,
            sourceCodeUrl: md.headers.sourceCodeUrl,

        }
    })
    return projects
}
export const findProjectBySlug = (slug: string): project => getProjects().find(b => b.slug === slug)