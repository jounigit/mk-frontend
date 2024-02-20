import { AlbumListItem } from './AlbumListItem'
// import { fetchAlbumList } from '../useAlbum'
import { useSuspenseQuery } from '@tanstack/react-query'
import { ListContainer } from '@/styles/styles'
import { IAlbum } from '@/types'
import { getAll } from '@/services/apiService'

export const AlbumList = (): JSX.Element => {
  const { data } = useSuspenseQuery({
    queryKey: ['albums'],
    queryFn: async () => await getAll<IAlbum>('albums')
  })

  const showAlbums = data.length ?
    data.map(a => <AlbumListItem key={a.id} album={a} />) :
    <h4>no albums yet.</h4>

  return (
    <ListContainer>
      {showAlbums}
    </ListContainer>
  )
}
