import './App.css'
import { CreateAlbum } from './components/album/CreateAlbum'
import { useAlbums,
  //  useAlbum, useAlbumsData
} from './hooks/useAlbums'

function App(): JSX.Element {
  // const albums = useAlbumsData()
  const albumsQuery = useAlbums()
  // const album = useAlbum(2)

  // if (album.isSuccess) {
  //   const al = album.data
  //   console.log('# ALBUM: ', al)
  // }

  if (albumsQuery.isSuccess) {
    const al = albumsQuery.data
    console.log('### ALBUMS: ', al)
  }
 
  return (
    <div className="App">
      <CreateAlbum />
      <p>suapa nähä:</p>     
    </div>
  )
}

export default App
