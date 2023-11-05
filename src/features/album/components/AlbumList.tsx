import { AlbumListItem } from './AlbumListItem'
import { AlbumListContainer } from './AlbumList.styles'
import { 
// ErrorHandler, 
// LoadingHandler 
} from '@/components/handlers'
import { fetchAlbumList } from '../useAlbum'
import { useSuspenseQuery } from '@tanstack/react-query'

export const AlbumsList = (): JSX.Element => {
  const { data } = useSuspenseQuery({
    queryKey: ['albums'],
    queryFn: fetchAlbumList,
  })

  const showAlbums = data.map(a => <AlbumListItem key={a.id} album={a} />)
  return (
    <AlbumListContainer>
      {showAlbums && showAlbums}
      {showAlbums && !showAlbums.length && <p>no albums yet.</p>}
    </AlbumListContainer>
  )


  // return <LoadingHandler />

}
