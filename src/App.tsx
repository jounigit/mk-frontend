import { Route, Routes } from 'react-router-dom'
import Navbar from './components/layouts/nav/Navbar'
import { useAlbums } from './hooks/useAlbums'
import { ArticlePage } from './pages/ArticlePage'
import { CvPage } from './pages/CvPage'
import GalleriaPage from './pages/GalleriaPage'
import { HomePge } from './pages/HomePage'
import GlobalStyles from './styles/GlobalStyles'
import { SiteContent } from './styles/styles'

function App(): JSX.Element {
  const albumsQuery = useAlbums()
  // if (album.isSuccess) {
  //   const al = album.data
  //   console.log('# ALBUM: ', al)
  // }

  if (albumsQuery.isSuccess) {
    const albums = albumsQuery.data
    console.log('### ALBUMS: ', albums)
    return (
      <>
        {albums.map(a => (
          <h4 key={a.id}>
            {a.title}
          </h4>
        ))}
      </>
    )
  }
 
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <SiteContent>
        <Routes>
          <Route path='/' element={<HomePge />} />
          <Route path='/galleria' element={<GalleriaPage />} />
          <Route path='/cv' element={<CvPage />} />
          <Route path='/articles' element={<ArticlePage />} />
        </Routes>
      </SiteContent>
    </>
  )
}

export default App
