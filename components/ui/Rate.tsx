import clsx from 'clsx';
import { FC } from 'react';
import tw from 'twin.macro';
import { IconStar } from './icon';


interface RateProps {
  score: number
  size?: 's' | 'm' | 'l'
}

interface RateItemProps {
  state: 'full' | 'half' | 'none'

}

const RateItem: FC<RateItemProps> = ({ state }) => {
  return (
    <li css={tw`relative inline-block not-last-of-type:mr-1 cursor-pointer`}>
      <div css={[tw`absolute top-0 left-0 w-1/2 h-full overflow-hidden opacity-0 text-black hidden`, 'half' == state && tw`inline-block opacity-100!`]}>
        <IconStar />
      </div>
      <div css={['half' == state && tw`text-gray-200`, 'none' == state && tw`text-gray-200`]}>
        <IconStar />
      </div>
    </li>
  )
}

const Rate: FC<RateProps> = ({ score, size='m' }) => {
  return (
    <ul css={[tw`box-border inline-block m-0 p-0 outline-none list-none text-black leading-none`, size === 's' && tw`font-size[14px]`, size === 'm' && tw`font-size[20px]`, size === 'l' && tw`font-size[26px]`]}>
      {
        [1,2,3,4,5].map((i) => (
          <RateItem key={i} state={ i <= score ? 'full' : (i - 0.5) <= score ? 'half' : 'none' } />
        ))
      }
    </ul>
  )
}


export default Rate



