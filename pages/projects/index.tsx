import { GetStaticProps, InferGetStaticPropsType } from "next"
import React from "react"
import Heading from "../../components/Heading"
import Layout from "../../components/Layout"
import PreviewCard from "../../components/PreviewCard"
import { getProjects, project } from "../../lib/project"



function Blog({ projects }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <>
        <Layout>
            <Heading>My Projects</Heading>
            <p>What have I been up to? Follow along with my progress on my coding adventure with these projects.</p>
            <div className="m-6">
                {projects.map((project, index) => <PreviewCard link={`/projects/${project.slug}`} {...project} key={index} />)}
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