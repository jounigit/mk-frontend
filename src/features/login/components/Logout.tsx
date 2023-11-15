import toast from 'react-hot-toast'
import { TransButton } from '../../../components/atoms/Button'
import { useNavigate } from 'react-router-dom'
import { useLogout } from '../useLogin'
import { useEffect } from 'react'
import { useTokenStore } from '@/store/tokenStore'
import { injectTokenToHeaders } from '@/http-common'
import { useUserStore } from '@/store/userStore'

export const Logout = (): JSX.Element => {
  const navigate = useNavigate()
  const { mutate, isSuccess, data } = useLogout()
  const deleteToken = useTokenStore(state => state.deleteToken)
  const deleteUser = useUserStore(state => state.deleteUser)

  const token = useTokenStore(state => state.token)
  console.log('Logout: ', data)
  injectTokenToHeaders(token)
  // apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`

  useEffect(() => {
    if (isSuccess) {
      toast.success('Successfully logged out.')
      deleteToken()
      deleteUser()
      // localStorage.clear()
      navigate('/')
    }
  }, [data, deleteToken, deleteUser, isSuccess, navigate])

  const handleClick = () => {
    mutate(null)
  }


  return (
    <>
      <TransButton onClick={handleClick}>Logout</TransButton>
    </>
  )
}
