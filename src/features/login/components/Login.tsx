import toast from 'react-hot-toast'
import LoginForm from './LoginForm'
import { useNavigate } from 'react-router-dom'
import { UseMutateFunction } from '@tanstack/react-query'
import { useEffect } from 'react'
import { ILoginResponse, useLogin } from '../useLogin'
import { LoadingHandler } from '@/components/handlers'
import { ILogin } from '@/types'
import { useTokenStore } from '@/store/tokenStore'
import { injectTokenToHeaders } from '@/http-common'
import { useUserStore } from '@/store/userStore'
import { isTestMode } from '@/constants'
import { setToken } from '@/services/token.service'

interface Params {
  email: string;
  password: string;
}

export const Login = (): JSX.Element => {
  const { mutate, isPending, isSuccess, data } = useLogin()
  const navigate = useNavigate()
  const updateToken = useTokenStore(state => state.updateToken)
  const updateUser = useUserStore(state => state.updateUser)

  useEffect(() => {
    if (isSuccess) {
      console.log('LOGIN: ', data)
      const logRes = data as ILoginResponse
      toast.success('Login successfully.', { className:'success' })
      updateToken(logRes.token)
      newToken(logRes.token)
      updateUser(logRes.user)
      navigate('/dashboard')
    }
  }, [data, isSuccess, navigate, updateToken, updateUser])

  if (isPending) return <LoadingHandler />

  const handleData = addTokenAndUser(mutate)

  return (
    <LoginForm
      handleData={handleData}
      formName='LOGIN'
    />
  )
}

function newToken(token: string): void {
  isTestMode ? setToken(token) : injectTokenToHeaders(token)
}

function addTokenAndUser(
  mutate: UseMutateFunction<unknown, unknown, Params, unknown>,
) {
  const handleData = (data: ILogin) => {
    mutate(data)
  }

  return handleData
}
