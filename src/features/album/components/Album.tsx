import { useParams } from 'react-router-dom'
import { useAlbumBySlug } from '../useAlbum'
import { AlbumDetails } from './AlbumDetails'

// type AlbumParams = {
//   slug: string;
// }

export const Album = (): JSX.Element => {
  const { slug } = useParams() as {slug:string}
  const albumQuery = useAlbumBySlug(slug)

  if (albumQuery.isSuccess) {
    const album = albumQuery.data
    console.log({album})
    return (
      <>
        <AlbumDetails album={album} full />
      </>
    )
  }

  return (
    <>
      <h3>No albums yet.</h3>
    </>
  )
} 