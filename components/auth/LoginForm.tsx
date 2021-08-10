import Button from 'components/ui/Button';
import FormItem from 'components/ui/FormItem';
import Input from 'components/ui/Input';
import { FC, useState } from 'react';
import tw from 'twin.macro';

interface LoginFormProps {}

const styles = {
  formField: tw`
    not-last:mb-6
  `,
  formFieldItem: tw`
    not-last:mb-4
    w-full
  `,
  fieldLabel: tw`
    mb-2 font-size[0.8em] sm:font-size[1em] font-weight[500]
    letter-spacing[0] line-height[1.5]
    inline-block
  `,
  formInput: tw`
    p-2 box-border
  `
}

const LoginForm: FC<LoginFormProps> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)
  return (
    <form>
      <FormItem label={"Email Address"}>
        <Input id="email" type="email" name="email" autoComplete="off" autoFocus required spellCheck={false} />
      </FormItem>
      <FormItem label={"Password"}>
        <Input css={[styles.formFieldItem, styles.formInput]} id="password" type="password" name="password" required />
      </FormItem>
      <FormItem>
        <Button type="submit">Login</Button>
      </FormItem>
    </form>
  )

}

export default LoginForm
