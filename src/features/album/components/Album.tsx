import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
// import { ErrorHandler, LoadingHandler } from '../../../components/handlers'
import { IAlbum } from '@/types'
// import { IAlbum } from '../../../types'
// import { useAlbumBySlug } from '../useAlbum'
import { AlbumDetails } from './AlbumDetails'
import { AlbumContainer } from './AlbumDetails.styles'
import { ErrorHandler, LoadingHandler } from '@/components/handlers'

const Album = (): JSX.Element => {
  const { slug } = useParams() as {slug:string}
  // const albumQuery = useAlbumBySlug(slug)

  const { isLoading, data, isError, error } = useQuery<IAlbum>({
    queryKey: [`/album/${slug}`],
    enabled: !!slug,
  })

  if (isLoading) return <LoadingHandler />
  if (isError) return <ErrorHandler error={(error as Error)} />
  console.log('-ALBUM slug: ', data)
  const showData = data && <AlbumDetails album={data} full />
  return (
    <AlbumContainer>
      {showData && showData}
      { !showData && <p>No data yet.</p>}
    </AlbumContainer>
  )
}

export default Album