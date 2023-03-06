import { Route, Routes } from 'react-router-dom'
import Navbar from './components/layouts/nav/Navbar'
import { ArticlePage, CvPage, GalleriaPage, HomePage } from './pages'
import { useAlbums } from './features/album/useAlbum'
import GlobalStyles from './styles/GlobalStyles'
import { SiteContent } from './styles/styles'

function App(): JSX.Element {
  const albumsQuery = useAlbums()
  if (albumsQuery.isSuccess) {
    const al = albumsQuery.data
    console.log('# ALBUM: ', al)
  }
 
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <SiteContent>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/galleria' element={<GalleriaPage />} />
          <Route path='/cv' element={<CvPage />} />
          <Route path='/articles' element={<ArticlePage />} />
        </Routes>
      </SiteContent>
    </>
  )
}

export default App
