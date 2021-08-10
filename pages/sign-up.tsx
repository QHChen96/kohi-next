import SignUpForm from 'components/auth/SignUpForm';
import { IconHeart } from 'components/ui/icon';
import tw from 'twin.macro';
import Layout from '../components/common/Layout';

const styles = {
  container: tw`w-full m-auto mx-0 px-4 py-0`,
  containerYSpace: tw`my-24`,
  row: tw`w-full md:px-0 md:py-2 mx-auto`,
  grid: tw`flex flex-wrap`,
  gridItem: tw`w-full md:w-1/2  last:border-l last:border-t-0 last:border-b-0 last:border-r-0 last:border-solid last:border-gray-300 `,
  formTitle: tw`
    text-xl sm:text-3xl font-bold
    mx-0 mt-0 mb-4
  `,
}
export default function SignUp() {
  return (
    <Layout>
      <div tw="container mx-auto flex flex-col sm:flex-row divide-x divide-gray-300 py-16 sm:py-32">
        <div tw="flex-1">
          <div tw="w-full sm:w-3/5 mx-auto">
            <div tw="bg-yellow-50 w-full height[580px] flex justify-center items-center">
              <div tw="bg-blue-300 width[200px] height[200px] flex justify-center items-center ">
                <span tw="inline-block text-4xl">K O H I</span>
              </div>
            </div>
          </div>
        </div>
        <div tw="flex-1">
          <div tw="w-full sm:w-3/5 mx-auto">
            <h4 css={styles.formTitle}>Create Account</h4>
            <SignUpForm/>
          </div>
        </div>
      </div>
    </Layout>
  )
}
