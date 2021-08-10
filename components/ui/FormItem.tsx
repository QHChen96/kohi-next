import { FC } from 'react';
import tw from 'twin.macro';

interface FormItemProps {
  label?: string
}
const FormItem: FC<FormItemProps> = ({ children, label }) => {
  return (
    <div css={tw`mb-6 w-full`}>
      { label && (
        <label css={tw`mb-2 text-base font-medium tracking-normal inline-block cursor-pointer`}>{label}</label>
      ) || null}
      { children }
    </div>
  )
}

export default FormItem
