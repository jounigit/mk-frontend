import { useLocation, useRoutes } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import { routePage } from './routes'
import { Fragment } from 'react'
import { Toaster } from 'react-hot-toast'

function App(): JSX.Element {
  const location = useLocation()
  const routesContent = useRoutes(routePage)

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

{/* <GlobalStyles homePage={homePage} />
<Navbar />
<SiteContent>
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/cv' element={<CvPage />} />
    <Route path='/articles' element={<ArticlePage />} />
    <Route path='/galleria'>
      <Route index element={<GalleriaPage />} />
      <Route path=':slug' element={<Album />} />
    </Route>
  </Routes>
</SiteContent> */}
