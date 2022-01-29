
import fs from "fs"
import { readMd } from "./mdutils";
import { compareByDate } from "./utils";
export type project = {
    title: string,
    date: string,
    tags: string[],
    content: string,
    slug: string,
    description: string,
    image: string,
    sourceCodeUrl: string,
    previewUrl?: string,
}

export type projectPreview = Omit<project, "content">;

const projectDir = "./data/project";
export const getProjects = (): project[] => {
    const projectsList = fs.readdirSync(projectDir)
    const projects: project[] = projectsList.map((name) => {
        const md = readMd(projectDir + "/" + name)
        return {
            content: md.content,
            date: md.headers.date,
            tags: md.headers.tags.split(","),
            title: md.headers.title,
            slug: name.split(".")[0],
            description: md.headers.description,
            image: "/images/" + md.headers.image,
            previewUrl: md.headers.previewUrl || null,
            sourceCodeUrl: md.headers.sourceCodeUrl,

        }
    })
    return projects.sort(compareByDate)
}
export const findProjectBySlug = (slug: string): project => getProjects().find(b => b.slug === slug)