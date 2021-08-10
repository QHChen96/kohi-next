import clsx from 'clsx';
import { FC, useState } from 'react';
import tw, { TwStyle } from 'twin.macro';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  layout?: string
}

const styles = {
  button: tw`px-4 py-4 justify-center text-decoration[none] text-transform[uppercase] transition-all ease-in-out relative w-full font-size[1em] md:min-height[48px] letter-spacing[.5px] font-weight[800]`,
}
const layouts:Record<string, TwStyle> = {
  "primary": tw`bg-black text-white`
}

const Button: FC<ButtonProps> = ({ className, layout='primary', children, ...props }) => {
  return (
    <button className={clsx('group', className)} css={[styles.button, layouts[layout]]} {...props}>
      {children}
    </button>
  )
}

export default Button
