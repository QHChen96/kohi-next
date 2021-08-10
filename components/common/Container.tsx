import tw from "twin.macro"

interface ContainerProps {}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div css={tw`sm:mb-16 xl:max-w-container relative mt-0 mx-auto`}>
      <div css={tw`flex flex-col xl:(visible w-full max-w-full mt-2)`}>
        {children}
      </div>
    </div>
  )
}

export default Container
