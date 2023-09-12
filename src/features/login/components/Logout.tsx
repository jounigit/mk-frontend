import toast from 'react-hot-toast'
// import { apiClient } from '../../../http-common'
import { Button } from '../../../components/atoms/Button'
// import { removeToken } from '../../../services/token.service'
import { useNavigate } from 'react-router-dom'
import { useLogout } from '../useLogin'
import { useEffect } from 'react'
// import { IAuthContext, useAuth } from '../../../context/AuthContext'

export const Logout = (): JSX.Element  => {
  const navigate = useNavigate()
  // const { setAuthUser, setIsLoggedIn } = useAuth() as IAuthContext
  const { mutate, isSuccess, data } = useLogout()

  useEffect(() => {
    if (isSuccess) {
      toast.success('Successfully logged out.')
      console.log('Logout: ', data)
      // removeToken()
      // setIsLoggedIn(false)
      // setAuthUser(null)
      localStorage.clear()
      navigate('/')
    }
  }, [data, isSuccess, navigate])

  const handleClick = () => {
    mutate(null)
  }


  return (
    <>
      <Button onClick={handleClick}>Logout</Button>
    </>
  )
}

// const handleClick = async (e: React.FormEvent) => {
//   e.preventDefault()

//   console.log('Handleclick: ')
//   try {
//     const response = await apiAuth.post('/logout')
//     toast.success('Login successfully.')
//     console.log('Logout: ', response.data)
//   }
//   catch (error) {
//     console.error('Logout: ', error)
//   }
// }

// const handleClick = async (e: React.FormEvent) => {
//   e.preventDefault()

//   try {
//     const response = await apiClient.post('/logout')
//     toast.success('Login successfully.')
//     console.log('Logout: ', response.data)
//     toast.success('Successfully logged out.')
//     removeToken()
//     navigate('/')
//   }
//   catch (error) {
//     console.error('Logout: ', error)
//     toast.error('Could not logout')
//   }
// }