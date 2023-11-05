import { 
  useQuery, 
  // useSuspenseQuery
} from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { IAlbum } from '@/types'
import { AlbumDetails } from './AlbumDetails'
import { AlbumContainer } from './AlbumDetails.styles'
import { 
// ErrorHandler, 
  LoadingHandler 
} from '@/components/handlers'
import { getBySlug } from '@/services/apiService'

const Album = (): JSX.Element => {
  const { slug } = useParams() as {slug:string}
  const { data } = useQuery<IAlbum>({
    queryKey: ['albums', slug],
    queryFn: async () => await getBySlug<IAlbum>({slug, url:'album'})
  })

  if ( data ) {
    const showData = <AlbumDetails album={data} full />
    return (
      <AlbumContainer>
        {showData && showData}
        { !showData && <p>No data yet.</p>}
      </AlbumContainer>
    )
  }

  // if (albumQuery.isError) return <ErrorHandler error={(albumQuery.error as Error)} />

  return <LoadingHandler />
}

export default Album

// const { data } = useSuspenseQuery<IAlbum, unknown>({
//   queryKey: ['albums', slug],
//   queryFn: async () => await getBySlug<IAlbum>({slug, url:'album'})
// })
