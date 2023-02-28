import { } from 'react'
import './App.css'
import { useAlbums, useAlbumsData } from './services/apiService'

function App(): JSX.Element {
  const albums = useAlbumsData()
  const albumsQuery = useAlbums()

  console.log(albums)

  if (albumsQuery.isSuccess) {
    const al = albumsQuery.data
    console.log('# ALBUMS: ', al)
  }

  return (
    <div className="App">
      <p>suapa nähä:</p>       
    </div>
  )
}

export default App
