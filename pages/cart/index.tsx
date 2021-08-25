import Breadcrumb from '@components/common/breadcrumb'
import BreadcrumbItem from '@components/common/breadcrumb/BreadcrumbItem'
import Container from '@components/common/Container'
import Layout from '@components/common/Layout'
import { IconBack, IconMinus, IconPlus } from '@components/ui/icon';
import tw from 'twin.macro'
import Image from 'next/image';
import BlankButton from '@components/ui/BlankButton';
import Button from 'components/ui/Button';

const heightFull = `
  &::before {
    content: "";
    display: block;
    padding-bottom: 150%;
  }
`

export default function Cart() {
  return (
    <Layout>
      <Container>
        <Breadcrumb>
          <BreadcrumbItem href="/" separator="/">Home</BreadcrumbItem>
          <BreadcrumbItem>Shopping Bag</BreadcrumbItem>
        </Breadcrumb>
        <div css={tw`text-center grid grid-cols-1 relative`}>
          <div css={tw`relative`}>
            <a css={tw`absolute top[calc(50% + 24px)] left-0 inline cursor-pointer font-bold underline whitespace-nowrap text-base`} href="">
              <span css={tw`inline-block w-2 text-xl mr-1 h-2`}>
                <IconBack />
              </span>
              Continue shopping
            </a>
          </div>
          <h1 css={tw`text-4xl text-center font-bold uppercase tracking-wide my-4 mx-auto`}>Shopping Bag</h1>
        </div>
        <div css={tw`my-3`}>
          <div css={tw`bg-yellow-100 text-orange-500 py-4 text-center `}>
            <div css={tw`my-0 mx-auto max-w-md`}>
              <p css={tw`text-base`}>
                <span css={tw`uppercase font-bold`}>HK$789.46 from free shipping!</span>
                <a css={tw`ml-2 tracking-tighter underline`} href="">Keep shopping</a>
              </p>
              <div css={tw`mt-2 bg-orange-200 h-1.5 overflow-hidden w-full rounded`}>
                <div css={tw`bg-orange-500 w-1/5 h-full block rounded`}></div>
              </div>
            </div>
          </div>
        </div>
        <div css={tw`grid grid-cols-3 gap-4 mt-6`}>
          <div css={tw`col-span-2 h-20`}>
            <div css={tw`block`}>
              <div css={tw`block text-gray-500 tracking-widest`}>
                <div css={tw`uppercase tracking-tight pb-3 grid row-auto grid-template[auto/1fr 122px 122px] font-bold`}>
                  <div css={tw`text-left `}>item</div>
                  <div css={tw`text-center`}>quantity</div>
                  <div css={tw`text-right`}>price</div>
                </div>
              </div>
              <div css={tw`block`}>
                <div css={tw`border-t border-gray-400 py-4 grid row-auto grid-template[auto/1fr 244px] last-of-type:border-b`}>
                  <div css={tw`flex`}>
                    <a css={tw`pr-2`} href="">
                      <div css={[tw`relative width[100px] block overflow-hidden`, heightFull]}>
                        <Image css={tw`w-full h-full absolute top-0`} objectFit="contain" layout="fill"  src={'http://cdn.shopify.com/s/files/1/0293/9277/products/02-12-20_Studio_2_JP_LE_13-58-34_23__RT78586_White_R_63303_NT_80x120.jpg'} alt={''} />
                      </div>
                    </a>
                    <div css={tw`block`}>
                      <a css={tw`text-lg tracking-tight`} href="">Purely Iconic Sunglasses - Black</a>
                      <div css={tw`text-base text-gray-500 block`}>Size: OS</div>
                      <button css={tw`relative whitespace-normal bg-none border-0 inline cursor-pointer underline text-base`}>Edit</button>
                    </div>
                  </div>
                  <div css={tw`block`}>
                    <div css={tw`flex`}>
                      <div css={tw`flex-1 height[40px] border border-gray-600 text-black rounded-full text-center width[120px] block my-0 mx-auto relative`}>
                        <input css={tw`width[36px] border-0 height[38px] bg-none text-black p-0 rounded-none outline-none text-center font-bold`}/>
                        <div css={tw`text-center`}>
                          <button css={tw`absolute top-0 height[40px] line-height[40px] border-0 text-center block right-0 px-2 bg-transparent outline-none focus:(outline-none) hover:text-gray-500`}>
                            <IconPlus/>
                          </button >
                          <button css={tw`absolute top-0 height[40px] line-height[40px] border-0 text-center block left-0 px-2 bg-transparent outline-none focus:(outline-none)  hover:text-gray-500`}>
                            <IconMinus/>
                          </button>
                        </div>
                      </div>
                      <div css={tw`block text-right flex-1`}>
                        <div css={tw`block text-gray-500 font-medium`}>$79.00</div>
                        <div css={tw`block text-red-600 font-bold text-lg`}>$56.00</div>
                      </div>
                    </div>
                    <div css={tw`block text-right pt-8 text-base tracking-tighter`}>
                      <button css={tw`focus:outline-none hover:text-gray-500 underline`}>Remove</button>
                      <span css={tw`mx-3 text-gray-400`}>|</span>
                      <button css={tw`focus:outline-none hover:text-gray-500 underline`}>Move to Favorites</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div css={tw`bg-gray-100 px-5 pt-4 pb-5`}>
              <div css={tw`flex font-semibold pb-6 items-baseline`}>
                <span css={tw`flex-grow[2] text-left text-xl`}>
                  Subtotal
                  <span css={tw`font-medium`}>(3 items)</span>
                </span>
                <span css={tw`text-2xl`}>$199.00</span>
              </div>
              <Button css={tw`text-base text-white! font-semibold `}>
                <span >
                  Checkout
                </span>
              </Button>
            </div>
            <div css={tw`bg-gray-100 h-20 px-5 pt-4 pb-5 mt-2`}>
            </div>
          </div>
        </div>

      </Container>
    </Layout>
  )
}
