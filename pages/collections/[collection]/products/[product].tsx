import Layout from '@components/common/Layout';
import { IconFavor, IconMinus, IconPlus } from '@components/ui/icon';
import Image from 'next/image';
import React, { useState, useCallback, FC } from 'react';
import tw from 'twin.macro';
import { IconHeart } from 'components/ui/icon';
import Rate from '@components/ui/Rate';
import { useRouter } from 'next/dist/client/router';
import Breadcrumb from '@components/common/breadcrumb';
import BreadcrumbItem from '@components/common/breadcrumb/BreadcrumbItem';
import Container from '@components/common/Container';

const styles = {
  optionActive: tw`bg-black text-white`,
  collapsible: tw`first-of-type:(border-t) border-b border-gray-300 overflow-hidden`,
  variantFrom: tw`mb-12`,
  collapsibleButton: tw`focus:(outline-none) flex items-center relative w-full text-left cursor-pointer py-5 uppercase tracking-wide border-none rounded-none appearance-none`,
  collapsibleToggle: tw`ml-auto block`,
  collapsibleContent: tw`h-auto pr-5 overflow-hidden`,
  open: tw`h-0`
}
const heightFull = `
  &::before {
    content: "";
    display: block;
    padding-bottom: 150%;
  }
`
const product = {
  productId: 1,
  title: "Green Scalloped Edge V-Neck Printed Bottom Bikini",
  price: 24.99,
  originalPrice: 27.99,
  variants: [
    {
      id: 100,
      title: "Green Scalloped Edge V-Neck Printed Bottom Bikini - M / Green",
      name: "M / Green",
      price: 24.99,
      options: ["M", "Green"]
    },
    {
      id: 200,
      title: "Green Scalloped Edge V-Neck Printed Bottom Bikini - XS / Green",
      name: "XS / Green",
      price: 24.99,
      options: ["XS", "Green"]
    }
  ],
  options: [
    {
      name: "Size",
      position: 1,
      values: ["M", "XS"]
    }, {
      name: "Color",
      position: 1,
      values: ["Green"]
    }
  ],
  images: [
    "https://cdn.shopify.com/s/files/1/0784/0207/products/3_1d9b3357-9cc7-43b0-824b-2b4fde6112c9_800x.jpg",
    "https://cdn.shopify.com/s/files/1/0784/0207/products/4_74e9ffa6-81bc-4795-8483-05cbf2671a98.jpg",
    "https://cdn.shopify.com/s/files/1/0784/0207/products/CSN0093EB.jpg"
  ],
  description: "Put a fun spin to your summer repertoire with our Eva Wave Striped V-neck Sleeveless Dress. This sleeveless piece features knee-length dress. Decked with wave stripe print to lend a chic and minimalistic touch.",
}

const CollapsibleItem: FC<{title: string, content: string}> = (props: {title: string, content: string}) => {
  const {title, content} = props
  const [toggle, setToggle] = useState(false)

  const handleToggle = useCallback(() => {
    setToggle(!toggle)
  }, [toggle])
  return (
    <div css={styles.collapsible}>
      <button css={styles.collapsibleButton} onClick={handleToggle}>
        {title}
        <span css={[styles.collapsibleToggle, toggle && tw`hidden`]}>
          <IconPlus />
        </span>
        <span css={[styles.collapsibleToggle, !toggle && tw`hidden`]}>
          <IconMinus />
        </span>
      </button>
      <div css={[styles.collapsibleContent, !toggle && styles.open]}>
        <div css={[!toggle && styles.open]} dangerouslySetInnerHTML={{__html: content}}></div>
      </div>
    </div>
  )
}

const ReviewItem = () => (
  <div css={tw`p-8 odd-of-type:(border-l) border-b border-gray-300 even-of-type:(border-r)`}>
    <div css={tw`flex`}>
      <div css={tw`relative`}>
        <span css={tw`relative inline-flex items-center justify-center w-12 h-12 mr-2 bg-white rounded-3xl border border-gray-600`}>
          <span css={tw`-mt-0.5 text-xl`}>A</span>
        </span>
      </div>
      <div css={tw`pt-0.5 inline-block uppercase`}>
        <div>
          <span css={tw`p-0 mr-2 font-bold text-black tracking-wide`}>Chan</span>
          <span css={tw`text-gray-400 tracking-tighter`}>Verified Buyer</span>
        </div>
        <Rate score={5} size="s" />
      </div>
      <div css={tw`ml-auto tracking-tighter text-gray-500`}>
        07/25/21
      </div>
    </div>
    <div css={tw`block mt-2 ml-14`}>
      <div css={tw`text-xl py-2 tracking-tighter`}>Love this shirt runs a</div>
      <div css={tw`text-gray-500 inline`}>
        Love this shirt runs a bit big but super comfortable.
      </div>
      <div css={tw`mt-2`}>
        <div css={tw`my-2`}>
          <div css={tw`font-bold text-gray-500`}>Size:</div>
          <div css={tw`text-gray-600`}>L</div>
        </div>
      </div>
    </div>
  </div>
)

