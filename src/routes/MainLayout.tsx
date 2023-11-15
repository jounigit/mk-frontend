import Navbar from '@/components/layouts/nav/Navbar'
import { SiteContent } from '@/styles'
import { Fragment } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export default function MainLayout() {
  const location = useLocation()
  const homePage = (location.pathname === '/') ?
    true :
    false

  return (
    <Fragment>
      <Navbar />
      {
        homePage &&
        <Outlet />
      }
      {
        !homePage &&
        <SiteContent>
          <Outlet />
        </SiteContent>
      }
    </Fragment>
  )
}
