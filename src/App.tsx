import { useLocation, useRoutes } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import { routePage } from './routes'
import { Fragment } from 'react'
import { Toaster } from 'react-hot-toast'
import { useUser } from './features/user/useUser'

function App(): JSX.Element {
  const location = useLocation()
  const routesContent = useRoutes(routePage)
  const userQuery = useUser()

  console.log('Public user: ', userQuery.isSuccess && userQuery.data)

  const homePage = (location.pathname === '/') ? true : false
  const isDashboard = location.pathname.includes('dashboard')
 
  return (
    <Fragment>
      <Toaster />
      <GlobalStyles homePage={homePage} dashboard={isDashboard} />
      {routesContent}
    </Fragment>
  )
}

export default App

