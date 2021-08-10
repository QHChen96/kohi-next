import clsx from 'clsx';
import React, { FC, useCallback } from 'react';
import tw, { TwStyle } from 'twin.macro';
import { IconClose } from './icon';

interface FilterButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

const styles = {
  button: tw`text-gray-700 text-sm uppercase whitespace-nowrap tracking-wide inline-flex outline-none relative items-center border-0 overflow-visible border-transparent focus:outline-none appearance-none cursor-pointer rounded-3xl bg-gray-200 py-3 pl-4 pr-9 font-semibold mx-1 mb-4`,
}

const FilterButton: FC<FilterButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={clsx('group', className)} css={[styles.button]} {...props}>
      {children}
      <span css={tw`font-bold absolute inline-flex items-center justify-center right-1 rounded-full w-7 h-7 group-hover:(bg-gray-300)`}>
        <IconClose size={10} />
      </span>
    </button>
  )
}

export default FilterButton
