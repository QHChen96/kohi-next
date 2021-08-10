import clsx from 'clsx';
import { FC, useState } from 'react';
import tw, { TwStyle } from 'twin.macro';

interface BlankButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

const styles = {
  button: tw`inline text-black whitespace-nowrap relative border-0 rounded-none appearance-none focus:(outline-none text-opacity-70) mx-1 mb-4 px-2`,
}


const BlankButton: FC<BlankButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={clsx('group', className)} css={[styles.button]} {...props}>
      {children}
    </button>
  )
}

export default BlankButton
