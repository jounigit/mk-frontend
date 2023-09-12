import { Outlet, useNavigate } from 'react-router-dom'
import {
  AsideDb,
  GridDb,
  HeaderDb,
  MainDb
} from './components/Dashboard.styles'
import { useEffect } from 'react'
import NavbarDb from './components/NavbarDb'
import SidebarDb from './components/SidebarDb'
import { useUser } from '@/features/user/useUser'
import { userToken } from '@/services/authUser.service'

function DashboardLayout() {
  const navigate = useNavigate()
  const userQuery = useUser()
  const token = userToken()

  // console.log('Dash user: ', localUser)
  // console.log('Dash token: ', token)
  // console.log('Dash user hook: ', userQuery.isSuccess && userQuery.data)

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [navigate, token, userQuery])

  return (
    <GridDb>
      <HeaderDb>
        <NavbarDb />
      </HeaderDb>
      <AsideDb>
        <SidebarDb />
      </AsideDb>
      <MainDb>
        <Outlet />
      </MainDb>
    </GridDb>
  )
}

export default DashboardLayout


// const { isLoggedIn } = useAuth() as IAuthContext