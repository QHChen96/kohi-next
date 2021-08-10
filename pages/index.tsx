import ButtonReact from '../components/ButtonReact'
import ButtonStyled from '../components/ButtonStyled'
import tw from 'twin.macro';


export default function Home() {
  return (
    <div css={tw`grid justify-center items-center h-screen space-y-20`}>
      <div css={tw`space-y-20`}>
        <ButtonReact>你好呀</ButtonReact>
        <ButtonStyled>加油哦</ButtonStyled>
      </div>
    </div>
  )
}
