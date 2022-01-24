import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";

type inputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
const Input: React.FC<inputProps> = (props) => {
    return <input {...props} className="w-5/12 h-full p-tiny bg-primary-300 active:bg-primary-500 focus:outline-none text-primary-100 border-primary-400 rounded m-sm" />
}
export function useInput(props: inputProps): [string, ReactElement] {
    //@ts-ignore
    const [value, setValue] = useState<string>(props.value || "");
    const input = <Input value={value} onChange={e => setValue(e.target.value)} {...props} />;
    return [value, input];
}
export default Input