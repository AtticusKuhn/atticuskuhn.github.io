import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Heading from './Heading'
import MyLink from './MyLink'
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import Latex from "react-latex"



const MdViewer: React.FC<{ markdown: string }> = (props) => {
    return <ReactMarkdown
        className="markdown"
        children={props.markdown}
        remarkPlugins={[remarkGfm]}
        components={{
            code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                    <SyntaxHighlighter
                        children={String(children).replace(/\n$/, '')}
                        // style={dark}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                    />
                ) : (
                    <code className={className} {...props}>
                        {children}
                    </code>
                )
            },
            h1(props) {
                return <Heading {...props} size="3xl" />
            },
            h2(props) {
                return <Heading {...props} size="2xl" />
            },
            h3(props) {
                return <Heading {...props} size="xl" />
            },
            h4(props) {
                return <Heading {...props} size="lg" />
            },
            h5(props) {
                return <Heading {...props} />
            },
            h6(props) {
                return <Heading {...props} />
            },
            a(props) {
                return <MyLink {...props} href={props.href} />
            },
            li(props) {
                return <li {...props} className="list-decimal" />
            },
            table(props) {
                return <table {...props} className="" />
            }
        }}

    />
}
export default MdViewer