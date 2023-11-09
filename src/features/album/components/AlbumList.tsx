import { AlbumListItem } from './AlbumListItem'
import { AlbumListContainer } from './AlbumList.styles'
import { fetchAlbumList } from '../useAlbum'
import { useSuspenseQuery } from '@tanstack/react-query'

export const AlbumsList = (): JSX.Element => {
  const { data } = useSuspenseQuery({
    queryKey: ['albums'],
    queryFn: fetchAlbumList,
  })

  const showAlbums = data.length ?
    data.map(a => <AlbumListItem key={a.id} album={a} />) :
    <h4>no albums yet.</h4>

  return (
    <AlbumListContainer>
      {showAlbums}
    </AlbumListContainer>
  )


  // return <LoadingHandler />

}
