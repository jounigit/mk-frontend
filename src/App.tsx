import { useLocation, useRoutes } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import { routes } from './routes'
import { Fragment } from 'react'
import { Toaster } from 'react-hot-toast'
import { QueryBoundaries } from './components/queryboundary/QueryBoundaries'
// import { UserTokenStore } from './store/tokenStore'

function App(): JSX.Element {
  const location = useLocation()
  const routesContent = useRoutes(routes)
  const homePage = (location.pathname === '/') ? true : false
  const isDashboard = location.pathname.includes('dashboard')
  // const token = UserTokenStore()

  console.log('APP mode: ', process.env.NODE_ENV)

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

