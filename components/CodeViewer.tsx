import React, { useEffect } from "react";
// import Prism from "../public/scripts/prism.js"
import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter'

type props = {
    inline: boolean;
} & React.HTMLAttributes<HTMLElement> & SyntaxHighlighterProps;
const CodeViewer: React.FC<props> = ({ language, inline, children, ...props }) => {
    return !inline && language ? (
        <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            language={language}
            PreTag="div"
            customStyle={{
                margin: "0px",
                padding: "10px 0px"
            }}
            {...props}
        />
    ) : (
        <code {...props}>
            {children}
        </code>
    )
};
// const CodeViewer: React.FC<props> = (props) => {
//     let { children, language } = props
//     children = children ?? ""
//     children = children.trim()
//     const className = `language-${language}`
//     useEffect(() => {
//         Prism.highlightAll()
//         console.log("useEffect")
//         return () => {
//             console.log("unmount")
//         }
//     }, [props])
//     return (<>
//         <pre>
//             <code className={className}>
//                 {children}
//             </code>
//         </pre>
//     </>)
// }
export default CodeViewer