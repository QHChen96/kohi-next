import { IconAccount, IconBag, IconSearch } from "components/ui/icon"
import tw from "twin.macro"
import Image from 'next/image'
import Link from 'next/link'
import SearchOverlay from './SearchOverlay';
import React, { useState } from 'react';

export interface NavMenuType {
  menuId: number | string;
  menuName: string
  handle: string
  ads?: NavMenuAd[]
  subMenus?: NavMenuType[]
}
interface NavMenuAd {
  imageUrl: string
  title: string
}
interface Props {
  className?: string
  navMenus?: NavMenuType[]
}

const Header: React.FC<Props> = ({ className, children, navMenus=[] }) => {
  const [searchShow, setSearchShow] = useState(false)
  return (
    <>
      { searchShow && <SearchOverlay onClose={()=> setSearchShow(false)}/> }
      <div css={tw`sticky w-full top-0 left-0 z-20 bg-white text-gray-800`}>
        <header css={tw`block bg-white text-gray-700`}>
          <div css={tw`py-1 px-6 transition-opacity flex items-center justify-between`}>
            <div css={tw`block w-200px`}></div>
            <div css={tw`flex flex-1 flex-grow-0`}>
              <div css={tw`relative`}>
                <a href="">
                  <div css={tw`font-size[38px] padding[8px] letter-spacing[16px]`}>
                    KOHI
                  </div>
                </a>
              </div>
            </div>
            <div css={tw`block w-200px`}>
              <nav css={tw`block`}>
                <ul css={tw`list-none whitespace-nowrap text-right`}>
                  <li css={tw`inline-block mx-4 cursor-pointer`} onClick={() => setSearchShow(true)}>
                    <IconSearch size={28} />
                  </li>
                  <li css={tw`inline-block mx-4 cursor-pointer`}>
                    <IconAccount size={28} />
                  </li>
                  <li css={tw`inline-block mx-4 cursor-pointer`}>
                    <IconBag size={28} />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div css={tw`py-1 px-6 transition-opacity flex items-center justify-between border-b-2 relative`}>
            <div css={tw`block w-50px`}></div>
            <div css={tw`flex flex-1`}>
              <nav css={tw`w-full text-center block`}>
                <ul css={tw`mx-0 p-0 list-none`}>
                  {
                    navMenus.map(navMenu => (
                      <li className="group" key={navMenu.menuId} css={tw`inline-block font-medium mb-4 mt-2 cursor-pointer tracking-wide mx-6 hover:visible`}>
                        <Link href={`/collections/${navMenu.handle}`} >
                          <a css={tw`font-size[15px] font-extrabold relative`}>
                            {navMenu.menuName}
                            <span css={tw`z-10 font-size[15px] block select-none pointer-events-none absolute top-full w-full left-0 text-transparent invisible group-hover:visible transition-transform duration-300 ease-in origin-center border-b-2 border-gray-700`}>
                            {navMenu.menuName}
                            </span>
                          </a>
                        </Link>
                        {
                          navMenu.subMenus && (
                            <div css={tw`max-h-menu absolute py-5 px-0 w-full top-full left-0 invisible opacity-0 overflow-auto overscroll-contain text-left bg-white transition-all duration-300 ease-in-out group-hover:visible group-hover:opacity-100 shadow`}>
                              <div css={tw`flex justify-between items-start flex-nowrap max-w-screen-xl my-0 mx-auto py-0 px-2.5`}>
                                {
                                  navMenu.subMenus.map(subMenu => (
                                    <div key={subMenu.menuId} css={tw`flex-shrink-0 font-extrabold mx-10 my-5`}>
                                      <a css={tw`font-size[15px] font-normal text-gray-500 block mb-5`} href="">{subMenu.menuName}</a>
                                      <ul css={tw`list-none p-0 m-0`}>
                                        {
                                          subMenu.subMenus && subMenu.subMenus.map(child => (
                                            <li key={child.menuId} css={tw`relative block mb-3 w-full leading-normal text-left transition-all duration-200 ease-in-out`}>
                                              <Link href={`/collections/${child.handle}`}>
                                                <a css={tw`text-gray-700 font-semibold`}>{child.menuName}</a>
                                              </Link>
                                            </li>
                                          ))
                                        }
                                      </ul>
                                    </div>
                                  ))
                                }
                                <div css={tw`flex-shrink mx-10 my-5`} style={{ width: 330 * 2 }}>
                                  {
                                    navMenu.ads && navMenu.ads.map(ad => (
                                      <div key={ad.title} css={tw`w-1/2 inline-block text-center align-top first-of-type:pr-4 last-of-type:pl-4`}  >
                                        <a>
                                          <div css={tw`overflow-hidden mx-auto mt-2 mb-5`}>
                                            <Image src={ad.imageUrl} alt={ad.title} width={320} height={230} />
                                          </div>
                                          <p css={tw`font-size[15px] font-normal text-gray-700`}>{ad.title}</p>
                                        </a>
                                      </div>
                                    ))
                                  }
                                </div>
                              </div>
                            </div>
                          )
                        }
                      </li>
                    ))
                  }
                </ul>
              </nav>
            </div>
            <div css={tw`block w-50px`}></div>
          </div>
        </header>
      </div>

    </>
    )
}

export default Header
