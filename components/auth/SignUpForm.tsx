import Button from 'components/ui/Button';
import FormItem from 'components/ui/FormItem';
import Input from 'components/ui/Input';
import React, { FC, useCallback, useState, useEffect } from 'react';

interface SignUpFormProps {}
const SignUpForm: FC<SignUpFormProps> = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const handleSignUp = () => {}
  const handleValidation = useCallback(
    () => {
      const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)

    },
    [email, password],
  )

  useEffect(() => {
    handleValidation()
  },[handleValidation])

  return (
    <form onSubmit={handleSignUp}>
      <FormItem label={"First Name"}>
        <Input type="text" name="firstName" required />
      </FormItem>
      <FormItem label={"Last Name"}>
        <Input type="text" name="firstName" required />
      </FormItem>
      <FormItem label={"Email Address"}>
        <Input type="email" name="email" required />
      </FormItem>
      <FormItem label={"Password"}>
        <Input type="password" name="password" required />
      </FormItem>
      <FormItem>
        <Button>REGISTER</Button>
      </FormItem>
    </form>
  )

}
export default SignUpForm
