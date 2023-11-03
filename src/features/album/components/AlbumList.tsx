import { AlbumListItem } from './AlbumListItem'
import { AlbumListContainer } from './AlbumList.styles'
import { useQuery } from '@tanstack/react-query'
import { ErrorHandler, LoadingHandler } from '@/components/handlers'
import { IAlbum } from '@/types'

export const AlbumsList = (): JSX.Element => {
  const albumQuery = useQuery<IAlbum[]>({ queryKey: ['/albums'] })

  if (albumQuery.data) {
    const showAlbums = albumQuery.data?.map(a => <AlbumListItem key={a.id} album={a} />)
    return (
      <AlbumListContainer>
        {showAlbums && showAlbums}
        {showAlbums && !showAlbums.length && <p>no albums yet.</p>}
      </AlbumListContainer>
    )
  }

  if (albumQuery.isError) return <ErrorHandler error={(albumQuery.error as Error)} />

  return <LoadingHandler />

}
