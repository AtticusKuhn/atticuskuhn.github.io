import { Subheading } from "./Heading"
import MdViewer from "./MdViewer"
const Area: React.FC<{ title: string, image: string, text: React.ReactChild, left?: boolean }> = (props) => (<>
    <Subheading size="lg">{props.title}</Subheading>
    <div className="fl my-lg">
        {props.left ? <>
            <img className="sm:h-4/12 sm:w-4/12 h-full w-full" src={props.image} />
            {/*@ts-ignore*/}
            <div className="p-xl"><MdViewer markdown={props.text} /></div>
        </> : <>
            {/*@ts-ignore*/}
            <div className="p-xl"><MdViewer markdown={props.text} /></div>
            <img className="sm:h-4/12 sm:w-4/12 h-full w-full" src={props.image} />
        </>}
    </div>
</>)
export default Area;