export default function Products() {
  const [imageIndex, setImageIndex] = useState(0)
  const [optionSelect, setOptionSelect] = useState<Record<string, string>>({
    'Size': 'M',
    'Color': 'Green'
  })

  const router = useRouter()
  const { asPath } = router
  const collectionPath = asPath.substring(0, asPath.indexOf("/products"))

  const handleCheckOption = (key: string, value: string) => {
    setOptionSelect({
      ...optionSelect,
      [key]: value
    })
  }
  return (
    <Layout>
      <Container>
        <Breadcrumb>
          <BreadcrumbItem href="/" separator={'>'}>Home</BreadcrumbItem>
          <BreadcrumbItem href={collectionPath} separator={'>'}>Best Sellers</BreadcrumbItem>
          <BreadcrumbItem>Eva Wave Striped V-neck Sleeveless Dress</BreadcrumbItem>
        </Breadcrumb>
        <div css={tw`flex flex-row`}>
          <div css={tw`height[735px] xl:(width[632px]) xl:(ml-12) flex flex-row overflow-hidden`}>
            <div css={tw``}>
              {
                product.images.map(image => (
                  <div key={image} css={[tw`relative width[100px] block overflow-hidden not-last-of-type:mb-6`, heightFull]}>
                    <Image css={tw`w-full h-full absolute top-0`} objectFit="contain" layout="fill" src={image} alt={product.title} />
                  </div>
                ))
              }
            </div>
            <div css={tw`mx-6`}>
              <div css={[tw`relative width[490px] block overflow-hidden`, heightFull]}>
                <Image css={tw`w-full h-full absolute top-0`} objectFit="contain" layout="fill" src={product.images[imageIndex]} alt={product.title} />
              </div>
            </div>
          </div>
          <div css={tw`xl:(width[463px]) xl:(mr-12 ml-6)`}>
            <form css={styles.variantFrom} action="">
              <h1 css={tw`text-gray-700 font-size[24px] leading-normal font-bold mb-0 tracking-normal`}>{product.title}</h1>
              <div css={tw`mt-4 mb-4 text-left uppercase text-gray-700 tracking-wide `}>
                <span css={tw`font-size[24px] font-bold text-gray-800 inline-block`}>${product.price}</span>
                <span css={tw`font-size[16px] font-medium text-gray-500 inline-block line-through ml-2`}>${product.originalPrice}</span>
              </div>
              {
                product.options.map(option => (
                  <div css={tw`mb-6`} key={option.name}>
                    <div css={tw`my-2 font-size[16px] tracking-wider font-semibold text-gray-500`}>
                      {option.name}
                    </div>
                    <div css={tw`grid grid-cols-5 gap-3 font-semibold text-gray-500`}>
                      {
                        option.values.map(value => (
                          <label onClick={() => handleCheckOption(option.name, value)} css={[tw`text-center py-2 border border-gray-500 font-size[14px]`, optionSelect[option.name] == value && styles.optionActive]} key={`${option.name}-${value}`}>
                            <span css={tw``} >{value}</span>
                          </label>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
              <div css={tw`mt-10 flex flex-row`}>
                <button css={tw`text-center rounded-none min-width[150px] tracking-wider inline-flex justify-center px-12 w-full uppercase no-underline text-white items-center cursor-pointer bg-black relative height[45px] font-medium`}>
                  <span>Add to BAG</span>
                </button>
                <button css={tw`ml-2 text-center inline-flex justify-center items-center cursor-pointer border border-black height[45px] px-3`}>
                  <IconHeart />
                </button>
              </div>
            </form>
            <CollapsibleItem title={'description'} content={product.description} />
            <CollapsibleItem title={'shopping'} content={product.description} />
            <CollapsibleItem title={'Returns & Exchanges'} content={product.description} />
          </div>
        </div>
        <div css={tw`relative mt-20 mx-auto`}>
          <h2 css={tw`text-center uppercase tracking-wide text-2xl font-bold leading-normal my-4`}>REVIEWS</h2>
          <div>
            <div css={tw`flex items-center justify-center`}>
              <span css={tw`font-size[25px] inline-block leading-none m-0 p-0 mr-4 font-bold tracking-tighter`}>
                3.1
              </span>
              <Rate score={3.1} size="l" />
              <span css={tw`font-size[24px] inline-block leading-none m-0 p-0 ml-4 font-bold tracking-tighter`}>
                14 Reviews
              </span>
            </div>
            <div css={tw`grid grid-cols-2`}>
              <ReviewItem />
              <ReviewItem />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
