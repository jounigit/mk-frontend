import { AlbumListItem } from './AlbumListItem'
import { AlbumListContainer } from './AlbumList.styles'
import { useAlbums } from '../useAlbum'
import { IAlbum } from '@/types'
import { LoadingSpinner } from '@/components/atoms'

export const AlbumsList = (): JSX.Element => {
  const albumsQuery = useAlbums()
  let albums: IAlbum[] = []

  if (albumsQuery.isLoading) return <LoadingSpinner mt={120} />

  if (albumsQuery.isError) return <h3>Jotain vikaa??</h3>

  if (albumsQuery.isSuccess) {
    albums = albumsQuery.data
  }

  // const sorted = isArray(albums)
  // && albums.sort((a, b) => b.year - a.year)

  const mappedData = albums.length > 0 && albums.map((a) => (
    <AlbumListItem
      key={a.id}
      id={a.id}
      title={a.title}
      slug={a.slug}
      pictures={a.pictures}
      // width={100}
      // height={100}
    />
  ))

  return (
    <AlbumListContainer>
      { mappedData && mappedData }
    </AlbumListContainer>
  )
}
