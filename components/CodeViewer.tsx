import { useEffect } from "react";
import Prism from "../public/scripts/prism.js"

interface props {
    language: string;
    children: string;
}
const CodeViewer: React.FC<props> = (props) => {
    let { children, language } = props
    children = children ?? ""
    children = children.trim()
    const className = `language-${language}`
    useEffect(() => {
        Prism.highlightAll()
        console.log("useEffect")
        return () => {
            console.log("unmount")
        }
    }, [props])
    return (<>
        <pre>
            <code className={className}>
                {children}
            </code>
        </pre>
    </>)
}
export default CodeViewer