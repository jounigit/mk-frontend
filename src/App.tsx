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
    <div className="App">
      <CreateAlbum />
      <p>suapa nähä:</p>     
    </div>
  )
}

export default App
