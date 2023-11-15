import { useLocation, useRoutes } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import { routePage } from './routes'
import { Fragment } from 'react'
import { Toaster } from 'react-hot-toast'
import { QueryBoundaries } from './components/queryboundary/QueryBoundaries'
import { UserTokenStore } from './store/tokenStore'

function App(): JSX.Element {
  const location = useLocation()
  const routesContent = useRoutes(routePage)
  const homePage = (location.pathname === '/') ? true : false
  const isDashboard = location.pathname.includes('dashboard')
  const token = UserTokenStore()

  console.log('APP token: ', token)

  return (
    <Fragment>
      <Toaster />
      <GlobalStyles homePage={homePage} dashboard={isDashboard} />
      <QueryBoundaries>
        {routesContent}
      </QueryBoundaries>
    </Fragment>
  )
}

export default App

