import { AlbumListItem } from './AlbumListItem'
import { AlbumListContainer } from './AlbumList.styles'
import { useQuery } from '@tanstack/react-query'
import { ErrorHandler, LoadingHandler } from '@/components/handlers'
import { IAlbum } from '@/types'

export const AlbumsList = (): JSX.Element => {
  const { isLoading, data, isError, error } =
  useQuery<IAlbum[]>({ queryKey: ['/albums'] })

  if (isLoading) return <LoadingHandler />

  if (isError) return <ErrorHandler error={(error as Error)} />

  const showAlbums = data?.map(a => <AlbumListItem key={a.id} album={a} />)

  return (
    <AlbumListContainer>
      {showAlbums && showAlbums}
      {showAlbums && !showAlbums.length && <p>no albums yet.</p>}
    </AlbumListContainer>
  )
}
