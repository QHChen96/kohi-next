import Layout from "components/common/Layout"
import { IconChecked, IconClose, IconFavor, IconFilterArrow, IconUnChecked } from "components/ui/icon"
import React, { useState } from "react"
import tw from 'twin.macro'
import FilterButton from '@components/ui/FilterButton';
import BlankButton from '@components/ui/BlankButton';
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from "next/dist/client/router";

const styles = {
  filters: tw`mt-0 pt-4 px-7 sticky top[138px]! flex-shrink-0 flex-basis[280px] self-start`,
  contents: tw`pt-4 w-full relative flex-1 flex-shrink-0 px-7`,
  sortActive: tw`visible bg-transparent relative min-h-0`,
  filterBtn: tw`inline-flex outline-none relative items-center border-0 appearance-none cursor-pointer rounded-3xl bg-gray-200 py-3 pl-4 pr-9 font-semibold`
}
const heightFull = `
  &::before {
    content: "";
    display: block;
    padding-bottom: 150%;
  }
`

const products = [
  {
    productId: 1,
    productName: "Pink One Shoulder One Piece Swimsuit",
    handle: "pink-one-shoulder-one-piece-swimsuit",
    imageUrl: "https://cdn.shopify.com/s/files/1/0784/0207/products/1_79819997-d9fe-466a-af57-040796826e2e_200x.jpg",
    price: 24.99,
    originalPrice: 27.99
  }, {
    productId: 2,
    productName: "Moss Green Ruffle One Piece Swimsuit",
    handle: "moss-green-ruffle-one-piece-swimsuit",
    imageUrl: "https://cdn.shopify.com/s/files/1/0784/0207/products/2_2f3f9ec6-e7b5-447e-aa86-46f6a514e805_200x.jpg",
    price: 24.99,
    originalPrice: 27.99
  }, {
    productId: 3,
    productName: "Colorblock V-Neck One Piece Swimsuit",
    handle: "colorblock-v-neck-one-piece-swimsuit",
    imageUrl: "https://cdn.shopify.com/s/files/1/0784/0207/products/1_151b931a-4741-475b-b946-f5109e185148_200x.jpg",
    price: 24.99,
    originalPrice: 27.99
  }, {
    productId: 4,
    productName: "Red Deep V-neck One Piece Swimsuit",
    handle: "red-deep-v-neck-one-piece-swimsuit",
    imageUrl: "https://cdn.shopify.com/s/files/1/0784/0207/products/2021-_2_200x.jpg",
    price: 24.99,
    originalPrice: 27.99
  }, {
    productId: 5,
    productName: "Black and White Gingham Ruffle One Piece Swimsuit",
    handle: "black-and-white-gingham-ruffle-one-piece-swimsuit",
    imageUrl: "https://cdn.shopify.com/s/files/1/0784/0207/products/2_1fd6c7fc-858c-4797-b1ad-ad7b3b0d4191_200x.jpg",
    price: 24.99,
    originalPrice: 27.99
  }, {
    productId: 6,
    productName: "Dark Coral Scallop Trimmed One Piece Swimsuit",
    handle: "dark-coral-scallop-trimmed-one-piece-swimsuit",
    imageUrl: "https://cdn.shopify.com/s/files/1/0784/0207/products/2021_2_2e1f71f2-1088-4ccb-b43c-52f7b63b5b16_200x.jpg",
    price: 24.99,
    originalPrice: 27.99
  }, {
    productId: 7,
    productName: "Teal Ruffle Drawstring One Piece Swimsuit",
    handle: "teal-ruffle-drawstring-one-piece-swimsuit",
    imageUrl: "https://cdn.shopify.com/s/files/1/0784/0207/products/3_2_8cc979d5-e9a5-42e0-b876-79a969ca2a24_200x.jpg",
    price: 24.99,
    originalPrice: 27.99
  }, {
    productId: 8,
    productName: "Amari One Shoulder One Piece Swimsuit",
    handle: "amari-one-shoulder-one-piece-swimsuit",
    imageUrl: "https://cdn.shopify.com/s/files/1/0784/0207/products/2_39a33dcb-49cd-4a4b-8491-217b09e1753b_200x.jpg",
    price: 24.99,
    originalPrice: 27.99
  }
]

