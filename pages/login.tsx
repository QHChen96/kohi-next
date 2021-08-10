import LoginForm from 'components/auth/LoginForm';
import Button from 'components/ui/Button';
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
export default function Login() {
  return (
    <Layout>
      <div tw="container mx-auto flex flex-col sm:flex-row divide-x divide-gray-300 py-16 sm:py-32">
        <div tw="flex-1">
          <div tw="w-full sm:w-3/5 mx-auto">
            <h4 css={styles.formTitle}>Returning Customers</h4>
            <LoginForm />
          </div>
        </div>
        <div tw="flex-1">
          <div tw="w-full sm:w-3/5 mx-auto">
            <h4 css={styles.formTitle}>New Customers</h4>
            <p css={tw`m-0 mb-6 text-base`}>Create an account to expedite future checkouts, view and update your account details, track your order status and history.</p>
            <Button>REGISTER</Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
