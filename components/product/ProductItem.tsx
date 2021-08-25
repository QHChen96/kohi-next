import styled from "@emotion/styled"
import clsx from "clsx"
import tw from 'twin.macro'
import { IconFavor } from '@components/ui/icon';
import React from "react";
import Link from 'next/link';
import Image from "next/image";


interface ProductItemProps {
  className?: string
  favors: number[]
  asPath: string
  product: any
}

const heightFull = `
  &::before {
    content: "";
    display: block;
    padding-bottom: 150%;
  }
`

const ProductItem: React.FC<ProductItemProps> = ({ className, children, favors, asPath, product }) => {
  return (
    <div css={tw`mb-4 relative p-0 cursor-pointer`}>
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
  )
}

export default ProductItem
