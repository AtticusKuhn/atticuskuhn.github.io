import { GetStaticProps, InferGetStaticPropsType } from "next"
import Link from "next/link"
import React from "react"
import Heading from "../../components/Heading"
import Layout from "../../components/Layout"
import { blog, getBlogs } from "../../lib/blog"
import { getProjects, project } from "../../lib/project"

const ProjectPreview: React.FC<{ project: project }> = ({ project }) => (<>
    <Link href={"/project/" + project.slug}>
        <a className="rounded bg-primary-100 m-8 p-xl w-full flex flex-row sm:flex-col w-5/12 mx-auto hover:-translate-y-1 duration-75	">
            <div className="flex flex-col sm:flex-row w-full h-full">
                <img className="m-0 block sm:h-6/12 sm:w-6/12 h-full w-full" src={project.image} />
                <div className="m-xl">
                    <div className="text-blog text-xl">{project.title}</div>
                    <div className="text-primary-300 text-sm">{new Date(project.date).toLocaleDateString("en-US")}</div>
                    <div className="text-primary-300 text-sm">{project.description}</div>
                </div>
            </div>
        </a>
    </Link>
</>)

function Blog({ projects }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <>
        <Layout>
            <Heading>My Projects</Heading>
            <p>What have I been up to? Follow along with my progress on my coding adventure with these projects.</p>
            <div className="m-6">
                {projects.map((project, index) => <ProjectPreview project={project} key={index} />)}
            </div>
        </Layout>
    </>
}
export const getStaticProps: GetStaticProps<{ projects: project[] }> = async () => {
    const projects = getProjects()
    return {
        props: {
            projects
        }
    }
}
// export getStaticProps
export default Blog