import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Layout from "../../components/Layout";
import MdViewer from "../../components/MdViewer";
import { findProjectBySlug, getProjects, project } from "../../lib/project";


function ProjectPage({ project }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <Layout>
        <NextSeo
            title={project.title}
            description={project.description}
            openGraph={{
                title: `PROJECT | ${project.title}`,
                description: project.description
                ,
                url: `https://atticuskuhn.github.io/projects/${project.slug}`,
                type: 'article',
                article: {
                    publishedTime: new Date(project.date).toISOString(),
                    authors: ["https://atticuskuhn.github.io"],
                    tags: project.tags,
                },
                images: [{ url: project.image, },],
            }}
            additionalLinkTags={[
                {
                    rel: 'icon',
                    href: project.image,
                },
            ]}
        />
        <div className="container mx-auto flex content-center flex-col my-3xl">
            <Heading>{project.title}</Heading>
            <div className="fl mx-auto">
                {project.previewUrl && <Button link={project.previewUrl}>Try the Demo</Button>}
                <Button link={project.sourceCodeUrl}>See the Source Code</Button>
            </div>
            <div className="text-primary-400">{project.description}</div>
            <img alt={project.title} title={project.title} className="w-6/12 h-6/12 mx-auto" src={project.image} />
            <div className="text-sm">By Atticus Kuhn</div>
            <div className="text-sm">Published {new Date(project.date).toLocaleDateString("en-US")}</div>
            <div className="text-sm">Tags: {project.tags.join(", ")}</div>
        </div>
        <p className="text-justify my-3xl w-10/12 sm:w-8/12  mx-auto">
            <MdViewer markdown={project.content} />
        </p>
    </Layout>
}

export const getStaticProps: GetStaticProps<{ project: project }, { slug: string }> = async (props) => {
    const { slug } = props.params;
    const project = findProjectBySlug(slug)
    return {
        props: {
            project,
        }
    }
}
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async (props) => {
    const projects = getProjects()
    return {
        paths: projects.map(b => ({ params: { slug: b.slug } })),
        fallback: false,
    }
}
export default ProjectPage