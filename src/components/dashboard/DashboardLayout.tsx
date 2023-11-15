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
import { QueryBoundaries } from '../queryboundary/QueryBoundaries'
import { useTokenStore } from '@/store/tokenStore'
// import { IsAuthUser } from '@/features/user/User'

function DashboardLayout() {
  const navigate = useNavigate()
  // const userQuery = useUser()
  // const token = userToken()
  const token = useTokenStore(state => state.token)

  // console.log('Dashboard user: ',
  //   userQuery.status==='success' && userQuery.data)
  // console.log('Dash user: ', IsAuthUser())
  // console.log('Dash token: ', token)
  // console.log('Dash user hook: ', userQuery.isSuccess && userQuery.data)

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [navigate, token])

  return (
    <GridDb>
      <HeaderDb>
        <NavbarDb />
      </HeaderDb>
      <AsideDb>
        <SidebarDb />
      </AsideDb>
      <MainDb>
        <QueryBoundaries>
          <Outlet />
        </QueryBoundaries>
      </MainDb>
    </GridDb>
  )
}

export default DashboardLayout
