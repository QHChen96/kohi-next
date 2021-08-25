import Container from '@components/common/Container'
import Layout from '@components/common/Layout'
import tw from 'twin.macro'
import React, { useState } from 'react';

const accountMenu = [
  {
    icon: '',
    menuName: 'My Orders',
    handle: 'orders'
  }, {
    icon: '',
    menuName: 'My Info',
    handle: 'info'
  }
]


export default function Account() {

  const [handle, setHandle] = useState('orders')

  return (
    <Layout>
      <div css={tw`width[1000px] flex mx-auto mt-10`}>
        <aside css={tw`width[220px] block`}>
          <nav>
            {
              accountMenu.map(menu => (
                <a key={menu.handle} css={[tw`flex items-center py-4 px-6 rounded cursor-pointer`, menu.handle == handle && tw`bg-gray-100`]}>
                  <span css={tw`flex items-center justify-center`}></span>
                  <span css={tw`ml-4 text-base`}>{menu.menuName}</span>
                </a>
              ))
            }
            <a css={tw`flex items-center py-4 px-6 rounded cursor-pointer mt-8 text-red-700`}>
              <span css={tw`flex items-center justify-center`}></span>
              <span css={tw`ml-4 text-base`}>Sign Out</span>
            </a>
          </nav>
        </aside>
        <div css={tw`flex-1 ml-10`}>

        </div>
      </div>
    </Layout>
  )
}
