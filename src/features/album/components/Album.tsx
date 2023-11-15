import { useParams } from 'react-router-dom'
import { AlbumDetails } from './AlbumDetails'
import { AlbumContainer } from './AlbumDetails.styles'
import { useAlbumBySlug } from '../useAlbum'

const Album = (): JSX.Element => {
  const { slug } = useParams() as {slug:string}
  const { data } = useAlbumBySlug(slug)

  const showData = data ?
    <AlbumDetails album={data} full /> :
    <p>No data yet.</p>

  return (
    <AlbumContainer>
      {showData}
    </AlbumContainer>
  )
}

export default Album
