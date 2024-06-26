import { Outlet, useNavigate } from 'react-router-dom'
import {
  AsideDb,
  GridDb,
  HeaderDb,
  MainDb,
  MainWrapper,
} from './components/Dashboard.styles'
import { useEffect } from 'react'
import NavbarDb from './components/NavbarDb'
import SidebarDb from './components/SidebarDb'
import { QueryBoundaries } from '../queryboundary/QueryBoundaries'
import { useTokenStore } from '@/store/tokenStore'
import { isTestMode } from '@/constants'
import { getToken } from '@/services/token.service'

function DashboardLayout() {
  const navigate = useNavigate()
  const devProdToken = useTokenStore(state => state.token)
  const token = isTestMode ? getToken() : devProdToken

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
          <MainWrapper>
            <Outlet />
          </MainWrapper>
        </QueryBoundaries>
      </MainDb>
      {/* <RightSide></RightSide> */}
    </GridDb>
  )
}

export default DashboardLayout
