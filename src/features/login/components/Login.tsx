import toast from 'react-hot-toast'
import LoginForm from './LoginForm'
import { useNavigate } from 'react-router-dom'
import { UseMutateFunction } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useLogin } from '../useLogin'
import { LoadingHandler } from '@/components/handlers'
import { ILogin } from '@/types'

interface Params {
  email: string;
  password: string;
}

export const Login = (): JSX.Element => {
  const { mutate, isLoading, isSuccess, data } = useLogin()
  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess) {
      console.log('LOGIN: ', data)
      toast.success('Login successfully.')
      navigate('/dashboard')
    }
  }, [data, isSuccess, navigate])

  if (isLoading) return <LoadingHandler />

  const handleData = addTokenAndUser(mutate)

  return (
    <LoginForm
      handleData={handleData}
      formName='LOGIN'
    />
  )
}

function addTokenAndUser(
  mutate: UseMutateFunction<unknown, unknown, Params, unknown>,
) {
  const handleData = (data: ILogin) => {
    mutate(data)
  }

  return handleData
}
