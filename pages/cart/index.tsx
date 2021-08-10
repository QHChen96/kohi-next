import Breadcrumb from '@components/common/breadcrumb'
import BreadcrumbItem from '@components/common/breadcrumb/BreadcrumbItem'
import Container from '@components/common/Container'
import Layout from '@components/common/Layout'
import tw from 'twin.macro'

export default function Cart() {
  return (
    <Layout>
      <Container>
        <Breadcrumb>
          <BreadcrumbItem href="/" separator="/">Home</BreadcrumbItem>
          <BreadcrumbItem>Shopping Bag</BreadcrumbItem>
        </Breadcrumb>
        <h1 css={tw`text-4xl text-center font-bold uppercase tracking-wide my-6 mx-auto`}>Shopping Bag</h1>
        <div css={tw`grid grid-cols-3 gap-4`}>
          <div css={tw`col-span-2 bg-blue-300 h-20`}>
            <table css={tw`block`}>
              <thead css={tw`block`}>
                <tr css={tw`uppercase text-gray-600 tracking-tight w-full`}>
                  <th css={tw`text-left pb-2`}>item</th>
                  <th css={tw`text-right pb-2`}>quantity</th>
                  <th css={tw`text-right pb-2`}>price</th>
                </tr>
              </thead>
              <tbody>
                <tr css={tw`border-t border-gray-400 py-4`}>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div css={tw`bg-blue-300 h-20`}></div>
        </div>
      </Container>
    </Layout>
  )
}
