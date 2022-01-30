const Heading: React.FC<{ size?: string }> = ({ children, size = "4xl" }) => (<>
    <h1 className={`flex flex-col text-primary-900 text-${size} font-bold p-1`}>{children}</h1>
</>)
export const Subheading: React.FC<{ size?: string }> = ({ size = "xl", ...props }) => (<>
    <Heading size={size} {...props} />
</>)

export default Heading