export default function Collections() {

  const router = useRouter()
  const { asPath } = router

  const [isInFilter, setIsInFilter] = useState(false)
  const favors = [1,3,4]
  const sorts = ['Featured', 'Bestsellers', 'Newest Arrivals', 'Price: High to Low', 'Price: Low to High']
  return (
    <Layout>
      <div tw="m-0">
        <div tw="block m-0 relative border-b-2 border-gray-100">
          <div tw="p-10 mx-auto my-0">
            <div tw="text-center">
              <h1 tw="mb-3 text-4xl tracking-wide mt-0 font-bold uppercase">Bikinis</h1>
              {/* <div tw="max-w-xl mx-auto mt-0 tracking-wide">Every body is a bikini body. Find the best selection of bikini styles at Cupshe.</div> */}
            </div>
          </div>
        </div>
        <div tw="flex mt-0 px-3">
          <div css={styles.filters}>
            <div tw="p-0 mb-4">
              <button onClick={() => setIsInFilter(!isInFilter)} tw="w-full items-center flex relative border-0 text-left font-bold text-gray-600 py-2 mb-2 tracking-wide uppercase focus:outline-none appearance-none">
                CATEGORY
                <span css={[tw`transform ml-auto transition-transform duration-500 ease-in-out origin-center`, isInFilter && tw`-rotate-180`]}>
                  <IconFilterArrow />
                </span>
              </button>
              <ul css={[tw`font-size[14px] p-0 transition-all overflow-hidden`, isInFilter && tw`block`, !isInFilter && tw`h-0 hidden`]}>
                <li tw="flex items-center relative w-full text-left">
                  <IconUnChecked size={22} />
                  <input tw="opacity-5 absolute w-px h-px" type="checkbox" />
                  <label tw="block p-2 relative pl-3 font-bold text-gray-500">
                    Bikini
                    <span>(100)</span>
                  </label>
                </li>
                <li tw="flex items-center relative w-full text-left">
                  <IconChecked size={22} />
                  <input tw="opacity-5 absolute w-px h-px" type="checkbox" />
                  <label tw="block p-2 relative pl-3 font-bold text-gray-500">
                    Bikini Bottoms
                    <span>(100)</span>
                  </label>
                </li>
                <li tw="flex items-center relative w-full text-left">
                  <IconChecked size={22} />
                  <input tw="opacity-5 absolute w-px h-px" type="checkbox" />
                  <label tw="block p-2 relative pl-3 font-bold text-gray-500">
                    Bikini Tops
                    <span>(100)</span>
                  </label>
                </li>
              </ul>
            </div>
            <div tw="p-0">
              <button onClick={() => setIsInFilter(!isInFilter)} tw="w-full items-center flex relative border-0 text-left font-bold text-gray-600 p-0 mb-2 tracking-wide uppercase focus:outline-none appearance-none">
                COLOR
                <span css={[tw`transform ml-auto transition-transform duration-500 ease-in-out origin-center`]}>
                  <IconFilterArrow />
                </span>
              </button>
              <ul css={[tw`font-size[14px] p-0 transition-all overflow-hidden`]}>
                <li tw="flex items-center relative w-full text-left">
                  <IconUnChecked size={22} />
                  <input tw="opacity-5 absolute w-px h-px" type="checkbox" />
                  <label tw="block p-2 relative pl-3 font-bold text-gray-500">
                    Black
                    <span>(100)</span>
                  </label>
                </li>
                <li tw="flex items-center relative w-full text-left">
                  <IconChecked size={22} />
                  <input tw="opacity-5 absolute w-px h-px" type="checkbox" />
                  <label tw="block p-2 relative pl-3 font-bold text-gray-500">
                    Blue
                    <span>(100)</span>
                  </label>
                </li>
                <li tw="flex items-center relative w-full text-left">
                  <IconChecked size={22} />
                  <input tw="opacity-5 absolute w-px h-px" type="checkbox" />
                  <label tw="block p-2 relative pl-3 font-bold text-gray-500">
                    Green
                    <span>(100)</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div css={styles.contents}>
            <div css={tw`flex items-center flex-row flex-nowrap mb-5`}>
              <div css={tw`flex-1 flex-shrink-0 text-base text-gray-500`}>
                <span css={tw`text-lg`}>2998</span>
                {" results "}
              </div>
              <div css={tw`block width[200px] ml-auto mb-0 mr-0 relative`}>
                <a href="" css={tw`text-black bg-white border border-gray-300 relative whitespace-nowrap block text-left rounded-sm py-2 px-3`}>
                  <span>Featured</span>
                  <span css={[tw`transform inline-block absolute right-1`, tw`rotate-0`]}>
                    <IconFilterArrow />
                  </span>
                </a>
                <ul css={tw`translate-x-0 min-h-0 width[200px] text-left right-0 border border-gray-300 border-b-0 absolute m-0 p-0 bg-white transition-all invisible`}>
                  {
                    sorts.map(sort => (
                      <li css={tw`mt-0 border-t-0 text-left w-full cursor-pointer text-black relative bg-white py-1 px-3 leading-9 border-b`} key={sort}>{sort}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div css={tw`block pb-2 mb-2`}>
              <FilterButton>PLUS</FilterButton>
              <FilterButton>XL</FilterButton>
              <BlankButton>Clear All</BlankButton>
            </div>
            <div css={tw`grid grid-cols-2 gap-4 sm:(grid-cols-3 gap-4) xl:(grid-cols-4 gap-5)`}>
              {
                products.map(product => (
                  <div key={product.productId} css={tw`mb-4 relative p-0 cursor-pointer`}>
                    <button css={[tw`absolute right-0 top-0 z-10 focus:outline-none`, favors.indexOf(product.productId) > -1 && tw`fill[#000]` || tw`fill[transparent] stroke-1 stroke[#000]` ]}>
                      <IconFavor />
                    </button>
                    <Link href={`${asPath}/products/${product.handle}`}>
                      <a>
                        <div css={[tw`relative w-full block overflow-hidden`, heightFull]}>
                          <Image css={tw`w-full h-full absolute top-0`} objectFit="contain" layout="fill" src={product.imageUrl} alt={product.productName} />
                        </div>
                      </a>
                    </Link>

                    <div css={tw`flex flex-1 flex-shrink-0 flex-col flex-nowrap relative mt-3`}>
                      <div css={tw`font-size[14px] block mb-1 text-left text-gray-700 mt-0 p-0 max-height[44px] min-height[44px] overflow-hidden`}>
                        <a css={tw`transform-none whitespace-normal no-underline`} href="">{product.productName}</a>
                      </div>
                      <div css={tw`font-size[15px]`}>
                        <span css={tw`text-gray-900 tracking-wide font-bold`}>${product.price}</span>
                        <span css={tw`ml-3 text-gray-500 relative line-through`}>${product.originalPrice}</span>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div css={tw`mt-16 mb-16 text-center`}>
              <div css={tw`inline-block border-b border-gray-300`}>
                <span css={tw`text-gray-700 border-b-4 border-gray-800 px-5 py-4 inline-block leading-none`}>1</span>
                <a css={tw`px-5 py-4 inline-block leading-none`} href="">2</a>
                <a css={tw`px-5 py-4 inline-block leading-none`} href="">3</a>
                <span css={tw`px-5 py-4 inline-block leading-none`}>…</span>
                <a css={tw`px-5 py-4 inline-block leading-none`} href="">13</a>
                <a css={tw`px-5 py-4 inline-block leading-none`} href="">
                  <span css={tw`transform rotate-90 inline-block relative`}>
                    <IconFilterArrow />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
