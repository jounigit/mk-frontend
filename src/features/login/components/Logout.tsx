import toast from 'react-hot-toast'
import { TransButton } from '../../../components/atoms/Button'
import { useNavigate } from 'react-router-dom'
import { useLogout } from '../useLogin'
import { useEffect } from 'react'

export const Logout = (): JSX.Element  => {
  const navigate = useNavigate()
  const { mutate, isSuccess, data } = useLogout()

  useEffect(() => {
    if (isSuccess) {
      toast.success('Successfully logged out.')
      console.log('Logout: ', data)
      localStorage.clear()
      navigate('/')
    }
  }, [data, isSuccess, navigate])

  const handleClick = () => {
    mutate(null)
  }


  return (
    <>
      <TransButton onClick={handleClick}>Logout</TransButton>
    </>
  )
}
