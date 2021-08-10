import tw from "twin.macro"
import { useState, useEffect } from 'react';

interface Props {
  messages?: string[]
}

const Announcement: React.FC<Props> = ({ messages=[] }) => {
  const [curIdx, setCurIdx] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      const newIdx = (curIdx+1) % messages.length
      setCurIdx(newIdx)
    }, 5000)
    return () => {
      clearInterval(timer)
    }
  }, [curIdx])
  return (
    <div css={tw`bg-red-200 text-gray-500 font-size[14px] font-bold text-center relative`}>
      <div css={tw`py-px px-4 w-full mx-0 my-auto cursor-pointer`}>
        <div css={tw`py-1 px-0 m-0 transition[color .2s ease-in-out] text-transform[uppercase] tracking-widest`}>
          {
            messages.map((message, idx) => (
              <span style={{ display: idx === curIdx ? 'block' : 'none' }} css={tw`whitespace-nowrap overflow-hidden overflow-ellipsis tracking-wide`} key={message}>
                <p>
                  {message}
                </p>
              </span>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Announcement
