import { GetStaticProps, InferGetStaticPropsType } from "next"
import { NextSeo } from "next-seo"
import React from "react"
import Heading from "../../components/Heading"
import { useInput } from "../../components/Input"
import Layout from "../../components/Layout"
import PreviewCard from "../../components/PreviewCard"
import { getProjects, project, projectPreview } from "../../lib/project"
import { deleteKey } from "../../lib/utils"



function Project({ projects }: InferGetStaticPropsType<typeof getStaticProps>) {
    const [searchString, searchBox] = useInput({ placeholder: "search for a blog" })
    return <>
        <Layout>
            <NextSeo
                title="my projects"
                description="see what I'm working on by checking out my projects"
            />
            <Heading>My Projects</Heading>
            <p>What have I been up to? Follow along with my progress on my coding adventure with these projects.</p>
            {searchBox}
            <div className="m-6">
                {projects
                    .filter((blog) => JSON.stringify(blog).toLowerCase().includes(searchString.toLowerCase()))
                    .map((project, index) => <PreviewCard link={`/projects/${project.slug}`} {...project} key={index} />)}
            </div>
        </Layout>
    </>
}
export const getStaticProps: GetStaticProps<{ projects: projectPreview[] }> = async () => {
    const projects = getProjects().map(b => deleteKey(b, "content"));
    return {
        props: {
            projects,
        }
    }
}
// export getStaticProps
export default Project