import clsx from 'clsx';
import { FC } from 'react';
import tw from 'twin.macro';


interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  layout?: string
}


const Input: FC<InputProps> = ({ className, layout='primary', children, ...props }) => {
  return (
    <input css={tw`shadow-sm p-3 focus:border-indigo-500 font-medium w-full border border-gray-300`} className={clsx(className)} {...props} />
  )
}

export default Input
